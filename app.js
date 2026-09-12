// PSAT Prep Coach — app logic
(function () {
  "use strict";

  // ───── Types / stateless helpers ─────
  const $ = (sel, root) => (root || document).querySelector(sel);

  function qForModule(modId) {
    return window.QUESTIONS.filter(function (q) { return q.module === modId; });
  }
  function moduleById(id) {
    return window.MODULES.find(function (m) { return m.id === id; });
  }
  function skillLabel(skillId) {
    for (const d in window.DOMAINS) {
      for (const g of window.DOMAINS[d].groups) {
        if (g.skills[skillId]) return g.skills[skillId];
      }
    }
    return skillId;
  }
  function domainOf(skillId) {
    for (const d in window.DOMAINS) {
      for (const g of window.DOMAINS[d].groups) {
        if (g.skills[skillId]) return d;
      }
    }
    return "";
  }
  function questionById(id) {
    return window.QUESTIONS.find(function (q) { return q.id === id; });
  }

  function esc(str) {
    return String(str).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  // Shuffle answer-choice display order so the correct answer isn't always A/B.
  // Returns a permutation of [0..n-1]; display index d shows choice[order[d]].
  function choiceOrder(n) {
    const order = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
  }

  // ───── State (persisted in localStorage) ─────
  const KEY = "psatcoach.v1";
  const DEFAULT_STATE = { attempts: {}, qseq: 0, session: null };
  let state;
  function load() {
    try { state = JSON.parse(localStorage.getItem(KEY)) || { ...DEFAULT_STATE }; }
    catch (e) { state = { ...DEFAULT_STATE }; }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  // Persist active module/drill session so closing the tab can be resumed.
  function persistSession() {
    const s = moduleSession;
    if (!s) { state.session = null; save(); return; }
    state.session = {
      mod: s.module.id,
      stage: s.stage,
      at: s.stage === "learn" ? 0 : Math.min(s.idx + 1, s.questions.length - 1),
      correct: s.correct,
      qids: s.questions.map(q => q.id),
      drill: !!s.drill
    };
    save();
  }

  // attempts[qid] = [{ ok: bool, skill, diff, ts }]
  function record(qid, ok) {
    const q = questionById(qid);
    (state.attempts[qid] = state.attempts[qid] || []).push({
      ok: ok, skill: q.skill, diff: q.diff, ts: Date.now()
    });
    save();
  }

  function skillStats(skillId) {
    let n = 0, good = 0;
    for (const qid in state.attempts) {
      const q = questionById(qid);
      if (q && q.skill === skillId) {
        for (const a of state.attempts[qid]) { n++; if (a.ok) good++; }
      }
    }
    return { n, good, pct: n ? good / n : null };
  }
  function allSkills() {
    const out = [];
    for (const d in window.DOMAINS) {
      for (const g of window.DOMAINS[d].groups) {
        for (const s in g.skills) out.push(s);
      }
    }
    return out;
  }
  function weaknessScore() {
    // aggregate accuracy per skill, return sorted weakest-first among attempted
    const rows = [];
    for (const s of allSkills()) {
      const st = skillStats(s);
      if (st.n > 0) rows.push({ skill: s, ...st });
    }
    return rows.sort(function (a, b) { return a.pct - b.pct; });
  }

  // ───── Router ─────
  let currentView = "dashboard";
  const views = ["dashboard", "practice", "progress"];
  function showView(name) {
    currentView = name;
    document.querySelectorAll(".view").forEach(function (v) { v.classList.remove("active"); });
    $("#view-" + name).classList.add("active");
    document.querySelectorAll(".navbtn").forEach(function (b) {
      b.classList.toggle("active", b.dataset.view === name);
    });
    if (name === "dashboard") renderDashboard();
    if (name === "practice") renderPracticeControls();
    if (name === "progress") renderProgress();
  }

  // ───── Dashboard ─────
  function renderGreeting() {
    const h = new Date().getHours();
    const g = h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
    $("#greeting").textContent = g + (window.USER_NAME ? ", " + window.USER_NAME : "");
  }

  function moduleDotState(m) {
    const st = skillStats(m.skill);
    if (!st.n) return "";
    return st.pct >= 0.75 ? "learned" : st.pct >= 0.5 ? "weak" : "weak";
  }

  function renderDashboard() {
    renderGreeting();
    // stats
    const allAttempts = Object.values(state.attempts).reduce((s, arr) => s + arr.length, 0);
    const allGood = Object.values(state.attempts).reduce((s, arr) => s + arr.filter(a => a.ok).length, 0);
    const overall = allAttempts ? Math.round((allGood / allAttempts) * 100) : 0;
    const modsDone = window.MODULES.filter(m => skillStats(m.skill).n > 0).length;
    const weak = weaknessScore().slice(0, 3);

    $("#statRow").innerHTML =
      stat(`${overall}%`, "Overall accuracy") +
      stat(`${modsDone}/${window.MODULES.length}`, "Modules started") +
      stat(`${allAttempts}`, "Questions answered") +
      stat(`${weak.length}`, "Weak areas to fix");

    // resume banner if an in-progress session exists
    const sess = state.session;
    $("#resumeRow").innerHTML = sess ? `
      <div class="resume-card">
        <div>
          <strong>In progress:</strong> ${esc(sess.drill ? "Adaptive drill" : (moduleById(sess.mod) ? moduleById(sess.mod).title : sess.mod))}
          · question ${sess.stage === "learn" ? "—" : Math.min(sess.at, sess.qids.length)}/${sess.qids.length} (${sess.stage})
        </div>
        <div class="action-row" style="margin:0">
          <button class="btn primary" id="resumeBtn">Resume</button>
          <button class="btn secondary" id="discardBtn">Discard</button>
        </div>
      </div>` : "";

    if (sess) {
      bind("resumeBtn", function () {
        moduleSession = {
          module: sess.drill
            ? { id: "drill", title: "Adaptive drill", domain: sess.qids.length ? (questionById(sess.qids[0]) || {}).domain || "RW" : "RW", skill: "" }
            : moduleById(sess.mod),
          stage: sess.stage,
          questions: sess.qids.map(questionById).filter(Boolean),
          idx: sess.stage === "learn" ? 0 : sess.at,
          correct: sess.correct,
          drill: sess.drill
        };
        renderModuleFlow();
        showView("practice");
        persistSession();
      });
      bind("discardBtn", function () {
        state.session = null; save(); renderDashboard();
      });
    }

    // module grid
    $("#moduleGrid").innerHTML = window.MODULES.map(function (m) {
      const dm = window.DOMAINS[m.domain];
      const st = skillStats(m.skill);
      const pct = st.n ? Math.round(st.pct * 100) : null;
      const meta = st.n ? `Accuracy ${pct}%` : m.meta;
      return `<div class="modcard" data-mod="${m.id}">
        <span class="domain" style="color:${dm.color}">${dm.label}</span>
        <h3>${esc(m.title)}</h3>
        <span class="meta">${esc(meta)}</span>
        <span class="dots">${dot(m, st)}</span>
      </div>`;
    }).join("");

    document.querySelectorAll(".modcard").forEach(function (c) {
      c.addEventListener("click", function () { startModule(c.dataset.mod); });
    });

    // weak spots
    const ws = $("#weakSpots");
    if (weak.length) {
      ws.innerHTML = `<h2>Focus areas</h2><div class="chip-row">
        ${weak.map(w => `<span class="chip">${esc(skillLabel(w.skill))} · ${Math.round(w.pct * 100)}%</span>`).join("")}
        <span class="chip good">Keep it up!</span>
      </div>`;
    } else {
      ws.innerHTML = `<h2>Focus areas</h2><div class="chip-row"><span class="chip good">Answer some questions to find your weak spots</span></div>`;
    }
  }

  function dot(m, st) {
    if (!st.n) return `<span class="dot"></span>`;
    const cls = st.pct >= 0.75 ? "done" : "weak";
    return `<span class="dot ${cls}"></span><span class="meta" style="font-size:0.75rem">${Math.round(st.pct * 100)}%</span>`;
  }
  function stat(num, lbl) {
    return `<div class="stat"><div class="num">${num}</div><div class="lbl">${lbl}</div></div>`;
  }

  // ───── Module flow ─────
  // Stages: learn -> practice (this module's Qs) -> check (mini assessment)
  let moduleSession = null; // { module, stage, questions:[...], idx, correct }

  function startModule(modId) {
    const mod = moduleById(modId);
    const qs = qForModule(modId);
    if (!qs.length) { alert("This module has no questions yet — more content coming."); return; }
    moduleSession = { module: mod, stage: "learn", questions: qs.slice(), idx: 0, correct: 0 };
    showView("practice"); // reuse the practice view for module flow
    renderModuleFlow();
    persistSession();
  }

  function renderModuleFlow() {
    const s = moduleSession;
    const q = s.questions[s.idx];

    // header bar showing stage
    let header = `<div class="controls">
      <div class="control-group"><label>${esc(s.module.domain === "MATH" ? "Math" : "Reading & Writing")} ·</label>
      <label>${esc(s.module.title)}</label></div>
      <div class="control-group"><label>Stage</label><button class="tagbtn active">${stageName(s.stage)}</button></div>
      <div class="control-group"><label>${s.idx + 1} / ${s.questions.length}</label></div>
    </div>`;

    if (s.stage === "learn") {
      renderLearn(s.module, header);
    } else if (s.stage === "practice" || s.stage === "check") {
      renderQuestion(q, header, true);
    }
  }

  function stageName(st) {
    return st === "learn" ? "Learn" : st === "practice" ? "Practice" : "Check";
  }

  function renderLearn(mod, header) {
    const pt = learnPoint(mod);
    const box = $("#questionBox");
    box.innerHTML = header + `
      <div class="question-box">
        <span class="q-tag ${mod.domain === "MATH" ? "math" : "rw"}">Learn</span>
        <div class="q-text">${esc(pt.main)}</div>
        ${pt.desmos ? `<div class="desmos-holder"><iframe src="${desmosSrc(pt.desmos)}" title="Desmos Graphing Calculator"></iframe></div><div class="desmos-note">Drag and explore — then answer the practice questions below.</div>` : ""}
        ${pt.tip ? `<div class="goal" style="margin-top:10px;color:#3a4258"><strong>💡 Key idea:</strong> ${esc(pt.tip)}</div>` : ""}
      </div>
      <div class="action-row">
        <button class="btn primary" id="learnGo">Start practicing</button>
      </div>`;
    $("#learnGo").addEventListener("click", function () {
      moduleSession.stage = "practice";
      moduleSession.idx = 0;
      renderModuleFlow();
    });
  }

  // Short, visual lesson content per module (kept light, not text-heavy)
  function learnPoint(mod) {
    const P = {
      "rw-1": { main: "Every passage is built around ONE central idea. Ask: what is this passage trying to convince me of? Details support it — the big claim is the answer.\n\nTry this: read the passage, then in one sentence say what it's about. If all the details support it, that's the central idea.", tip: "Wrong answers are often true-but-minor details. The central idea must cover the WHOLE passage." },
      "rw-2": { main: "Command of Evidence asks which fact or quote best supports a claim. Match the evidence to the SPECIFIC claim: if the claim is about a comparison, the evidence must compare; if about a cause, it must show cause.\n\nLook for the answer that directly completes or proves the underlined claim.", tip: "Beware evidence that is true but supports a DIFFERENT claim." },
      "rw-3": { main: "Inferences go one logical step beyond the text. The passage states facts; you must reason to the 'so what' that logically follows.\n\nOnly pick an answer that is SUPPORTED — don't import outside knowledge.", tip: "Eliminate answers that overreach or contradict the text." },
      "rw-4": { main: "Words in Context: ignore the everyday meaning. Read the sentence and use context clues — the surrounding words tell you the precise meaning the author intends.\n\nSubstitute each choice into the sentence and see which fits smoothly.", tip: "A 'definition' you know can still be the wrong nuance here." },
      "rw-5": { main: "Text Structure & Purpose asks WHY a part exists. Ask: what job does this paragraph/sentence/question do in the whole passage — introduce? contrast? support? summarize?", tip: "Focus on function (the job it does), not just its literal content." },
      "rw-6": { main: "Rhetorical Synthesis: you get notes and a goal (e.g., 'contrast', 'support', 'specify a reason'). Pick the sentence that uses the notes to achieve EXACTLY that goal.\n\nMatch the goal word to the sentence's logic.", tip: "Read the goal carefully — 'contrast' needs two differing ideas, 'reason' needs a cause." },
      "rw-7": { main: "Transitions connect ideas. Decide the logical relationship first (contrast? example? sequence? similarity?), then pick the word.\n\nDoes B extend A (then, similarly, for example) or turn against it (however, instead)?", tip: "'However/but' = contrast. 'For example' = illustration. Match the relationship." },
      "rw-8": { main: "Standard English Conventions = grammar & punctuation. Master the basics: subject-verb agreement, verb tense, comma splices, nonessential phrases.\n\nA nonessential phrase can be lifted out without breaking the sentence — set it off with commas.", tip: "Comma splices (two full sentences joined by a comma) are almost always wrong." },
      "m-1": { main: "Linear functions: y = mx + b. The slope m is the rate of change (rise/run); b is the starting value (y-intercept).\n\nTo interpret a model, label the units: what does the coefficient multiply? what is added at x=0?", desmos: "y=mx+b", tip: "The y-intercept (b) is the value when the input is 0." },
      "m-2": { main: "Systems of equations: find where two lines meet. Use substitution (plug one into the other) or elimination (add/subtract to cancel a variable).\n\nFor 'infinitely many solutions', the two equations must be multiples of each other.", desmos: "x+2y=6 \\n x-2y=4", tip: "Parallel, non-identical lines = no solution. Identical lines = infinite solutions." },
      "m-3": { main: "Inequalities describe ranges, not single answers. 'At most' = ≤, 'at least' = ≥.\n\nTranslate words to math: 'a total of' → sum; 'at most 14' → ≤ 14.", desmos: "y\\le x+2", tip: "Watch the direction words: at most (≤), at least (≥)." },
      "m-4": { main: "Quadratics can be written as ax² + bx + c (standard), a(x−h)² + k (vertex: vertex at (h,k)), or a(x−r)(x−s) (factored: roots r,s).\n\nTo find a minimum, look at vertex form — the vertex is the min or max.", desmos: "y=(x+7)^2+4", tip: "In vertex form, the min/max value is k, happening at x = h." },
      "m-5": { main: "Nonlinear functions include quadratics and exponentials. Read the CLOSE function behavior for the graph/word problem (max height, growth/decay).\n\nUse the vertex or starting value to set up the equation.", desmos: "y=-16(x-1.8)^2+51.84", tip: "For a throw/catapult, the vertex gives the maximum." },
      "m-6": { main: "Rates and proportions: set up equivalent fractions or unit rates.\n\ne.g., rate = 12 lbs / 3 min = 4 lbs/min. Then divide the total by the rate to get time.", desmos: "y=4x", tip: "Convert to a single unit rate first — it makes the rest trivial." },
      "m-7": { main: "Percent means 'per hundred.' 23% of 100 = 23; 89% of h = 0.89h.\n\nPercent as a decimal: move the point two places left (89% → 0.89).", desmos: "y=0.89x", tip: "0.89h means 89% of h — the decimal is the percent divided by 100." },
      "m-8": { main: "Statistics: the median is the middle value (average the two middle for an even count). A box plot draws the median as the line inside the box. Margin of error gives a plausible range: estimate ± error.", desmos: "", tip: "Margin of error does NOT mean every value falls in the range — just that the population mean plausibly does." },
      "m-9": { main: "Geometry & trig: parallel lines cut by a transversal create supplementary interior angles (sum 180). Triangle angles sum to 180. tan x° = opposite/adjacent.\n\nSimilar figures keep the SAME angles; only side lengths scale.", desmos: "", tip: "Similar figures = congruent angles, proportional sides. Scaling never changes angles." }
    };
    return P[mod.id] || { main: "Review the concept, then test yourself with the practice questions.", tip: "Work carefully and use the explanation button when needed." };
  }

  // ───── Question renderer ─────
  function renderQuestion(q, header, showDesmos) {
    const box = $("#questionBox");
    const isMC = q.type !== "math-spr";
    const dm = window.DOMAINS[q.domain];
    const tag = q.domain === "MATH" ? "math" : "rw";
    const label = q.domain === "MATH" ? "Math" : "Reading & Writing";

    let body = "";
    // build stem with passages
    if (q.passages) {
      body += `<div class="q-text">`;
      q.passages.forEach(function (p, i) {
        if (i === 0) body += `<span class="passage">${esc(p)}</span>`;
        else body += `<span class="blank">${esc(p)}</span>`;
      });
      body += `<div style="margin-top:8px">${esc(q.stem)}</div></div>`;
    } else {
      body += `<div class="q-text">${esc(q.text)}</div>`;
    }

    let choiceHTML = "";
    if (isMC) {
      const order = choiceOrder(q.choices.length);
      q.__order = order;
      choiceHTML = `<div class="choices">` + order.map(function (oi, i) {
        return `<div class="choice" data-i="${oi}"><span class="key">${String.fromCharCode(65 + i)}</span><span>${esc(q.choices[oi])}</span></div>`;
      }).join("") + `</div>`;
    } else {
      choiceHTML = `<div class="spr-input"><label>Your answer:</label> <input id="sprIn" type="text" inputmode="decimal" autocomplete="off" placeholder="e.g. 370 or -7"></div>`;
    }

    box.innerHTML = header + `
      <div class="question-box ${tag}">
        <span class="q-tag ${tag}">${label} · difficulty ${q.diff}/3</span>
        ${body}
        ${choiceHTML}
        <div class="action-row"><button class="btn primary" id="submitBtn" disabled>Check answer</button></div>
      </div>
      <div id="resultFeedback" class="feedback hidden"></div>`;

    // wire interactions
    if (isMC) {
      let sel = null;
      box.querySelectorAll(".choice").forEach(function (el) {
        el.addEventListener("click", function () {
          box.querySelectorAll(".choice").forEach(x => x.classList.remove("selected"));
          el.classList.add("selected");
          sel = parseInt(el.dataset.i, 10);
          $("#submitBtn").disabled = false;
          window.__sel = sel;
        });
      });
      $("#submitBtn").addEventListener("click", function () {
        if (window.__sel == null) return;
        grade(q, window.__sel);
      });
    } else {
      $("#submitBtn").disabled = false;
      $("#submitBtn").addEventListener("click", function () {
        const v = $("#sprIn").value.trim();
        if (!v) return;
        grade(q, null, v);
      });
    }
  }

  function desmosSrc(expr) {
    return "https://www.desmos.com/calculator?embed&expression=" + encodeURIComponent(expr);
  }

  // ───── Grading ─────
  function grade(q, idx, sprValue) {
    const fb = $("#resultFeedback");
    let ok = false;
    let correctTxt;
    if (q.type === "math-spr") {
      const target = q.answer;
      const val = parseFloat(sprValue);
      ok = isFinite(val) && Math.abs(val - target) < 0.001;
      correctTxt = String(target);
    } else {
      ok = idx === q.answer;
      const disp = (q.__order || Array.from({ length: q.choices.length }, (_, k) => k)).indexOf(q.answer);
      correctTxt = String.fromCharCode(65 + disp) + ") " + q.choices[q.answer];
    }

    // mark choices
    if (q.type !== "math-spr") {
      document.querySelectorAll(".choice").forEach(function (el) {
        const i = parseInt(el.dataset.i, 10);
        if (i === q.answer) el.classList.add("correct");
        else if (i === idx) el.classList.add("wrong");
      });
    }

    record(q.id, ok);

    const explain = esc(q.explanation);
    fb.classList.remove("hidden");
    fb.className = "feedback " + (ok ? "correct" : "incorrect");
    fb.innerHTML = (ok
      ? `<h3>Correct! 🎉</h3>`
      : `<h3>Not quite.</h3><p>The correct answer is <strong>${esc(correctTxt)}</strong>.</p>`) +
      `<div class="explain"><button class="explain-btn" id="whyBtn">Why? Show me how</button></div>
       <div id="explainbox" class="hidden"><p style="margin-top:10px">${explain}</p></div>
       <div class="action-row" id="nextActions"></div>`;

    $("#whyBtn").addEventListener("click", function () {
      $("#explainbox").classList.toggle("hidden");
    });

    updateNextActions(ok);
  }

  function updateNextActions(ok) {
    const s = moduleSession;
    if (!s) return;
    const wrap = $("#nextActions");
    s.correct += ok ? 1 : 0;

    const moreQs = s.idx + 1 < s.questions.length;
    const actions = [];
    if (moreQs) {
      actions.push(`<button class="btn primary" id="nextQ">Next question</button>`);
    } else if (s.drill) {
      actions.push(`<button class="btn primary" id="finishDrill">Finish drill</button>`);
    } else if (s.stage === "practice") {
      actions.push(`<button class="btn primary" id="toCheck">Start check-in</button>`);
    } else {
      actions.push(`<button class="btn primary" id="finishBtn">Finish module</button>`);
    }
    wrap.innerHTML = actions.join("");
    persistSession();

    bind("nextQ", function () { s.idx++; renderModuleFlow(); });
    bind("toCheck", function () {
      s.stage = "check";
      s.idx = 0;
      s.correct = 0;
      renderModuleFlow();
    });
    bind("finishDrill", function () { finishDrill(); });
    bind("finishBtn", function () { finishModule(); });
  }

  function finishDrill() {
    const s = moduleSession;
    const total = s.questions.length;
    const pct = total ? Math.round((s.correct / total) * 100) : 0;
    const box = $("#questionBox");
    box.innerHTML = `<div class="drill-end">
      <h2>Drill complete</h2>
      <div class="big-score">${pct}%</div>
      <p>${s.correct}/${total} correct in this session.</p>
      <div class="action-row" style="justify-content:center">
        <button class="btn secondary" id="backDash">Dashboard</button>
        <button class="btn primary" id="again">Drill again</button>
      </div>
    </div>`;
    const params = { section: "all", diff: 2 };
    moduleSession = null;
    persistSession();
    bind("backDash", function () { showView("dashboard"); });
    bind("again", function () { startDrill("all", 2); });
  }

  function bind(id, fn) {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", fn);
  }

  function finishModule() {
    const s = moduleSession;
    const total = s.questions.length;
    const pct = total ? Math.round((s.correct / total) * 100) : 0;
    const passed = pct >= 75;
    const box = $("#questionBox");
    box.innerHTML = `<div class="check-end">
      <h2>${passed ? "Module complete!" : "Module checked"}</h2>
      <div class="big-score">${pct}%</div>
      <p>${passed
        ? "Nice work — you've shown mastery of this skill. Ready for the next module or a mixed drill."
        : "You're close. Revisit the Learn screen and try the practice again."}</p>
      <div class="action-row" style="justify-content:center">
        <button class="btn secondary" id="backDash">Back to dashboard</button>
        <button class="btn primary" id="retryMod">${passed ? "Practice again" : "Try again"}</button>
      </div>
    </div>`;
    moduleSession = null;
    persistSession();
    bind("backDash", function () { showView("dashboard"); });
    bind("retryMod", function () { if (s) startModule(s.module.id); });
  }

  // ───── Standalone adaptive drill ─────
  let drill = null; // { pool:[], idx, correct }
  function renderPracticeControls() {
    // if finishing a module, module view owns this screen
    if (moduleSession) { renderModuleFlow(); return; }
    const ctl = $("#practiceControls");
    ctl.innerHTML = `
      <div class="control-group"><label>Difficulty</label>
        <button class="tagbtn" data-d="1">Easy</button>
        <button class="tagbtn active" data-d="2">Medium</button>
        <button class="tagbtn" data-d="3">Hard</button>
      </div>
      <div class="control-group"><label>Section</label>
        <button class="tagbtn" data-sec="all active">Both</button>
        <button class="tagbtn" data-sec="RW">Reading & Writing</button>
        <button class="tagbtn" data-sec="MATH">Math</button>
      </div>
      <div class="control-group"><button class="btn primary" id="startDrill">Start adaptive drill</button></div>`;

    const diffBtn = { cur: 2 }, secBtn = { cur: "all" };
    ctl.querySelectorAll(".tagbtn[data-d]").forEach(b => b.addEventListener("click", function () {
      diffBtn.cur = parseInt(b.dataset.d, 10);
      ctl.querySelectorAll(".tagbtn[data-d]").forEach(x => x.classList.toggle("active", x === b));
    }));
    ctl.querySelectorAll(".tagbtn[data-sec]").forEach(b => b.addEventListener("click", function () {
      secBtn.cur = b.dataset.sec;
      ctl.querySelectorAll(".tagbtn[data-sec]").forEach(x => x.classList.toggle("active", x === b));
    }));
    bind("startDrill", function () { startDrill(secBtn.cur, diffBtn.cur); });

    // also show a quick grid of modules to jump into
    $("#questionBox").innerHTML = `<div class="question-box">
      <span class="q-tag rw">Or dive into a topic</span>
      <div class="chip-row">${window.MODULES.map(m =>
        `<span class="chip" data-quickmod="${m.id}" style="cursor:pointer">${esc(m.title)}</span>`).join("")}
      </div>
    </div>`;
    document.querySelectorAll("[data-quickmod]").forEach(c => c.addEventListener("click", function () {
      startModule(c.dataset.quickmod);
    }));
  }

  function startDrill(section, diff) {
    let pool = window.QUESTIONS.filter(function (q) {
      if (section !== "all" && q.domain !== section) return false;
      return true;
    });
    if (!pool.length) { alert("No questions yet in that filter."); return; }
    // adaptive: prioritize weak skills, then sort by closeness to chosen diff
    const weak = new Set(weaknessScore().filter(w => w.n >= 2 && w.pct < 0.6).map(w => w.skill));
    pool = pool.sort(function (a, b) {
      const wa = weak.has(a.skill) ? -2 : 0, wb = weak.has(b.skill) ? -2 : 0;
      const da = Math.abs(a.diff - diff), db = Math.abs(b.diff - diff);
      return (wa + da) - (wb + db);
    }).slice(0, 8);

    moduleSession = {
      drill: true,
      module: { id: "drill", title: "Adaptive drill", domain: "RW", label: "Drill" },
      stage: "practice",
      questions: pool,
      idx: 0,
      correct: 0
    };
    renderModuleFlow();
    persistSession();
  }

  // ───── Progress view ─────
  function renderProgress() {
    const detail = $("#progressDetail");
    detail.innerHTML = window.DOMAINS.RW.groups.concat(window.DOMAINS.MATH.groups).map(function (g) {
      const rows = Object.keys(g.skills).map(function (s) {
        const st = skillStats(s);
        const pct = st.n ? Math.round(st.pct * 100) : 0;
        return `<div><strong>${esc(g.skills[s])}</strong> <span class="pct">${st.n ? pct + "% (" + st.good + "/" + st.n + ")" : "not started"}</span>
          <div class="bar"><div style="width:${st.n ? pct : 0}%"></div></div></div>`;
      }).join("");
      return `<div class="progress-block"><h3>${esc(g.label)}</h3>${rows}</div>`;
    }).join("");

    bind("resetBtn", function () {
      if (confirm("Reset all progress? This cannot be undone.")) {
        state = { ...DEFAULT_STATE };
        localStorage.removeItem(KEY);
        renderProgress();
        showView("dashboard");
      }
    });
  }

  // ───── Desmos embed behavior ─────
  // (Desmos requires network. We embed via official iframe API. Offline users
  // get the questions but the calculator won't load — noted on the page.)

  // ───── boot ─────
  load();
  // nav
  document.querySelectorAll(".navbtn").forEach(function (b) {
    b.addEventListener("click", function () { showView(b.dataset.view); });
  });
  $("#brandBtn").addEventListener("click", function () { showView("dashboard"); });
  showView("dashboard");
})();
