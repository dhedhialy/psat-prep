// PSAT Prep Coach — content & question bank
// Seeded from the Official PSAT/NMSQT Practice Test that ships with your
// downloaded College Board materials. Each item is tagged with its official
// content domain, a difficulty (1-3) and a misconception label so the adaptive
// engine can target the exact error a student makes.

// ───────────────────────── Curriculum map ─────────────────────────
// Points to the domains on-screen and how modules group.
window.DOMAINS = {
  RW: {
    label: "Reading & Writing",
    color: "#4b3fae",
    groups: [
      { id: "rw-info", label: "Information & Ideas", skills: { rw_central: "Central Ideas & Details", rw_evidence: "Command of Evidence", rw_inf: "Inferences" } },
      { id: "rw-craft", label: "Craft & Structure", skills: { rw_words: "Words in Context", rw_purpose: "Text Structure & Purpose" } },
      { id: "rw-expr", label: "Expression of Ideas", skills: { rw_rhet: "Rhetorical Synthesis", rw_trans: "Transitions" } },
      { id: "rw-conv", label: "Standard English Conventions", skills: { rw_bound: "Text Boundaries", rw_form: "Form, Structure & Sense" } }
    ]
  },
  MATH: {
    label: "Math",
    color: "#0e8a63",
    groups: [
      { id: "m-alg", label: "Algebra", skills: { m_lin: "Linear Equations & Functions", m_sys: "Systems of Equations", m_ineq: "Linear Inequalities" } },
      { id: "m-adv", label: "Advanced Math", skills: { m_quad: "Quadratics & Nonlinear Equations", m_nonlin: "Nonlinear Functions" } },
      { id: "m-ds", label: "Problem-Solving & Data Analysis", skills: { m_rate: "Rates, Ratios & Units", m_pct: "Percentages", m_stat: "Statistics & Data", m_prob: "Probability" } },
      { id: "m-geo", label: "Geometry & Trigonometry", skills: { m_geo: "Area, Volume & Angles", m_trig: "Right Triangles & Trig" } }
    ]
  }
};

// Module definitions drive the dashboard grid.
window.MODULES = [
  // ── Reading & Writing ──
  { id: "rw-1", domain: "RW", title: "Central Ideas & Details", skill: "rw_central", meta: "Find the main point the passage is making." },
  { id: "rw-2", domain: "RW", title: "Command of Evidence", skill: "rw_evidence", meta: "Pick the evidence that best supports a claim." },
  { id: "rw-3", domain: "RW", title: "Inferences", skill: "rw_inf", meta: "Reason beyond what the text says directly." },
  { id: "rw-4", domain: "RW", title: "Words in Context", skill: "rw_words", meta: "What a word most nearly means in context." },
  { id: "rw-5", domain: "RW", title: "Text Structure & Purpose", skill: "rw_purpose", meta: "Why is this passage structured this way?" },
  { id: "rw-6", domain: "RW", title: "Rhetorical Synthesis", skill: "rw_rhet", meta: "Use notes to build the strongest sentence." },
  { id: "rw-7", domain: "RW", title: "Transitions", skill: "rw_trans", meta: "Choose the logical connector between ideas." },
  { id: "rw-8", domain: "RW", title: "Standard English Conventions", skill: "rw_bound", meta: "Grammar, punctuation and sentence boundaries." },
  // ── Math ──
  { id: "m-1", domain: "MATH", title: "Linear Equations & Functions", skill: "m_lin", meta: "Solve and interpret linear relationships." },
  { id: "m-2", domain: "MATH", title: "Systems of Equations", skill: "m_sys", meta: "Find where two relationships meet." },
  { id: "m-3", domain: "MATH", title: "Linear Inequalities", skill: "m_ineq", meta: "Inequalities and solution regions." },
  { id: "m-4", domain: "MATH", title: "Quadratics & Nonlinear Equations", skill: "m_quad", meta: "Factoring, vertex form, and roots." },
  { id: "m-5", domain: "MATH", title: "Nonlinear Functions", skill: "m_nonlin", meta: "Exponential and quadratic behavior." },
  { id: "m-6", domain: "MATH", title: "Rates, Ratios & Units", skill: "m_rate", meta: "Proportions, rates and unit conversion." },
  { id: "m-7", domain: "MATH", title: "Percentages", skill: "m_pct", meta: "Percent of, change and markups." },
  { id: "m-8", domain: "MATH", title: "Statistics & Data", skill: "m_stat", meta: "Mean, median, box plots and scatterplots." },
  { id: "m-9", domain: "MATH", title: "Geometry & Trig", skill: "m_geo", meta: "Angles, triangles, area and volume." }
];

// ───────────────────────── Question bank ─────────────────────────
// type: "rw-mc" (passage/answer choices), "math-mc", "math-spr" (student response)
// Passages render with a left border; blanks render highlighted.

window.QUESTIONS = [
  // ═══════════ READING & WRITING ═══════════

  // RW-4 Words in Context
  { id: "rw4a", module: "rw-4", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_words",
    passages: ['The following text is adapted from Amy Lowell’s 1912 poem "Summer."\n\n"It is summer, glorious, deep-toned summer,\nThe very crown of nature’s changing year\nWhen all her surging life is at its full.\nTo me alone it is a time of pause,\nA void and silent space between two worlds,\nWhen inspiration lags, and feeling sleeps,\nGathering strength for efforts yet to come."'],
    stem: 'As used in the text, what does the phrase "a void" most nearly mean?',
    choices: ["A useless", "An empty", "A forgotten", "An incomplete"],
    answer: 1,
    explanation: '"A void and silent space" describes a pause in which nothing happens. "A void" = an empty space. The speaker is in a quiet, empty interval between two worlds, so "empty" fits the meaning.' },

  { id: "rw4b", module: "rw-4", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_words",
    passages: ['In the 1960s, Sam Gilliam, a Black painter from the southern United States, became the first artist to drape painted canvases into flowing shapes. He later explored a different style, _______ quilt-like paintings inspired by the patchwork quilting tradition of Black communities in the South.'],
    stem: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: ["predicting", "refusing", "hiding", "creating"],
    answer: 3,
    explanation: 'Gilliam made ("created") quilt-like paintings. He explored a new style by producing them, not by predicting, refusing, or hiding them.' },

  // RW-1 Central Ideas
  { id: "rw1a", module: "rw-1", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_central",
    passages: ['The following text is from Bram Stoker’s 1897 novel Dracula. The narrator is being driven in a carriage through a remote region at night.\n\n"The baying of the wolves sounded nearer and nearer, as though they were closing round on us from every side. I grew dreadfully afraid, and the horses shared my fear. The driver, however, was not in the least disturbed; he kept turning his head to left and right, but I could not see anything through the darkness."'],
    stem: 'As used in the text, what does the word "disturbed" most nearly mean?',
    choices: ["Disorganized", "Alarmed", "Offended", "Interrupted"],
    answer: 1,
    explanation: 'The driver was "not in the least disturbed" even though the narrator was afraid. Here "disturbed" = "alarmed" (upset/worried). The driver felt no alarm.' },

  // RW-3 Inferences (Saturn moons)
  { id: "rw3a", module: "rw-3", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_inf",
    passages: ['In 2019, 20 previously unknown moons were confirmed to be orbiting Saturn. Three of the moons have prograde orbits, and the other 17 have retrograde orbits. All but one of the 20 moons are thought to be remnants of bodies that orbited Saturn until they broke apart in collisions. Although the one exceptional moon orbits in the same direction as the planet’s spin, its orbit is highly eccentric compared to the rest.'],
    stem: 'Based on the text, which choice best describes the moon with the eccentric orbit?',
    choices: [
      "It doesn’t have a retrograde orbit, but it likely has the same origin as the moons with retrograde orbits.",
      "Its orbit is so tilted that it’s neither prograde nor retrograde.",
      "It has a prograde orbit that is likely the result of having collided with another body.",
      "It has a prograde orbit and may not be a remnant of an earlier body that orbited Saturn."
    ],
    answer: 3,
    explanation: 'The moon "orbits in the same direction as the planet’s spin," so it has a prograde orbit. Because it is the "one exceptional moon" that is NOT counted among the remnants, it "may not be a remnant of an earlier body." That is choice D.' },

  // RW-1 Central Ideas (Gilliam already used; use Barrier Williams)
  { id: "rw1b", module: "rw-1", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_central",
    passages: ['Early in the Great Migration, political activist Fannie Barrier Williams was instrumental in helping other Black women establish themselves in the North. Many women hoped for better employment in the North because, in the South, they faced much competition for domestic employment. To aid with this transition, Barrier Williams helped secure job placement in the North for many women before they even began their journey.'],
    stem: 'Which choice best states the main purpose of the text?',
    choices: [
      "To introduce and illustrate Barrier Williams’s integral role in supporting other Black women during the Great Migration",
      "To establish that Barrier Williams used connections to arrange jobs with the Chicago Defender",
      "To show the factors that motivated the Great Migration differed for women and men",
      "To give an overview of the employment challenges Black women faced in the South"
    ],
    answer: 0,
    explanation: 'The text focuses on Barrier Williams’s role: it introduces her and gives an example of how she helped ("secure job placement"). Choice A matches the main purpose. B misframes the jobs; C and D are about migration motivations and Southern challenges, not her role.' },

  // RW-5 Text Structure & Purpose (computer animators)
  { id: "rw5a", module: "rw-5", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_purpose",
    passages: ['"How lifelike are they?" Many computer animators prioritize this question as they strive to create ever more realistic environments and lighting. But some animators, such as Pixar’s Sanjay Patel, are focused on a different question: whether these elements reflect their films’ unique stories rather than convincingly mimic reality.'],
    stem: 'Which choice best describes the function of the underlined question in the text as a whole?',
    choices: [
      "It reflects a primary goal that many computer animators have for certain components of the animations they produce.",
      "It represents a concern of animators who want unique backgrounds more than realistic ones.",
      "It conveys uncertainty about how to create realistic animations.",
      "It illustrates a reaction audiences typically have to characters."
    ],
    answer: 0,
    explanation: 'The opening question frames the dominant goal of many animators (realism). It introduces the contrast with Patel later, so its function is to reflect the primary goal of many animators — choice A.' },

  // RW-2 Command of Evidence (bird nests)
  { id: "rw2a", module: "rw-2", domain: "RW", type: "rw-mc", diff: 3, skill: "rw_evidence",
    passages: ['Although most songbirds build open, cupped nests, some build domed nests with roofs that provide much more protection. Many ecologists have assumed that domed nests would provide protection from weather and thus allow species that build them to have larger geographic ranges than open-nesting species. To evaluate this, a team led by Iliana Medina analyzed data for over 3,000 species.'],
    stem: 'Which finding from the study, if true, would most directly challenge the assumption in the underlined sentence?',
    choices: [
      "Open-nest species tend to have higher extinction rates than domed-nest species.",
      "Open-nest species tend to be smaller than domed-nest species.",
      "Open-nest species tend to use fewer materials to build nests.",
      "Open-nest species tend to have larger ranges than domed-nest species."
    ],
    answer: 3,
    explanation: 'The assumption: domed nests → larger ranges. To challenge it, show the OPPOSITE — open-nest species have LARGER ranges (choice D). D directly contradicts the assumption.' },

  // RW-7 Transitions (reindeer)
  { id: "rw7a", module: "rw-7", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_trans",
    passages: ['The sun never sets during the Arctic summer in the Far North. In response, reindeer must change their sleep habits. Instead of resting when it gets dark, they rest when they need _______ their food.'],
    stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: ["digest", "will digest", "to digest", "digesting"],
    answer: 2,
    explanation: 'The phrase "they need to digest their food" is correct — after "need," use the infinitive "to digest."' },

  // RW-7 Transitions (monopsony)
  { id: "rw7b", module: "rw-7", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_trans",
    passages: ['In a product monopsony, the single buyer can force sellers to lower their prices. _______ in a labor monopsony, employers can force workers to accept lower wages.'],
    stem: 'Which choice completes the text with the most logical transition?',
    choices: ["Earlier,", "Instead,", "Similarly,", "In particular,"],
    answer: 2,
    explanation: 'Both sentences describe the same kind of situation: one powerful buyer forcing a weaker party to accept less. The relationship is parallel, so "Similarly," connects them.' },

  // RW-8 Conventions (verb tense — Muir)
  { id: "rw8a", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ['In 1903, environmentalist John Muir guided President Theodore Roosevelt on a trip through California’s Yosemite Valley. Upon returning from the three-day excursion, Roosevelt _______ to conserve the nation’s wilderness areas, a vow he upheld for his remaining six years in office.'],
    stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: ["is vowing", "vowed", "will vow", "vows"],
    answer: 1,
    explanation: 'The events are set in 1903 and "for his remaining six years" (already done), so use the simple past "vowed."' },

  // RW-8 Conventions (punctuation — polyphenols)
  { id: "rw8b", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ['Polyphenols are organic compounds _______ among their many roles, provide pigment that helps protect plants against ultraviolet radiation from sunlight.'],
    stem: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: ["that—", "that;", "that,", "that:"],
    answer: 2,
    explanation: '"that, among their many roles, provide pigment" — the clause "among their many roles" is a nonessential interrupter and must be set off by commas on both sides. The comma after "that" correctly starts the interrupter.' },

  // RW-6 Rhetorical Synthesis (Hobbit maps — contrast)
  { id: "rw6a", module: "rw-6", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_rhet",
    passages: ['While researching a topic, a student has taken the following notes:\n\n• J.R.R. Tolkien’s 1937 novel The Hobbit features two maps.\n• The novel opens with a reproduction of the map the characters use on their quest.\n• This map introduces readers to the fictional world they are about to enter.\n• The novel closes with a map depicting every stop on the characters’ journey.\n• That map allows readers to reconstruct the story they have just read.\n\nThe student wants to contrast the purposes of the two maps in The Hobbit.'],
    stem: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      "The Hobbit’s opening map introduces readers to the fictional world they are about to enter, while the closing map allows them to reconstruct the story they have just read.",
      "The Hobbit, a novel published by Tolkien in 1937, features two maps, one that appears at the beginning and one at the end.",
      "The Hobbit’s two maps, one opening and one closing the novel, each serve a purpose for readers.",
      "In 1937, Tolkien published The Hobbit, a novel featuring both an opening and a closing map."
    ],
    answer: 0,
    explanation: 'To CONTRAST the purposes, you must state each map’s distinct purpose. Choice A is the only one that names both purposes (introduce vs. reconstruct) — that is a contrast. The others only describe that there are two maps.' },

  // ═══════════ MATH ═══════════

  // M-6 Rates & Units
  { id: "m6a", module: "m-6", domain: "MATH", type: "math-mc", diff: 1, skill: "m_rate",
    text: "How many teaspoons are equivalent to 44 tablespoons? (3 teaspoons = 1 tablespoon)",
    choices: ["47", "88", "132", "176"],
    answer: 2,
    explanation: "Each tablespoon equals 3 teaspoons, so 44 tablespoons = 44 × 3 = 132 teaspoons." },

  // M-1 Linear equations
  { id: "m1a", module: "m-1", domain: "MATH", type: "math-mc", diff: 1, skill: "m_lin",
    text: "If x = 40, what is the value of x + 6?",
    choices: ["34", "40", "46", "64"],
    answer: 2,
    explanation: "Substitute x = 40: 40 + 6 = 46." },

  // M-7 Percentages
  { id: "m7a", module: "m-7", domain: "MATH", type: "math-mc", diff: 1, skill: "m_pct",
    text: "What is 23% of 100?",
    choices: ["23", "46", "77", "123"],
    answer: 0,
    explanation: "23% of 100 = 0.23 × 100 = 23. (Note: 23% of 100 is simply 23 because percent means per hundred.)" },

  // M-1 Linear equations — slope
  { id: "m1b", module: "m-1", domain: "MATH", type: "math-mc", diff: 2, skill: "m_lin",
    text: "For the function f, the graph of y = f(x) in the xy-plane has a slope of 3 and passes through the point (0, −8). Which equation defines f?",
    choices: ["f(x) = 3x", "f(x) = 3x − 8", "f(x) = 3x + 5", "f(x) = 3x + 11"],
    answer: 1,
    explanation: "Slope-intercept form y = mx + b. Slope m = 3. The point (0, −8) is the y-intercept, so b = −8. Thus y = 3x − 8." },

  // M-1 Linear — evaluate function
  { id: "m1c", module: "m-1", domain: "MATH", type: "math-mc", diff: 1, skill: "m_lin",
    text: "The function h is defined by h(x) = 3x − 7. What is the value of h(−2)?",
    choices: ["−13", "−10", "10", "13"],
    answer: 0,
    explanation: "h(−2) = 3(−2) − 7 = −6 − 7 = −13." },

  // M-2 Systems
  { id: "m2a", module: "m-2", domain: "MATH", type: "math-mc", diff: 2, skill: "m_sys",
    text: "x + 2y = 6\nx − 2y = 4\nThe solution to the given system of equations is (x, y). What is the value of x?",
    choices: ["2.5", "5", "6", "10"],
    answer: 1,
    explanation: "Add the two equations: (x + 2y) + (x − 2y) = 6 + 4 → 2x = 10 → x = 5. (This is the elimination method.)" },

  // M-2 Systems — infinitely many solutions
  { id: "m2b", module: "m-2", domain: "MATH", type: "math-mc", diff: 3, skill: "m_sys",
    text: "−15x + 25y = 65\nOne of the two equations in a system of linear equations is given. The system has infinitely many solutions. Which of the following could be the second equation?",
    choices: ["12x + 20y = 52", "12x + 20y = −52", "−12x + 20y = 52", "−12x + 20y = −52"],
    answer: 3,
    explanation: "For infinitely many solutions, the second equation must be a multiple of the first. −15x + 25y = 65 divided by −5 gives 3x − 5y = −13. Multiplying by 4: 12x − 20y = −52, which is choice D rewritten (−12x + 20y = −52 is the same equation ×(−1)). So choice D is a scalar multiple and yields infinite solutions." },

  // M-9 Geometry — triangle perimeter
  { id: "m9a", module: "m-9", domain: "MATH", type: "math-mc", diff: 1, skill: "m_geo",
    text: "A triangle has a perimeter of 22 units. If x = 9 units and y = 7 units, what is the value of z, in units?",
    choices: ["6", "7", "9", "16"],
    answer: 0,
    explanation: "Perimeter = x + y + z. So 22 = 9 + 7 + z → z = 22 − 16 = 6." },

  // M-9 Geometry — parallel lines
  { id: "m9b", module: "m-9", domain: "MATH", type: "math-mc", diff: 3, skill: "m_geo",
    text: "Lines r and s are parallel, and line m intersects both lines. If y < 65, which of the following must be true?",
    choices: ["x < 115", "x > 115", "x + y < 180", "x + y > 180"],
    answer: 1,
    explanation: "Because r and s are parallel, the angles x and y are supplementary (interior angles on the same side of the transversal): x + y = 180. If y < 65, then x = 180 − y > 180 − 65 = 115, so x > 115." },

  // M-9 Geometry & trig — tan
  { id: "m9c", module: "m-9", domain: "MATH", type: "math-mc", diff: 2, skill: "m_trig",
    text: "In a right triangle, the side opposite angle x° has length 26 and the side adjacent to angle x° has length 7. What is the value of tan x°?",
    choices: ["1/26", "19/26", "26/7", "33/7"],
    answer: 2,
    explanation: "tan x° = opposite / adjacent = 26 / 7." },

  // M-8 Statistics — median
  { id: "m8a", module: "m-8", domain: "MATH", type: "math-mc", diff: 1, skill: "m_stat",
    text: "Consider the data set: 6, 6, 8, 8, 8, 10, 21. Which of the following lists represents a data set that has the same median?",
    choices: ["4, 6, 6, 6, 8, 8", "6, 6, 8, 8, 10, 10", "6, 8, 10, 10, 10, 12", "8, 8, 10, 10, 21, 21"],
    answer: 1,
    explanation: "The original set (7 values, odd count) has median = the middle value = 8. Each option has 6 values, so its median is the average of the 3rd and 4th values. Option B = 6, 6, 8, 8, 10, 10 → 3rd=8, 4th=8 → median 8. It matches the original." },
  { id: "m8a2", module: "m-8", domain: "MATH", type: "math-mc", diff: 1, skill: "m_stat",
    text: "The table shows the frequency of values in a data set.\nValue: 19 | 21 | 23 | 25\nFrequency: 7 | 1 | 7 | 4\nWhat is the minimum value of the data set?",
    choices: ["19", "21", "23", "25"],
    answer: 0,
    explanation: "The smallest value that appears is 19, so that is the minimum." },

  // M-6 Rates — proportional
  { id: "m6b", module: "m-6", domain: "MATH", type: "math-mc", diff: 1, skill: "m_rate",
    text: "A cherry pitting machine pits 12 pounds of cherries in 3 minutes. At this rate, how many minutes does it take to pit 96 pounds?",
    choices: ["8", "15", "24", "36"],
    answer: 2,
    explanation: "Rate = 12/3 = 4 pounds/min. Time = 96 ÷ 4 = 24 minutes." },

  // M-6 Rates — gift card word problem
  { id: "m6c", module: "m-6", domain: "MATH", type: "math-mc", diff: 2, skill: "m_rate",
    text: "Henry receives a $60.00 gift card to pay for movies online. He buys 3 movies for $7.50 each. If he spends the rest of the balance renting movies for $1.50 each, how many movies can Henry rent?",
    choices: ["10", "25", "35", "40"],
    answer: 1,
    explanation: "3 movies × $7.50 = $22.50 spent. Remaining = 60 − 22.50 = $37.50. $37.50 ÷ $1.50 = 25 rentals." },

  // M-6 Rates — density / 85,100
  { id: "m6d", module: "m-6", domain: "MATH", type: "math-spr", diff: 1, skill: "m_rate",
    text: "The population density of Cedar County is 230 people per square mile. The county has a population of 85,100 people. What is the area, in square miles, of Cedar County?",
    answer: 370,
    explanation: "Density = population ÷ area, so area = population ÷ density = 85,100 ÷ 230 = 370 square miles." },

  // M-4 Quadratics — positive root
  { id: "m4a", module: "m-4", domain: "MATH", type: "math-mc", diff: 2, skill: "m_quad",
    text: "5x² − 37x − 24 = 0\nWhat is the positive solution to the given equation?",
    choices: ["3/5", "3", "8", "37"],
    answer: 2,
    explanation: "Factor: (x − 8)(5x + 3) = 0. So x = 8 or x = −3/5. The positive solution is 8." },

  // M-4 Quadratics — vertex (minimum)
  { id: "m4b", module: "m-4", domain: "MATH", type: "math-spr", diff: 2, skill: "m_quad",
    text: "f(x) = (x + 7)² + 4\nThe function f is defined by the given equation. For what value of x does f(x) reach its minimum?",
    answer: -7,
    explanation: "Vertex form f(x) = (x − h)² + k has its minimum at x = h. Here it is (x + 7)² = (x − (−7))², so h = −7. The minimum occurs at x = −7." },

  // M-4 Quadratics — function translation
  { id: "m4c", module: "m-4", domain: "MATH", type: "math-mc", diff: 3, skill: "m_quad",
    text: "The graph of f(x) = (x + 7)² + 4 is translated 3 units down and 4 units to the right to produce the graph of g. Which equation defines g?",
    choices: ["g(x) = (x + 11)² + 1", "g(x) = (x + 3)² + 1", "g(x) = (x + 3)² + 7", "g(x) = (x + 11)² + 7"],
    answer: 1,
    explanation: "Move right 4: replace x with x − 4 → (x − 4 + 7)² = (x + 3)². Move down 3: subtract 3 → (x + 3)² + 4 − 3 = (x + 3)² + 1. That is choice B." },

  // M-5 Nonlinear functions — softball height
  { id: "m5a", module: "m-5", domain: "MATH", type: "math-mc", diff: 3, skill: "m_nonlin",
    text: "A machine launches a softball from ground level. The softball reaches a maximum height of 51.84 meters at 1.8 seconds and hits the ground at 3.6 seconds. Which equation represents the height h, in meters, of the softball t seconds after launch?",
    choices: ["h = −t² + 3.6", "h = −t² + 51.84", "h = −16(t − 1.8)² − 3.6", "h = −16(t − 1.8)² + 51.84"],
    answer: 3,
    explanation: "Vertex form with vertex (1.8, 51.84): h = a(t − 1.8)² + 51.84. It starts at h=0 when t=0 (ground level), so 0 = a(0−1.8)² + 51.84 → a = −16. Thus h = −16(t−1.8)² + 51.84." },

  // M-8 Statistics — box plot median
  { id: "m8b", module: "m-8", domain: "MATH", type: "math-mc", diff: 2, skill: "m_stat",
    text: "A box plot summarizes 15 data values. The median line inside the box is drawn at 5. What is the median of this data set?",
    choices: ["2", "3", "5", "8"],
    answer: 2,
    explanation: "In a box plot, the line drawn inside the box represents the median. The median is 5." },

  // M-8 Statistics — margin of error
  { id: "m8c", module: "m-8", domain: "MATH", type: "math-mc", diff: 3, skill: "m_stat",
    text: "Based on a random sample, a researcher estimated that the mean value of a variable for the population is 20.5, with a margin of error of 1. Which is the most appropriate conclusion?",
    choices: [
      "It is plausible the actual population mean is between 19.5 and 21.5.",
      "It is not possible the population mean is less than 19.5 or greater than 21.5.",
      "Every value in the population is between 19.5 and 21.5.",
      "The population mean is 20.5."
    ],
    answer: 0,
    explanation: "A margin of error of 1 around an estimate of 20.5 gives an interval 20.5 ± 1 = [19.5, 21.5]. The correct interpretation is that it is plausible the true mean lies in that interval (choice A). It doesn't guarantee every value or exclude outliers." },

  // M-3 Inequalities — at most
  { id: "m3a", module: "m-3", domain: "MATH", type: "math-mc", diff: 2, skill: "m_ineq",
    text: "A cleaning service can clean at most 14 places per day. Which inequality represents this, where f = offices and h = homes?",
    choices: ["f + h ≤ 14", "f + h ≥ 14", "f − h ≤ 14", "f − h ≥ 14"],
    answer: 0,
    explanation: "Total places cleaned = f + h. 'At most 14' means this total is less than or equal to 14: f + h ≤ 14." },

  // M-1 Linear — model/predict value of a
  { id: "m1d", module: "m-1", domain: "MATH", type: "math-spr", diff: 2, skill: "m_lin",
    text: "A model predicts an animal weighed 241 pounds at birth and gained 3 pounds per day in its first year. The model is f(x) = a + bx, where f(x) is the predicted weight x days after birth. What is the value of a?",
    answer: 241,
    explanation: "In f(x) = a + bx, a is the value at x = 0 (birth weight, since b represents the daily gain added to the starting weight). The birth weight is 241, so a = 241." },

  // M-2 Systems — cherry... use gift card already. Use y=x+9 intersection
  { id: "m2c", module: "m-2", domain: "MATH", type: "math-mc", diff: 2, skill: "m_sys",
    text: "x = 49\ny = x + 9\nThe graphs of the given equations intersect at the point (x, y). What is the value of y?",
    choices: ["16", "40", "58", "130"],
    answer: 2,
    explanation: "Substitute x = 49 into y = x + 9: y = 49 + 9 = 58." },
  { id: "m2c2", module: "m-2", domain: "MATH", type: "math-mc", diff: 2, skill: "m_sys",
    text: "y = x² + 14x + 48\nx + 8 = 11\nThe solution to the given system is (x, y). What is the value of y?",
    choices: ["3", "8", "11", "99"],
    answer: 3,
    explanation: "x + 8 = 11 → x = 3. Substitute: y = 3² + 14(3) + 48 = 9 + 42 + 48 = 99. So y = 99." },

  // M-1 Linear — parallel slope
  { id: "m1e", module: "m-1", domain: "MATH", type: "math-mc", diff: 2, skill: "m_lin",
    text: "Line k is defined by y = (1/4)x + 1. Line j is parallel to line k in the xy-plane. What is the slope of j?",
    choices: ["1/4", "1", "4", "-1/4"],
    answer: 0,
    explanation: "Parallel lines have the same slope. Line k has slope 1/4, so line j also has slope 1/4." },

  // M-1 Linear — perimeter function width
  { id: "m1f", module: "m-1", domain: "MATH", type: "math-mc", diff: 2, skill: "m_lin",
    text: "f(x) = 2x + 244\nThe function f represents the perimeter, in cm, of a rectangle with length x cm and a fixed width. What is the width, in cm?",
    choices: ["2", "122", "244", "488"],
    answer: 1,
    explanation: "Perimeter = 2(length + width) = 2x + 2w. So 2w = 244 → w = 122." },

  // M-7 Percent — parallelogram base
  { id: "m7b", module: "m-7", domain: "MATH", type: "math-mc", diff: 1, skill: "m_pct",
    text: "The length of the base of a parallelogram is 89% of the height h. Which expression represents the base?",
    choices: ["89h", "0.089h", "8.9h", "0.89h"],
    answer: 3,
    explanation: "89% of h = 0.89 × h = 0.89h." },

  // M-5 Nonlinear — exponential max value
  { id: "m5b", module: "m-5", domain: "MATH", type: "math-mc", diff: 3, skill: "m_nonlin",
    text: "The functions f and g are defined for x ≥ 0. Which equation displays, as a constant or coefficient, the maximum value of the function it defines?\nI. f(x) = 33(0.4)^(x+3)\nII. g(x) = 33(0.16)(0.4)^(x−2)",
    choices: ["I only", "II only", "I and II", "Neither I nor II"],
    answer: 1,
    explanation: "Exponential decay functions with a base less than 1 (0.4) reach their maximum at the smallest x (here x = 0). For II, when x = 0, the coefficient 33(0.16) = 5.28 times (0.4)^(−2)... rather than displaying the max as a visible constant, the key check: II can be rewritten g(x) = 33(0.16)(0.4)^(x−2) = [33(0.16)/(0.4)²](0.4)^x. Its leading coefficient equals the f value at x=0. The one that DISPLAYS the maximum as a coefficient is II." },

  // M-3 Inequalities — x at most...
  { id: "m3b", module: "m-3", domain: "MATH", type: "math-spr", diff: 3, skill: "m_ineq",
    text: "A number x is at most 17 less than 5 times the value of y. If y = 3, what is the greatest possible value of x?",
    answer: -2,
    explanation: "x ≤ 5y − 17. With y = 3: x ≤ 5(3) − 17 = 15 − 17 = −2. The greatest possible value of x is −2." },

  // M-9 Geometry — similar quadrilaterals
  { id: "m9d", module: "m-9", domain: "MATH", type: "math-mc", diff: 2, skill: "m_geo",
    text: "Quadrilateral P′Q′R′S′ is similar to PQRS. The measure of angle P is 30°. The length of each side of P′Q′R′S′ is 3 times the corresponding side of PQRS. What is the measure of angle P′?",
    choices: ["10°", "30°", "40°", "90°"],
    answer: 1,
    explanation: "Similar figures have congruent corresponding angles. Scaling side lengths by 3 does not change angles, so angle P′ = angle P = 30°." },

  // ═══════════ AUTHORED ORIGINALS — RW-8 Conventions ═══════════
  { id: "rw8c", module: "rw-8", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_bound",
    passages: ["Each of the museum’s volunteers _______ assigned a specific gallery on the opening day."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["were", "was", "are", "have been"],
    answer: 1,
    explanation: "The subject is 'each,' which is singular, so the verb must be singular: 'Each of the museum’s volunteers was assigned.'" },

  { id: "rw8d", module: "rw-8", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_bound",
    passages: ["Neither the coach nor the players _______ satisfied with the final score of the match."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["was", "were", "is being", "has been"],
    answer: 1,
    explanation: "With 'neither...nor,' the verb agrees with the closer subject ('players'), which is plural, so 'were' is correct." },

  { id: "rw8e", module: "rw-8", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_bound",
    passages: ["The committee announced that its decision _______ during next month’s meeting."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["will be announced", "was announcing", "have announced", "announce"],
    answer: 0,
    explanation: "The decision will be announced in the future ('next month’s meeting'), so use the future passive: 'will be announced.'" },

  { id: "rw8f", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["The report, which had taken the team three weeks to prepare, _______ several inaccuracies that reviewers later identified."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["contain", "contains", "containing", "to contain"],
    answer: 1,
    explanation: "The subject 'The report' is singular, so the verb must be in the singular present form 'contains.' The clause 'which had taken...' is extra information and does not change the subject." },

  { id: "rw8g", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["Many students find that reviewing their notes the night before an exam _______ their confidence significantly."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["increase", "increases", "are increasing", "have increased"],
    answer: 1,
    explanation: "The subject is the clause 'reviewing their notes...' which is singular, so the verb must be 'increases.'" },

  { id: "rw8h", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["The concert, featuring three opening acts, _______ over four hours."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["last", "lasts", "are lasting", "to last"],
    answer: 1,
    explanation: "The subject 'The concert' is singular. The phrase 'featuring three opening acts' is nonessential and does not change it, so the verb is 'lasts.'" },

  { id: "rw8i", module: "rw-8", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_bound",
    passages: ["After the storm, the homeowners _______ the damage to their insurance company within the week."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["reports", "are reporting", "reported", "will report"],
    answer: 3,
    explanation: "The context is future ('within the week'), so the future tense 'will report' is correct." },

  { id: "rw8j", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["The introduction of the new software _______ the company’s production time by nearly a third."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["reduce", "reduces", "are reducing", "reducing"],
    answer: 1,
    explanation: "The subject 'The introduction' is singular, so the singular verb 'reduces' is correct." },

  { id: "rw8k", module: "rw-8", domain: "RW", type: "rw-mc", diff: 3, skill: "rw_bound",
    passages: ["Every student in the advanced and the standard classes _______ required to submit the project proposal by Friday."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["are", "is", "have been", "were"],
    answer: 1,
    explanation: "The subject is 'Every student,' which is singular even though it refers to students in multiple classes, so the verb is 'is.'" },

  { id: "rw8l", module: "rw-8", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_bound",
    passages: ["The number of applicants _______ to a record high this admissions cycle."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["have risen", "has risen", "are rising", "rise"],
    answer: 1,
    explanation: "'The number of applicants' is a singular subject (the number itself), so 'has risen' is correct." },

  { id: "rw8m", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["A set of three novels that examine the same characters _______ available at the university library."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["are", "is", "were sitting", "have been"],
    answer: 1,
    explanation: "The subject is 'A set,' which is singular, so the verb is 'is.' The phrase 'of three novels' is a prepositional phrase that modifies but does not change the subject." },

  { id: "rw8n", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["The painter, along with her two assistants, _______ the mural over the course of a weekend."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["complete", "completes", "are completing", "have completed"],
    answer: 1,
    explanation: "The subject is 'The painter' (singular). The phrase 'along with her two assistants' is extra and does not change agreement, so 'completes' is correct." },

  { id: "rw8o", module: "rw-8", domain: "RW", type: "rw-mc", diff: 3, skill: "rw_bound",
    passages: ["The boxer’s quick reflexes and sharp footwork _______ him a difficult opponent to strike."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["make", "makes", "making", "to make"],
    answer: 0,
    explanation: "Two things ('reflexes' and 'footwork') form a compound plural subject, so the plural verb 'make' is required." },

  { id: "rw8p", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["The audience rose to its feet when the final note of the symphony _______ ."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["play", "was played", "have played", "are playing"],
    answer: 1,
    explanation: "The note was played by performers (passive), and the event is in the past, so 'was played' is correct." },

  { id: "rw8q", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["Since the beginning of the season, the team _______ a string of impressive victories on home turf."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["earn", "earns", "has earned", "earning"],
    answer: 2,
    explanation: "'Since the beginning of the season' signals an action continuing from the past to now, so the present perfect 'has earned' is correct." },

  { id: "rw8r", module: "rw-8", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_bound",
    passages: ["By the time the fire department arrived, the flames _______ to the neighboring building."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["spread", "had spread", "are spreading", "will spread"],
    answer: 1,
    explanation: "The fire spread BEFORE the department arrived, so the past perfect 'had spread' is needed to show the earlier of two past events." },

  { id: "rw8s", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["If the committee _______ the proposal by noon, construction can begin on schedule next week."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["approve", "approves", "approved", "approving"],
    answer: 1,
    explanation: "The present subjunctive/future conditional uses the simple present in the 'if' clause for a singular subject: 'If the committee approves.'" },

  { id: "rw8t", module: "rw-8", domain: "RW", type: "rw-mc", diff: 3, skill: "rw_bound",
    passages: ["The scientist insisted that each trial _______ repeated at least twice to confirm the result was reliable."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["is", "be", "was being", "has been"],
    answer: 1,
    explanation: "After verbs like 'insist,' 'demand,' and 'require,' the subjunctive uses the base form: 'that each trial be repeated.'" },

  { id: "rw8u", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["Because the road was closed for repairs, the commuters _______ an alternative route through the valley."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["choose", "chose", "chosen", "choosing"],
    answer: 1,
    explanation: "The context is past ('was closed'), so the simple past 'chose' is the correct verb form." },

  { id: "rw8v", module: "rw-8", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_bound",
    passages: ["A graduate of the university’s engineering program, Maria _______ as a project lead for a decade before returning to teach."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["serves", "has served", "had served", "is serving"],
    answer: 2,
    explanation: "Maria's service as project lead happened before her return to teaching (also in the past), so the past perfect 'had served' is correct." },

  { id: "rw8w", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["The recipe calls for the mixture to be folded gently, as vigorous stirring _______ the delicate texture."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["ruin", "ruins", "ruining", "are ruining"],
    answer: 1,
    explanation: "The subject 'vigorous stirring' is a singular gerund phrase, so the verb must be singular: 'ruins.'" },

  { id: "rw8x", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["Neither the manager nor the interns _______ willing to work the holiday shift."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["was", "were", "is", "has been"],
    answer: 1,
    explanation: "With 'neither...nor,' the verb agrees with the nearer subject, 'interns' (plural), so 'were' is correct." },

  { id: "rw8y", module: "rw-8", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_bound",
    passages: ["Either the blueprints or the final drawing _______ to be corrected before the client reviews them."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["have", "has", "have been", "are"],
    answer: 1,
    explanation: "With 'either...or,' the verb agrees with the nearer subject, 'the final drawing' (singular), so 'has' is correct." },

  { id: "rw8z", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["The orchestra, one of the oldest in the region, _______ its spring season with a performance of a modern composer’s work."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["open", "opens", "are opening", "to open"],
    answer: 1,
    explanation: "The subject 'The orchestra' is singular, and the phrase 'one of the oldest in the region' is nonessential, so the verb is 'opens.'" },

  { id: "rw8aa", module: "rw-8", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_bound",
    passages: ["The mayor, who had campaigned on the issue, _______ her support for the new transit plan at the council meeting."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["announce", "announced", "announcing", "to announce"],
    answer: 1,
    explanation: "The event is in the past ('at the council meeting'), so the simple past 'announced' is correct." },

  { id: "rw8ab", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["Careful attention to detail, in addition to years of practice, _______ essential to mastering the craft of glassblowing."],
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["are", "is", "were", "have been"],
    answer: 1,
    explanation: "The subject is 'Careful attention' (singular). The phrase 'in addition to years of practice' does not change it, so 'is' is correct." },

  // ═══════════ AUTHORED ORIGINALS — RW-7 Transitions ═══════════
  { id: "rw7c", module: "rw-7", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_trans",
    passages: ["The new policy reduced the number of plastic bags distributed each month. _______, several local restaurants reported a sharp drop in their trash-collection costs."],
    stem: "Which choice completes the text with the most logical transition?",
    choices: ["However,", "For example,", "As a result,", "In other words,"],
    answer: 2,
    explanation: "The second sentence states an effect of the first: fewer bags led to lower trash costs. 'As a result,' correctly shows that cause-and-effect relationship." },

  { id: "rw7d", module: "rw-7", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_trans",
    passages: ["The hiking trail was strenuous and steep. _______, the group chose to attempt it in order to reach the scenic summit."],
    stem: "Which choice completes the text with the most logical transition?",
    choices: ["Consequently,", "Nevertheless,", "Similarly,", "Meanwhile,"],
    answer: 1,
    explanation: "The second sentence presents a contrast: despite the difficulty, they tried it. 'Nevertheless,' signals that contrast." },

  { id: "rw7e", module: "rw-7", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_trans",
    passages: ["The research team gathered soil samples from several locations. _______, they used those samples to test how the area’s moisture levels varied by depth."],
    stem: "Which choice completes the text with the most logical transition?",
    choices: ["Previously,", "For instance,", "Next,", "In contrast,"],
    answer: 2,
    explanation: "The sentences describe steps in order: first gathering samples, then testing them. 'Next,' indicates the sequence." },

  { id: "rw7f", module: "rw-7", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_trans",
    passages: ["Many people assume that all deserts are hot and sandy. _______, some deserts, such as those in central Asia, experience freezing temperatures and are covered in rock and gravel."],
    stem: "Which choice completes the text with the most logical transition?",
    choices: ["Likewise,", "In fact,", "Afterwards,", "Therefore,"],
    answer: 1,
    explanation: "The second sentence corrects or refines the common assumption with a surprising fact. 'In fact,' signals that the statement contradicts a common belief and adds precision." },

  { id: "rw7g", module: "rw-7", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_trans",
    passages: ["The city’s public library saw record attendance this summer. One explanation is its expanded programming for children, which drew families every weekend."],
    stem: "Which choice completes the text so that the second sentence provides a reason for the first?",
    choices: ["Nevertheless,", "One reason is", "By contrast,", "In the meantime,"],
    answer: 1,
    explanation: "The second sentence explains WHY attendance rose, so it directly provides a reason. Spelling it out as 'One reason is' best connects the two." },

  { id: "rw7h", module: "rw-7", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_trans",
    passages: ["The chef’s first restaurant became famous for its tasting menus. When she opened a second location, however, she decided to offer only a small selection of simple dishes."],
    stem: "Which choice completes the text with the most logical transition between the two sentences?",
    choices: ["For example,", "In addition,", "At the second location,", "As a consequence,"],
    answer: 2,
    explanation: "The contrast is between the two locations, so 'At the second location,' clarifies where the change happens and keeps the comparison clear." },

  { id: "rw7i", module: "rw-7", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_trans",
    passages: ["The athletes trained rigorously in the weight room. _______, they practiced their technique on the field for another two hours each day."],
    stem: "Which choice completes the text with the most logical transition?",
    choices: ["In addition,", "However,", "For instance,", "Rather,"],
    answer: 0,
    explanation: "The second sentence adds another type of training, so it continues the list of activities. 'In addition,' signals an additional point." },

  { id: "rw7j", module: "rw-7", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_trans",
    passages: ["The author’s early novels were known for their sprawling, intricate plots. Her later work, _______, favored a leaner, more focused style."],
    stem: "Which choice completes the text with the most logical transition?",
    choices: ["for instance", "by contrast", "in addition", "meanwhile"],
    answer: 1,
    explanation: "The sentence contrasts the earlier novels (sprawling) with the later ones (leaner). 'By contrast' marks that shift." },

  { id: "rw7k", module: "rw-7", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_trans",
    passages: ["The museum extended its hours to attract evening visitors. _______, weekend attendance climbed sharply, suggesting the change was working."],
    stem: "Which choice completes the text with the most logical transition?",
    choices: ["Indeed,", "Nevertheless,", "Earlier,", "By comparison,"],
    answer: 0,
    explanation: "The second sentence supports the first by offering evidence. 'Indeed,' emphasizes that the claim is backed up by the result." },

  { id: "rw7l", module: "rw-7", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_trans",
    passages: ["The recipe calls for unsalted butter. _______, the chef recommends replacing half of the water with milk for a richer texture."],
    stem: "Which choice completes the text with the most logical transition?",
    choices: ["Similarly,", "For example,", "Additionally,", "On the contrary,"],
    answer: 2,
    explanation: "The second sentence adds a further tip rather than contrasting with the first. 'Additionally,' best introduces an extra suggestion." },

  // ═══════════ AUTHORED ORIGINALS — RW-4 Words in Context ═══════════
  { id: "rw4c", module: "rw-4", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_words",
    passages: ["The town council decided to set aside the undeveloped land as a permanent green space, ensuring the park would remain open to residents for generations."],
    stem: "As used in the text, 'set aside' most nearly means",
    choices: ["reserve", "reject", "disregard", "purchase"],
    answer: 0,
    explanation: "In context, the council preserved the land for public use, so 'reserve' (keep for a purpose) is the closest meaning." },

  { id: "rw4d", module: "rw-4", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_words",
    passages: ["Despite years of setbacks, the inventor remained undeterred, filing new patent applications even after his initial designs failed in testing."],
    stem: "As used in the text, 'undeterred' most nearly means",
    choices: ["uncertain", "not discouraged", "unimpressed", "careless"],
    answer: 1,
    explanation: "The inventor kept trying despite failures, so he was not discouraged (not deterred from continuing)." },

  { id: "rw4e", module: "rw-4", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_words",
    passages: ["The curator arranged the paintings in chronological order so that visitors could trace the artist’s evolving style decade by decade."],
    stem: "As used in the text, 'trace' most nearly means",
    choices: ["sketch", "follow", "discover", "copy"],
    answer: 1,
    explanation: "Here visitors 'trace' (follow) the development of the style over time. The museum layout lets them follow the progression." },

  { id: "rw4f", module: "rw-4", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_words",
    passages: ["The committee’s report was notable for its candor, openly acknowledging mistakes that other organizations might have tried to conceal."],
    stem: "As used in the text, 'candor' most nearly means",
    choices: ["hostility", "frankness", "caution", "ambition"],
    answer: 1,
    explanation: "The report openly acknowledged errors, so it was notable for its frankness (honesty and openness)." },

  { id: "rw4g", module: "rw-4", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_words",
    passages: ["After weeks of negotiation, the two leaders reached a rapport that allowed them to resolve the dispute without further conflict."],
    stem: "As used in the text, 'rapport' most nearly means",
    choices: ["agreement", "harmonious relationship", "treaty", "argument"],
    answer: 1,
    explanation: "A rapport is a harmonious, trusting relationship. The leaders built one that helped them resolve the dispute amicably." },

  { id: "rw4h", module: "rw-4", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_words",
    passages: ["The hikers were advised to take ample water because the trail offered few places to replenish their supplies along the way."],
    stem: "As used in the text, 'ample' most nearly means",
    choices: ["a small amount of", "a plentiful supply of", "an extra charge of", "an uncertain amount of"],
    answer: 1,
    explanation: "'Ample water' means a plentiful supply, because the trail had few spots to refill." },

  { id: "rw4i", module: "rw-4", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_words",
    passages: ["The scientist’s conclusion was deemed premature because it rested on a single, small data set rather than a broad range of observations."],
    stem: "As used in the text, 'premature' most nearly means",
    choices: ["too hasty", "well supported", "unoriginal", "tempered"],
    answer: 0,
    explanation: "The conclusion was based on too little evidence, so it was 'premature' (too hasty / arrived at too early)." },

  { id: "rw4j", module: "rw-4", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_words",
    passages: ["The novel’s dense prose rewards patient readers, who gradually come to appreciate the layers of meaning woven into each scene."],
    stem: "As used in the text, 'dense' most nearly means",
    choices: ["intellectually complex", "crowded", "opaque", "heavy"],
    answer: 0,
    explanation: "In describing prose, 'dense' means full of meaning and intellectually demanding — readers need patience to appreciate it." },

  { id: "rw4k", module: "rw-4", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_words",
    passages: ["The new policy was designed to streamline the approval process, cutting the number of steps required from twelve to three."],
    stem: "As used in the text, 'streamline' most nearly means",
    choices: ["make more efficient", "complicate", "delay", "mandate"],
    answer: 0,
    explanation: "Cutting steps from twelve to three makes the process more efficient, which is what 'streamline' means." },

  { id: "rw4l", module: "rw-4", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_words",
    passages: ["The economist cautioned that the optimistic growth figures could be misleading, since they did not account for rising household debt."],
    stem: "As used in the text, 'cautioned' most nearly means",
    choices: ["agreed", "warned", "celebrated", "promised"],
    answer: 1,
    explanation: "The economist warned readers not to trust the figures too quickly, so 'cautioned' means 'warned.'" },

  { id: "rw4m", module: "rw-4", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_words",
    passages: ["The company’s abrupt change of direction left investors puzzled, as the sudden pivot seemed to contradict months of consistent strategy."],
    stem: "As used in the text, 'abrupt' most nearly means",
    choices: ["gradual", "sudden", "thoughtful", "announced"],
    answer: 1,
    explanation: "A change investors found sudden and puzzling is 'abrupt,' meaning happening quickly and unexpectedly." },

  { id: "rw4n", module: "rw-4", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_words",
    passages: ["After the storm, volunteers worked to restore power to the affected neighborhoods, a task that required both skill and patience."],
    stem: "As used in the text, 'restore' most nearly means",
    choices: ["bring back", "remove", "damage", "replace with new"],
    answer: 0,
    explanation: "Volunteers brought the power back, so 'restore' means 'bring back' to a previous working state." },

  // ═══════════ AUTHORED ORIGINALS — RW-1 Central Ideas ═══════════
  { id: "rw1c", module: "rw-1", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_central",
    passages: ["Urban planners increasingly recognize that adding trees along city streets does more than improve appearance. Trees absorb stormwater, lower summer temperatures, and provide shade that reduces energy use in nearby buildings."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "Urban trees offer several practical benefits beyond improving how a city looks.",
      "Trees on city streets are difficult to maintain in the summer heat.",
      "City planners disagree about whether street trees are worth the cost.",
      "Shade from trees is the only benefit that planners care about."
    ],
    answer: 0,
    explanation: "The text lists multiple benefits (stormwater, temperature, shade reducing energy) beyond appearance. Choice A captures that main idea; the others are unsupported." },

  { id: "rw1d", module: "rw-1", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_central",
    passages: ["Unlike paper maps, which require separate sheets to cover large areas, digital maps can zoom from a view of a whole country down to a single street. This flexibility lets users see both the big picture and the details without switching to a new document."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "Digital maps are harder to read than paper maps.",
      "A key strength of digital maps is their ability to show different levels of detail.",
      "Paper maps are more accurate than digital maps.",
      "Digital maps were the first maps ever created."
    ],
    answer: 1,
    explanation: "The text emphasizes that digital maps can zoom between broad and fine detail, which is their main advantage. Choice B matches." },

  { id: "rw1e", module: "rw-1", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_central",
    passages: ["Some species of fireflies emit light in specific, rhythmic patterns. Researchers have found that these patterns are not random: they appear to function as signals involved in attracting mates and, in some cases, in warning predators of the insects’ bitter taste."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "Firefly light patterns serve purposes such as attracting mates and warning predators.",
      "All firefly species emit the same light pattern.",
      "Researchers cannot explain why fireflies glow.",
      "Fireflies use light mainly to illuminate dark forests."
    ],
    answer: 0,
    explanation: "The text states the patterns are not random and explains they help attract mates and warn predators. Choice A is the central idea." },

  { id: "rw1f", module: "rw-1", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_central",
    passages: ["Composting food scraps reduces the amount of waste sent to landfills, where decomposing organic matter releases methane, a potent greenhouse gas. When composted instead, the same scraps break down more slowly and their nutrients return to the soil, supporting plant growth."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "Composting benefits the environment by reducing landfill methane and returning nutrients to soil.",
      "Landfills are the only way to dispose of food waste.",
      "Composting takes longer than sending waste to a landfill.",
      "Methane is released only when food scraps are composted."
    ],
    answer: 0,
    explanation: "The text explains two benefits: less methane in landfills and nutrients returning to soil. Choice A captures both parts of the main idea." },

  { id: "rw1g", module: "rw-1", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_central",
    passages: ["Studies of marathon runners show that their performance improves most noticeably in the weeks immediately after a focused period of training, rather than constantly through the season. This pattern suggests that giving the body time to adapt is as important as the training itself."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "Rest and recovery are essential for training to produce improvements.",
      "Marathon training should never include rest days.",
      "Running performance cannot be improved through training.",
      "Most runners improve fastest at the very start of a season."
    ],
    answer: 0,
    explanation: "The text concludes that giving the body time to adapt (rest/recovery) matters as much as training. Choice A states this main idea." },

  { id: "rw1h", module: "rw-1", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_central",
    passages: ["The honeybee population in many regions has declined sharply over the past two decades. Scientists attribute part of this decline to the increased use of certain pesticides, which can harm bees even at levels once considered safe."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "Certain pesticides are linked to the decline of honeybee populations.",
      "Honeybees are thriving in most parts of the world.",
      "Pesticides have no effect on insect populations.",
      "The decline of honeybees is caused entirely by climate change."
    ],
    answer: 0,
    explanation: "The text links pesticide use to the bee decline. Choice A states this directly." },

  { id: "rw1i", module: "rw-1", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_central",
    passages: ["Although the two novels share a similar setting and cast of recurring characters, they differ sharply in tone. The first is satirical and brisk, while the second adopts a more measured, reflective voice that slows the pace of the story."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "The novels differ less in content than in their overall tone and pacing.",
      "Both novels are set in the same country.",
      "The second novel features characters absent from the first.",
      "The novels were written by different authors."
    ],
    answer: 0,
    explanation: "The text stresses the contrast in tone and pacing despite shared setting and characters. Choice A best captures the central comparison." },

  { id: "rw1j", module: "rw-1", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_central",
    passages: ["Reading aloud to young children has been shown to strengthen their vocabulary and listening skills. It also builds an association between books and comfort, which can encourage children to read independently as they grow older."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "Reading aloud to children supports both language skills and positive attitudes toward reading.",
      "Only teachers, not parents, should read to children.",
      "Young children learn to read entirely on their own.",
      "Books are unnecessary for building vocabulary."
    ],
    answer: 0,
    explanation: "The text links reading aloud to vocabulary, listening skills, and a positive association with books. Choice A summarizes that main idea." },

  { id: "rw1k", module: "rw-1", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_central",
    passages: ["The timing of a plant’s flowering is not purely a matter of temperature. Many species also respond to the length of daylight, a signal that lets them bloom at a reliable point in the year rather than merely reacting to warm spells that can occur in any season."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "Day length, not just temperature, helps many plants determine when to flower.",
      "Flowering is influenced only by soil quality.",
      "Temperature has no effect on when plants flower.",
      "Plants that flower are always responding to sudden weather changes."
    ],
    answer: 0,
    explanation: "The text emphasizes that day length (not just temperature) governs flowering timing. Choice A states this main idea." },

  // ═══════════ AUTHORED ORIGINALS — RW-3 Inferences ═══════════
  { id: "rw3b", module: "rw-3", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_inf",
    passages: ["A baker noticed that her breads rose higher on days when she added the salt to the flour before proofing than when she added it directly to the yeast mixture. She repeated the test over several weeks and observed the same result every time."],
    stem: "Based on the text, which choice best describes a likely conclusion the baker could draw?",
    choices: [
      "The order in which salt is added affects how much the bread rises.",
      "Salt has no effect on the proofing of bread.",
      "Higher bread is caused entirely by the type of flour.",
      "The results were likely due to random chance."
    ],
    answer: 0,
    explanation: "Since she got the same result repeatedly, the most likely conclusion is that the order of adding salt affects rising. Choice A follows from the repeated pattern." },

  { id: "rw3c", module: "rw-3", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_inf",
    passages: ["In a study, students who kept a paper planner wrote down more assignment details than students who relied on a calendar app. However, students using the app checked their deadlines more frequently and missed fewer of them."],
    stem: "Which choice is best supported by the text?",
    choices: [
      "Frequent deadline checks may help prevent missed deadlines even when notes are brief.",
      "Paper planners cause students to miss more deadlines.",
      "Calendar apps always lead to higher grades.",
      "Students who write more details never miss a deadline."
    ],
    answer: 0,
    explanation: "The app users wrote less but checked deadlines more and missed fewer. This supports the inference that frequent checking, not long notes, helped meet deadlines — choice A." },

  { id: "rw3d", module: "rw-3", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_inf",
    passages: ["A wildlife biologist tracked a species of bird that migrates each autumn. She found that birds departing later in the season carried significantly more body fat than those leaving early."],
    stem: "Which choice is best supported by the text?",
    choices: [
      "Birds that leave later may need extra energy reserves for the journey.",
      "Early-departing birds always travel farther.",
      "Birds gain fat only after reaching their destination.",
      "Later departure causes the birds to lose their feathers."
    ],
    answer: 0,
    explanation: "The later-departing birds carried more fat, which suggests they needed the extra fuel. Choice A is the most reasonable supported inference." },

  { id: "rw3e", module: "rw-3", domain: "RW", type: "rw-mc", diff: 3, skill: "rw_inf",
    passages: ["A language researcher recorded that speakers of a certain dialect use a rising tone to signal politeness, while speakers of the standard form of the same language use a rising tone for questions. In a recording, a fluent speaker of the dialect asks a question using a falling tone."],
    stem: "Which choice is best supported by the text?",
    choices: [
      "Listeners of the dialect may perceive the speaker as impolite rather than as asking a question.",
      "The speaker is likely not a native of the dialect.",
      "Rising tones are never used in the standard form of the language.",
      "The question was probably asked by a machine."
    ],
    answer: 0,
    explanation: "Because rising tone signals politeness in the dialect, a question spoken with a falling tone could be misread. Choice A follows logically from the tonal contrast described." },

  { id: "rw3f", module: "rw-3", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_inf",
    passages: ["Researchers gave two groups of swimmers the same practice routine. One group was told to imagine themselves completing each stroke perfectly; the other was not. Over eight weeks, the group that used mental imagery improved their finish times more than the other group."],
    stem: "Based on the text, which choice is most likely true?",
    choices: [
      "Mental imagery practice can contribute to improved swimming performance.",
      "Physical practice has no effect on performance.",
      "All swimmers improve at exactly the same rate.",
      "Imagining a stroke makes a swimmer slower."
    ],
    answer: 0,
    explanation: "The imagery group improved more, so mental practice appears to contribute to gains. Choice A is the supported inference." },

  // ═══════════ AUTHORED ORIGINALS — RW-5 Text Structure & Purpose ═══════════
  { id: "rw5b", module: "rw-5", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_purpose",
    passages: ["The museum’s new wing has been praised for its bold architecture, with critics comparing its sweeping glass curves to a ship’s hull. Yet visitors have complained that the open design lets in too much light, fading the artworks on the walls."],
    stem: "The second sentence serves mainly to",
    choices: [
      "provide a counterpoint to the praise in the first sentence",
      "explain why the architecture was praised",
      "introduce the museum’s history",
      "describe how the wing was constructed"
    ],
    answer: 0,
    explanation: "The first sentence praises the wing; the second introduces a visitor complaint, offering a contrasting point. Its function is to provide a counterpoint." },

  { id: "rw5c", module: "rw-5", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_purpose",
    passages: ["The introduction of refrigerated rail cars in the late 1800s transformed American agriculture. For the first time, perishable goods such as fresh meat and dairy could be shipped long distances, allowing farmers in distant regions to reach urban markets they had previously been unable to supply."],
    stem: "The phrase 'For the first time' mainly serves to",
    choices: [
      "emphasize that refrigerated rail cars made possible something that had not existed before",
      "suggest that earlier trains were faster",
      "show that agriculture began in the late 1800s",
      "indicate that the author dislikes modern food shipping"
    ],
    answer: 0,
    explanation: "'For the first time' stresses that shipping perishables long distances was a new development made possible by the innovation — emphasizing the novelty of what the rail cars enabled." },

  { id: "rw5d", module: "rw-5", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_purpose",
    passages: ["Bamboo is often described as a tree, but botanically it is a grass. Like other grasses it grows from underground stems, and some species can shoot up more than a meter in a single day."],
    stem: "The main purpose of the text is to",
    choices: [
      "correct a common misconception about bamboo",
      "argue that bamboo should not be planted",
      "describe the uses of bamboo products",
      "compare bamboo with a kind of tree"
    ],
    answer: 0,
    explanation: "The text challenges the idea that bamboo is a tree by showing it is a grass. Its purpose is to correct a common misconception." },

  { id: "rw5e", module: "rw-5", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_purpose",
    passages: ["While studying for the exam, Priya tried both highlighting and note-taking. Highlighting felt faster in the moment, but on the practice test she performed better on material she had written out in her own words. The difference was enough to convince her to change her study routine."],
    stem: "The fact that 'the difference was enough to convince her' mainly serves to",
    choices: [
      "show that the results influenced Priya’s future behavior",
      "prove that highlighting is always ineffective",
      "suggest that Priya disliked taking notes",
      "indicate that the practice test was too easy"
    ],
    answer: 0,
    explanation: "This detail shows the outcome led Priya to act: she decided to change her routine. It emphasizes that the result affected her behavior." },

  { id: "rw5f", module: "rw-5", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_purpose",
    passages: ["Some economists argue that a national savings rate above a certain threshold signals a healthy economy. Others counter that extremely high savings can indicate low consumer confidence, as households hold back spending when they fear the future."],
    stem: "The structure of the text is best described as",
    choices: [
      "presenting one view, then presenting an opposing view",
      "describing a single event in chronological order",
      "listing several unrelated examples",
      "posing a question and then answering it"
    ],
    answer: 0,
    explanation: "The text gives one position (high savings = healthy) and then a contrasting one (high savings = low confidence). It presents two opposing views." },

  // ═══════════ AUTHORED ORIGINALS — RW-2 Command of Evidence ═══════════
  { id: "rw2b", module: "rw-2", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_evidence",
    passages: ["Researchers hypothesized that exposure to green space reduces stress. To test this, they measured the stress hormone levels of office workers before and after a 20-minute walk in a city park."],
    stem: "Which finding, if true, would best support the researchers’ hypothesis?",
    choices: [
      "Workers who walked in the park had lower stress-hormone levels afterward than before.",
      "Workers who walked in the park spent more money at nearby cafés.",
      "Park visitors reported enjoying sunny weather.",
      "Indoor workers slept longer than park walkers."
    ],
    answer: 0,
    explanation: "To support the hypothesis that green space reduces stress, the clearest evidence is that stress hormones dropped after the park walk — choice A." },

  { id: "rw2c", module: "rw-2", domain: "RW", type: "rw-mc", diff: 3, skill: "rw_evidence",
    passages: ["A student claims that adding a short break during long study sessions improves focus more than studying continuously. The student has gathered a study comparing two groups of learners over a two-hour session."],
    stem: "Which piece of evidence would most effectively support the student’s claim?",
    choices: [
      "Learners who took a 10-minute break scored higher on a focus test than learners who studied without a break.",
      "Learners who studied continuously completed more practice problems.",
      "Both groups reported similar levels of motivation.",
      "Learners who took breaks preferred studying in the morning."
    ],
    answer: 0,
    explanation: "The claim is about breaks improving focus. Direct support is choice A, which shows the break group scored higher on a focus test." },

  { id: "rw2d", module: "rw-2", domain: "RW", type: "rw-mc", diff: 3, skill: "rw_evidence",
    passages: ["A researcher argues that urban bird populations rely on human-provided food during harsh winters, based on the observation that urban birds survive cold spells better than rural birds of the same species."],
    stem: "Which additional evidence would most strengthen the researcher’s argument?",
    choices: [
      "Urban birds were observed feeding at backyard feeders throughout the coldest months.",
      "Urban and rural birds are the same species.",
      "Some rural birds migrate south during winter.",
      "Urban temperatures are slightly higher than rural temperatures."
    ],
    answer: 0,
    explanation: "The argument is that humans help birds survive winter. Direct evidence of urban birds feeding at human-provided feeders (choice A) most strengthens that claim." },

  { id: "rw2e", module: "rw-2", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_evidence",
    passages: ["A team hypothesized that the language used in product reviews influences how much readers trust them. To test this, they rewrote the same review using either highly emotional or neutral wording and asked readers to rate the review's reliability."],
    stem: "Which result would most directly support the hypothesis?",
    choices: [
      "Reviews with extreme emotional wording were rated as less reliable than neutral ones.",
      "Readers spent the same amount of time on both versions.",
      "The reviewers liked both versions equally.",
      "Readers could not remember the product name."
    ],
    answer: 0,
    explanation: "The hypothesis is that wording affects how much readers trust reviews. Choice A shows the two wordings produced different trust ratings, directly supporting it." },

  // ═══════════ AUTHORED ORIGINALS — RW-6 Rhetorical Synthesis ═══════════
  { id: "rw6b", module: "rw-6", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_rhet",
    passages: ["While researching a topic, a student has taken the following notes:\n\n• Sunflowers track the sun across the sky during the day.\n• At night, they turn back to face east.\n• Scientists found the plants grow faster on the side facing the sun.\n• This growth bends the stem, moving the flower head.\n\n\nThe student wants to explain the mechanism by which sunflowers follow the sun. Which choice most effectively uses the notes to accomplish this goal?"],
    stem: "Which response best matches the student’s goal?",
    choices: [
      "Sunflowers follow the sun because the side of the stem facing the sun grows faster, bending the flower head toward the light.",
      "Sunflowers face east at night and track the sun during the day.",
      "Sunflowers are tall plants with large yellow flower heads.",
      "Researchers studied sunflowers in a laboratory."
    ],
    answer: 0,
    explanation: "The goal is to explain the mechanism. Choice A connects the faster growth on the sun-facing side to the bending that moves the flower head — the only response that explains how it works." },

  { id: "rw6c", module: "rw-6", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_rhet",
    passages: ["While researching a topic, a student has taken the following notes:\n\n• The Erie Canal opened in 1825.\n• It connected the Great Lakes to the Hudson River.\n• It allowed goods to travel from the Midwest to New York City by water.\n• Shipping costs fell dramatically after it opened.\n\nThe student wants to emphasize the canal’s economic effect. Which choice most effectively uses the notes to accomplish this goal?"],
    stem: "Which response best matches the student’s goal?",
    choices: [
      "By connecting the Great Lakes to the Hudson River, the Erie Canal slashed shipping costs between the Midwest and New York City.",
      "The Erie Canal, opened in 1825, was a large waterway in the United States.",
      "Many cities grew along the route of the Erie Canal.",
      "The canal was designed and built by engineers in the 1800s."
    ],
    answer: 0,
    explanation: "Emphasizing the economic effect means focusing on the drop in shipping costs. Choice A is the only response that makes that point central." },

  { id: "rw6d", module: "rw-6", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_rhet",
    passages: ["While researching a topic, a student has taken the following notes:\n\n• Octopuses can change color to blend into their surroundings.\n• They can also mimic the shape and movement of other sea creatures.\n• This ability is thought to help them avoid predators.\n• It may also help them sneak up on prey.\n\nThe student wants to contrast the two main functions of camouflage. Which choice most effectively uses the notes?"],
    stem: "Which response best matches the student’s goal?",
    choices: [
      "Octopuses use camouflage both to avoid predators and to approach prey unnoticed.",
      "Octopuses can change color and shape.",
      "Camouflage is a rare ability among ocean animals.",
      "Octopuses are intelligent invertebrates."
    ],
    answer: 0,
    explanation: "To contrast the two functions (avoiding predators vs. approaching prey), choice A names both functions that the notes support." },

  // ═══════════ AUTHORED ORIGINALS — M-1 Linear Equations & Functions ═══════════
  { id: "m1g", module: "m-1", domain: "MATH", type: "math-mc", diff: 1, skill: "m_lin",
    text: "If 3x = 27, what is the value of 5x?",
    choices: ["25", "32", "45", "135"],
    answer: 2,
    explanation: "3x = 27 → x = 9. Then 5x = 5(9) = 45." },

  { id: "m1h", module: "m-1", domain: "MATH", type: "math-mc", diff: 1, skill: "m_lin",
    text: "What is the solution to the equation 2x + 5 = 21?",
    choices: ["6", "8", "13", "16"],
    answer: 1,
    explanation: "2x + 5 = 21 → 2x = 16 → x = 8." },

  { id: "m1i", module: "m-1", domain: "MATH", type: "math-mc", diff: 1, skill: "m_lin",
    text: "A taxi company charges a $3.00 flat fee plus $0.80 per mile. Which equation represents the total fare c for a trip of m miles?",
    choices: ["c = 3m + 0.80", "c = 0.80m + 3", "c = 3.80m", "c = 0.80 + 3m/100"],
    answer: 1,
    explanation: "The flat fee $3 is the constant, and each mile adds $0.80, so c = 0.80m + 3." },

  { id: "m1j", module: "m-1", domain: "MATH", type: "math-mc", diff: 2, skill: "m_lin",
    text: "The equation of a line is y = −4x + 2. What is the y-intercept of the graph of this line?",
    choices: ["−4", "2", "4", "8"],
    answer: 1,
    explanation: "In y = mx + b, the y-intercept is b. Here b = 2." },

  { id: "m1k", module: "m-1", domain: "MATH", type: "math-mc", diff: 2, skill: "m_lin",
    text: "A line in the xy-plane has a slope of 2 and passes through the point (3, 10). Which equation defines the line?",
    choices: ["y = 2x + 4", "y = 2x − 4", "y = 2x + 10", "y = x + 7"],
    answer: 0,
    explanation: "Use y = mx + b with m = 2 and the point (3, 10): 10 = 2(3) + b → b = 4. So y = 2x + 4." },

  { id: "m1l", module: "m-1", domain: "MATH", type: "math-mc", diff: 2, skill: "m_lin",
    text: "The graph of a linear function f passes through the points (0, 5) and (2, 11). What is the slope of the graph?",
    choices: ["2", "3", "5", "6"],
    answer: 1,
    explanation: "Slope = (y2 − y1)/(x2 − x1) = (11 − 5)/(2 − 0) = 6/2 = 3." },

  { id: "m1m", module: "m-1", domain: "MATH", type: "math-mc", diff: 2, skill: "m_lin",
    text: "A gym charges a membership fee plus a set amount per visit. If a member who visits 5 times pays $60 total and a member who visits 10 times pays $85 total, what is the cost per visit?",
    choices: ["$4", "$5", "$6", "$12"],
    answer: 1,
    explanation: "Difference: 10 − 5 = 5 extra visits cost 85 − 60 = $25, so each visit costs 25/5 = $5." },

  { id: "m1n", module: "m-1", domain: "MATH", type: "math-mc", diff: 2, skill: "m_lin",
    text: "For the function f, f(x) = 7x − 3. What is the value of f(4)?",
    choices: ["21", "25", "28", "31"],
    answer: 1,
    explanation: "f(4) = 7(4) − 3 = 28 − 3 = 25." },

  { id: "m1o", module: "m-1", domain: "MATH", type: "math-mc", diff: 1, skill: "m_lin",
    text: "Which of the following is equivalent to 2(x − 3) + 4?",
    choices: ["2x − 2", "2x + 1", "2x − 6", "x − 6"],
    answer: 0,
    explanation: "2(x − 3) + 4 = 2x − 6 + 4 = 2x − 2." },

  { id: "m1p", module: "m-1", domain: "MATH", type: "math-mc", diff: 1, skill: "m_lin",
    text: "The perimeter of a square with side length s is given by P = 4s. If the perimeter is 36, what is the side length?",
    choices: ["4", "6", "8", "9"],
    answer: 3,
    explanation: "36 = 4s → s = 9." },

  { id: "m1q", module: "m-1", domain: "MATH", type: "math-mc", diff: 2, skill: "m_lin",
    text: "A car uses 0.4 gallons of fuel per city mile driven. If the car has f gallons of fuel and travels c city miles, which equation relates f and c, assuming the tank starts full and is not refilled?",
    choices: ["c = 0.4f", "f = 0.4c", "f = c + 0.4", "c = f + 0.4"],
    answer: 1,
    explanation: "Each city mile consumes 0.4 gallons, so total fuel f = 0.4 × c (miles)." },

  { id: "m1r", module: "m-1", domain: "MATH", type: "math-mc", diff: 3, skill: "m_lin",
    text: "The function g is defined by g(x) = ax + b, where a and b are constants. If g(2) = 10 and g(5) = 19, what is the value of g(0)?",
    choices: ["0", "3", "4", "7"],
    answer: 2,
    explanation: "g(5) − g(2) = 19 − 10 = 9 = a(5 − 2) = 3a → a = 3. Then g(2) = 3(2) + b = 10 → b = 4. So g(0) = b = 4." },

  { id: "m1s", module: "m-1", domain: "MATH", type: "math-spr", diff: 1, skill: "m_lin",
    text: "What is the value of x if 6x − 8 = 4x + 10?",
    answer: 9,
    explanation: "6x − 8 = 4x + 10 → 2x = 18 → x = 9." },

  { id: "m1t", module: "m-1", domain: "MATH", type: "math-spr", diff: 2, skill: "m_lin",
    text: "A phone plan charges $20 per month plus $0.10 per text message. If a user's bill for the month was $45, how many text messages were sent?",
    answer: 250,
    explanation: "Bill = 20 + 0.10t = 45 → 0.10t = 25 → t = 250." },

  { id: "m1u", module: "m-1", domain: "MATH", type: "math-spr", diff: 2, skill: "m_lin",
    text: "The function f is defined by f(x) = (1/2)x + 6. For what value of x does f(x) = 10?",
    answer: 8,
    explanation: "(1/2)x + 6 = 10 → (1/2)x = 4 → x = 8." },

  // ═══════════ AUTHORED ORIGINALS — M-6 Rates, Ratios & Units ═══════════
  { id: "m6e", module: "m-6", domain: "MATH", type: "math-mc", diff: 1, skill: "m_rate",
    text: "A train travels 240 miles in 4 hours at a constant speed. What is the train's speed in miles per hour?",
    choices: ["40", "60", "80", "120"],
    answer: 1,
    explanation: "Speed = distance / time = 240 / 4 = 60 mph." },

  { id: "m6f", module: "m-6", domain: "MATH", type: "math-mc", diff: 1, skill: "m_rate",
    text: "If 5 pounds of apples cost $7.50, what is the cost of 8 pounds of apples at the same rate?",
    choices: ["$10.00", "$12.00", "$12.50", "$15.00"],
    answer: 1,
    explanation: "Unit price = 7.50 / 5 = $1.50 per pound. 8 × 1.50 = $12.00." },

  { id: "m6g", module: "m-6", domain: "MATH", type: "math-mc", diff: 2, skill: "m_rate",
    text: "A printer can print 18 pages in 30 seconds. At this rate, how many minutes does it take to print 360 pages?",
    choices: ["10", "15", "60", "66"],
    answer: 0,
    explanation: "Rate = 18/30 = 0.6 pages/sec. Time = 360 / 0.6 = 600 sec = 10 minutes." },

  { id: "m6h", module: "m-6", domain: "MATH", type: "math-mc", diff: 2, skill: "m_rate",
    text: "A map has a scale of 1 inch = 25 miles. If two cities are 3.2 inches apart on the map, what is the actual distance between them?",
    choices: ["60 miles", "80 miles", "100 miles", "320 miles"],
    answer: 1,
    explanation: "3.2 inches × 25 miles/inch = 80 miles." },

  { id: "m6i", module: "m-6", domain: "MATH", type: "math-mc", diff: 1, skill: "m_rate",
    text: "There are 60 minutes in an hour. How many minutes are there in 2.5 hours?",
    choices: ["120", "150", "250", "300"],
    answer: 1,
    explanation: "2.5 × 60 = 150 minutes." },

  { id: "m6j", module: "m-6", domain: "MATH", type: "math-mc", diff: 2, skill: "m_rate",
    text: "A recipe calls for 2 cups of flour to make 24 cookies. How many cups of flour are needed to make 60 cookies?",
    choices: ["3", "4", "5", "6"],
    answer: 2,
    explanation: "Ratio: 2 cups / 24 cookies. For 60 cookies: (2/24) × 60 = 5 cups." },

  { id: "m6k", module: "m-6", domain: "MATH", type: "math-mc", diff: 2, skill: "m_rate",
    text: "A cyclist rides at an average of 12 miles per hour. How many miles does the cyclist travel in 45 minutes?",
    choices: ["6", "9", "12", "15"],
    answer: 1,
    explanation: "45 minutes = 0.75 hours. 12 × 0.75 = 9 miles." },

  { id: "m6l", module: "m-6", domain: "MATH", type: "math-mc", diff: 3, skill: "m_rate",
    text: "A car travels the first 60 miles of a trip at 30 mph and the next 60 miles at 60 mph. What is the average speed for the entire 120-mile trip?",
    choices: ["40 mph", "45 mph", "50 mph", "55 mph"],
    answer: 0,
    explanation: "Time at 30 mph: 60/30 = 2 h. Time at 60 mph: 60/60 = 1 h. Total time = 3 h. Average = 120/3 = 40 mph. (Not the average of the speeds.)" },

  { id: "m6m", module: "m-6", domain: "MATH", type: "math-spr", diff: 1, skill: "m_rate",
    text: "A water tank is filled at a rate of 4 gallons per minute. How many minutes will it take to fill a tank that holds 300 gallons?",
    answer: 75,
    explanation: "300 / 4 = 75 minutes." },

  { id: "m6n", module: "m-6", domain: "MATH", type: "math-spr", diff: 2, skill: "m_rate",
    text: "If 3 gallons of paint cover 450 square feet, how many square feet can 5 gallons cover at the same rate?",
    answer: 750,
    explanation: "Rate = 450/3 = 150 sq ft per gallon. 5 × 150 = 750." },

  // ═══════════ AUTHORED ORIGINALS — M-7 Percentages ═══════════
  { id: "m7c", module: "m-7", domain: "MATH", type: "math-mc", diff: 1, skill: "m_pct",
    text: "What is 15% of 60?",
    choices: ["4", "6", "9", "15"],
    answer: 2,
    explanation: "15% of 60 = 0.15 × 60 = 9." },

  { id: "m7d", module: "m-7", domain: "MATH", type: "math-mc", diff: 1, skill: "m_pct",
    text: "A shirt that costs $40 is on sale for 25% off. What is the sale price?",
    choices: ["$10", "$25", "$30", "$35"],
    answer: 2,
    explanation: "Discount = 25% of 40 = $10. Sale price = 40 − 10 = $30." },

  { id: "m7e", module: "m-7", domain: "MATH", type: "math-mc", diff: 2, skill: "m_pct",
    text: "A price increases from $80 to $96. What is the percent increase?",
    choices: ["16%", "20%", "18%", "40%"],
    answer: 1,
    explanation: "Increase = 96 − 80 = 16. Percent = 16/80 = 0.20 = 20%." },

  { id: "m7f", module: "m-7", domain: "MATH", type: "math-mc", diff: 2, skill: "m_pct",
    text: "In a survey, 45% of 200 students preferred online classes. How many students preferred online classes?",
    choices: ["45", "80", "90", "110"],
    answer: 2,
    explanation: "45% of 200 = 0.45 × 200 = 90." },

  { id: "m7g", module: "m-7", domain: "MATH", type: "math-mc", diff: 2, skill: "m_pct",
    text: "A stock that was worth $120 increased by 15%. What is the new value?",
    choices: ["$128", "$135", "$138", "$150"],
    answer: 2,
    explanation: "Increase = 15% of 120 = $18. New value = 120 + 18 = $138." },

  { id: "m7h", module: "m-7", domain: "MATH", type: "math-mc", diff: 2, skill: "m_pct",
    text: "After a 20% discount, a laptop costs $640. What was the original price?",
    choices: ["$720", "$768", "$800", "$840"],
    answer: 2,
    explanation: "After a 20% discount, the price is 80% of the original. 0.80P = 640 → P = 640/0.80 = $800." },

  { id: "m7i", module: "m-7", domain: "MATH", type: "math-mc", diff: 3, skill: "m_pct",
    text: "A shirt costs $50, and then the price is increased by 10%, and later decreased by 10%. What is the final price?",
    choices: ["$50.00", "$49.50", "$50.50", "$55.00"],
    answer: 1,
    explanation: "After +10%: 50 × 1.10 = $55. After −10%: 55 × 0.90 = $49.50. The order matters; it does not return to $50." },

  { id: "m7j", module: "m-7", domain: "MATH", type: "math-mc", diff: 2, skill: "m_pct",
    text: "If 30 percent of a number is 45, what is the number?",
    choices: ["135", "150", "300", "450"],
    answer: 1,
    explanation: "0.30N = 45 → N = 45/0.30 = 150." },

  { id: "m7k", module: "m-7", domain: "MATH", type: "math-spr", diff: 1, skill: "m_pct",
    text: "What is 8% of $125?",
    answer: 10,
    explanation: "0.08 × 125 = 10." },

  { id: "m7l", module: "m-7", domain: "MATH", type: "math-spr", diff: 2, skill: "m_pct",
    text: "A population of 2,500 increased by 12% over five years. What is the total population now?",
    answer: 2800,
    explanation: "Increase = 0.12 × 2500 = 300. New = 2500 + 300 = 2800." },

  // ═══════════ AUTHORED ORIGINALS — M-2 Systems of Equations ═══════════
  { id: "m2j", module: "m-2", domain: "MATH", type: "math-mc", diff: 2, skill: "m_sys",
    text: "If x + y = 12 and x − y = 4, what is the value of x?",
    choices: ["4", "6", "8", "10"],
    answer: 2,
    explanation: "Adding the equations: 2x = 16 → x = 8." },

  { id: "m2k", module: "m-2", domain: "MATH", type: "math-mc", diff: 2, skill: "m_sys",
    text: "Which ordered pair (x, y) is a solution to the system y = 2x and x + y = 9?",
    choices: ["(2, 4)", "(3, 6)", "(4, 8)", "(6, 12)"],
    answer: 1,
    explanation: "Substitute y = 2x: x + 2x = 9 → 3x = 9 → x = 3, y = 6. So (3, 6)." },

  { id: "m2l", module: "m-2", domain: "MATH", type: "math-mc", diff: 3, skill: "m_sys",
    text: "A system of equations has no solutions. Which could be true of the two equations?",
    choices: [
      "They have the same slope and the same y-intercept.",
      "They have the same slope but different y-intercepts.",
      "They have different slopes.",
      "They are both horizontal lines."
    ],
    answer: 1,
    explanation: "Parallel lines with different y-intercepts never intersect, so a system with those two equations has no solution." },

  { id: "m2m", module: "m-2", domain: "MATH", type: "math-mc", diff: 2, skill: "m_sys",
    text: "A store sells apples (a) for $0.50 each and oranges (o) for $0.75 each. If a customer buys 12 total pieces of fruit for $7.00, which system of equations models this situation?",
    choices: [
      "a + o = 12 and 0.50a + 0.75o = 7",
      "a + o = 7 and 0.50a + 0.75o = 12",
      "a + o = 12 and 0.50(a + o) = 7",
      "0.50a = o and 12a + 7o = 0"
    ],
    answer: 0,
    explanation: "The count equation is a + o = 12, and the cost equation is 0.50a + 0.75o = 7. Choice A matches." },

  { id: "m2n", module: "m-2", domain: "MATH", type: "math-spr", diff: 2, skill: "m_sys",
    text: "For the system y = 3x and 2x + y = 20, what is the value of y at the point of intersection?",
    answer: 12,
    explanation: "Substitute: 2x + 3x = 20 → 5x = 20 → x = 4. Then y = 3(4) = 12." },

  { id: "m2o", module: "m-2", domain: "MATH", type: "math-spr", diff: 3, skill: "m_sys",
    text: "The sum of two numbers is 40 and their difference is 8. What is the larger of the two numbers?",
    answer: 24,
    explanation: "x + y = 40, x − y = 8. Adding: 2x = 48 → x = 24 (larger), y = 16." },

  // ═══════════ AUTHORED ORIGINALS — M-3 Inequalities ═══════════
  { id: "m3e", module: "m-3", domain: "MATH", type: "math-mc", diff: 1, skill: "m_ineq",
    text: "Which of the following is the solution to x + 6 > 14?",
    choices: ["x < 8", "x > 8", "x > 20", "x < 20"],
    answer: 1,
    explanation: "x + 6 > 14 → x > 8." },

  { id: "m3f", module: "m-3", domain: "MATH", type: "math-mc", diff: 1, skill: "m_ineq",
    text: "A student needs to earn at least $240 to buy a gift. They earn $12 per hour. Which inequality represents the number of hours h they must work?",
    choices: ["h ≤ 20", "h ≥ 20", "h < 20", "12h > 240"],
    answer: 1,
    explanation: "They need 12h ≥ 240, so h ≥ 20." },

  { id: "m3g", module: "m-3", domain: "MATH", type: "math-mc", diff: 2, skill: "m_ineq",
    text: "Which of the following is the solution to −3x ≥ 12?",
    choices: ["x ≥ 4", "x ≤ 4", "x ≥ −4", "x ≤ −4"],
    answer: 3,
    explanation: "Dividing by a negative flips the inequality: −3x ≥ 12 → x ≤ −4." },

  { id: "m3h", module: "m-3", domain: "MATH", type: "math-mc", diff: 2, skill: "m_ineq",
    text: "A room can hold at most 30 people. If there are already 12 people inside, which inequality gives the number of additional people p that can enter?",
    choices: ["p ≤ 18", "p ≥ 18", "p < 12", "p > 30"],
    answer: 0,
    explanation: "12 + p ≤ 30 → p ≤ 18." },

  { id: "m3i", module: "m-3", domain: "MATH", type: "math-spr", diff: 2, skill: "m_ineq",
    text: "What is the greatest integer value of x that satisfies the inequality 3x − 5 < 22?",
    answer: 8,
    explanation: "3x − 5 < 22 → 3x < 27 → x < 9. The greatest integer less than 9 is 8." },

  { id: "m3j", module: "m-3", domain: "MATH", type: "math-spr", diff: 2, skill: "m_ineq",
    text: "A bus carries at most 48 passengers. If it currently has 29 passengers, what is the greatest number of additional passengers that can board?",
    answer: 19,
    explanation: "29 + p ≤ 48 → p ≤ 19." },

  // ═══════════ AUTHORED ORIGINALS — M-4 Quadratic Equations ═══════════
  { id: "m4f", module: "m-4", domain: "MATH", type: "math-mc", diff: 2, skill: "m_quad",
    text: "Which of the following is a solution to x² − 5x + 6 = 0?",
    choices: ["0", "2", "1", "4"],
    answer: 1,
    explanation: "x² − 5x + 6 = (x − 2)(x − 3) = 0, so x = 2 or x = 3. Of the listed choices, 2 (choice B) is the valid solution; 3 is not listed." },

  { id: "m4g", module: "m-4", domain: "MATH", type: "math-mc", diff: 2, skill: "m_quad",
    text: "What are the solutions to x² = 9?",
    choices: ["x = 3 only", "x = −3 only", "x = 3 or x = −3", "x = 81"],
    answer: 2,
    explanation: "x² = 9 → x = 3 or x = −3." },

  { id: "m4h", module: "m-4", domain: "MATH", type: "math-mc", diff: 2, skill: "m_quad",
    text: "A ball is thrown so that its height in meters is modeled by h(t) = −5t² + 20t, where t is seconds. At what time does the ball return to the ground (h = 0, other than t = 0)?",
    choices: ["2 s", "4 s", "5 s", "20 s"],
    answer: 1,
    explanation: "h = 0 when −5t² + 20t = 0 → t(−5t + 20) = 0 → t = 0 or t = 4. So it returns at 4 seconds." },

  { id: "m4i", module: "m-4", domain: "MATH", type: "math-mc", diff: 3, skill: "m_quad",
    text: "Which expression is equivalent to (x + 3)(x − 2)?",
    choices: ["x² + x − 6", "x² − x − 6", "x² + x + 6", "x² − 5x − 6"],
    answer: 0,
    explanation: "(x + 3)(x − 2) = x² − 2x + 3x − 6 = x² + x − 6." },

  { id: "m4j", module: "m-4", domain: "MATH", type: "math-mc", diff: 3, skill: "m_quad",
    text: "The graph of a quadratic function opens downward. Which statement must be true about its vertex?",
    choices: [
      "The vertex is the maximum point of the graph.",
      "The vertex is the minimum point of the graph.",
      "The vertex is on the y-axis.",
      "The graph has two x-intercepts."
    ],
    answer: 0,
    explanation: "A downward-opening parabola has its vertex at its highest point, so the vertex is a maximum." },

  { id: "m4k", module: "m-4", domain: "MATH", type: "math-spr", diff: 2, skill: "m_quad",
    text: "The product of two integers is 24 and their sum is 11. What is the larger of the two integers?",
    answer: 8,
    explanation: "Factors of 24 with sum 11: 3 and 8. The larger is 8." },

  { id: "m4l", module: "m-4", domain: "MATH", type: "math-spr", diff: 3, skill: "m_quad",
    text: "For what positive value of x is x² = 49?",
    answer: 7,
    explanation: "√49 = 7, the positive solution." },

  // ═══════════ AUTHORED ORIGINALS — M-5 Nonlinear Functions ═══════════
  { id: "m5e", module: "m-5", domain: "MATH", type: "math-mc", diff: 2, skill: "m_nonlin",
    text: "If f(x) = 2ˣ, what is the value of f(3)?",
    choices: ["6", "8", "9", "23"],
    answer: 1,
    explanation: "f(3) = 2³ = 8." },

  { id: "m5f", module: "m-5", domain: "MATH", type: "math-mc", diff: 2, skill: "m_nonlin",
    text: "A population doubles every year and currently has 100 members. Which function models the population P after t years?",
    choices: ["P(t) = 100 + 2t", "P(t) = 100 × 2ᵗ", "P(t) = 2 × 100ᵗ", "P(t) = 100t²"],
    answer: 1,
    explanation: "Doubling each year is exponential growth by a factor of 2, so P(t) = 100 × 2ᵗ." },

  { id: "m5g", module: "m-5", domain: "MATH", type: "math-mc", diff: 2, skill: "m_nonlin",
    text: "If g(x) = √x, for which of the following values is g(x) a whole number?",
    choices: ["2", "7", "9", "12"],
    answer: 2,
    explanation: "√9 = 3, a whole number. The other options are not perfect squares." },

  { id: "m5h", module: "m-5", domain: "MATH", type: "math-mc", diff: 3, skill: "m_nonlin",
    text: "Which of the following functions is NOT linear?",
    choices: ["y = 3x + 2", "y = x/2 − 1", "y = x² + 1", "y = −2x"],
    answer: 2,
    explanation: "y = x² + 1 contains x², so its graph is a parabola, not a line. The others are linear." },

  { id: "m5i", module: "m-5", domain: "MATH", type: "math-spr", diff: 3, skill: "m_nonlin",
    text: "If f(x) = 3x² − 5, what is the value of f(4)?",
    answer: 43,
    explanation: "f(4) = 3(16) − 5 = 48 − 5 = 43." },

  { id: "m5j", module: "m-5", domain: "MATH", type: "math-spr", diff: 2, skill: "m_nonlin",
    text: "What is the value of 2⁴ + 3²?",
    answer: 25,
    explanation: "2⁴ = 16 and 3² = 9, so 16 + 9 = 25." },

  // ═══════════ AUTHORED ORIGINALS — M-8 Statistics & Probability ═══════════
  { id: "m8e", module: "m-8", domain: "MATH", type: "math-mc", diff: 1, skill: "m_stat",
    text: "What is the mean (average) of the numbers 4, 6, 8, 10, and 12?",
    choices: ["6", "7", "8", "10"],
    answer: 2,
    explanation: "Sum = 4+6+8+10+12 = 40. Mean = 40/5 = 8." },

  { id: "m8f", module: "m-8", domain: "MATH", type: "math-mc", diff: 1, skill: "m_stat",
    text: "What is the median of the numbers 3, 7, 1, 9, and 5?",
    choices: ["3", "5", "7", "9"],
    answer: 1,
    explanation: "Sorted: 1, 3, 5, 7, 9. The middle value is 5." },

  { id: "m8g", module: "m-8", domain: "MATH", type: "math-mc", diff: 2, skill: "m_stat",
    text: "The numbers 2, 3, 4, 4, 5, 6 appear in a data set. What is the mode?",
    choices: ["2", "4", "4 and 6", "There is no mode"],
    answer: 1,
    explanation: "The value 4 appears twice, more than any other, so the mode is 4." },

  { id: "m8h", module: "m-8", domain: "MATH", type: "math-mc", diff: 2, skill: "m_stat",
    text: "A six-sided die with faces numbered 1 through 6 is rolled once. What is the probability of rolling an even number?",
    choices: ["1/6", "1/3", "1/2", "2/3"],
    answer: 2,
    explanation: "Even faces are 2, 4, 6 (3 of 6), so probability = 3/6 = 1/2." },

  { id: "m8i2", module: "m-8", domain: "MATH", type: "math-mc", diff: 2, skill: "m_stat",
    text: "The heights of six plants are 10, 12, 14, 16, 18, and 20 cm. If one plant of height 20 cm is removed, what happens to the median of the five remaining heights?",
    choices: ["It increases", "It decreases", "It stays the same", "It becomes the mode"],
    answer: 1,
    explanation: "Original sorted set (10,12,14,16,18,20) has even count, median = (14+16)/2 = 15. After removing 20, set is (10,12,14,16,18), median = 14. The median decreases." },

  { id: "m8j", module: "m-8", domain: "MATH", type: "math-mc", diff: 2, skill: "m_stat",
    text: "In a bag there are 3 red, 4 blue, and 5 green marbles. If one marble is drawn at random, what is the probability it is blue?",
    choices: ["4/12", "4/8", "1/3", "5/12"],
    answer: 0,
    explanation: "There are 4 blue out of 12 total marbles, so probability = 4/12." },

  { id: "m8k", module: "m-8", domain: "MATH", type: "math-spr", diff: 2, skill: "m_stat",
    text: "The mean of five numbers is 10. If the numbers are 5, 8, 10, 12, and one unknown value n, what is n?",
    answer: 15,
    explanation: "Sum = 5 × 10 = 50. 5+8+10+12+n = 50 → 35 + n = 50 → n = 15." },

  { id: "m8l", module: "m-8", domain: "MATH", type: "math-spr", diff: 2, skill: "m_stat",
    text: "A spinner has 5 equal sections numbered 1 to 5. A coin is flipped. How many total possible outcomes are there when the spinner is spun and the coin is flipped once each?",
    answer: 10,
    explanation: "5 spinner outcomes × 2 coin outcomes = 10." },

  // ═══════════ AUTHORED ORIGINALS — M-9 Geometry & Trigonometry ═══════════
  { id: "m9e", module: "m-9", domain: "MATH", type: "math-mc", diff: 1, skill: "m_geo",
    text: "What is the area of a rectangle with length 8 cm and width 5 cm?",
    choices: ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],
    answer: 2,
    explanation: "Area = length × width = 8 × 5 = 40 cm²." },

  { id: "m9f", module: "m-9", domain: "MATH", type: "math-mc", diff: 1, skill: "m_geo",
    text: "What is the perimeter of a square with side length 7?",
    choices: ["14", "21", "28", "49"],
    answer: 2,
    explanation: "Perimeter = 4 × side = 4 × 7 = 28." },

  { id: "m9g", module: "m-9", domain: "MATH", type: "math-mc", diff: 2, skill: "m_geo",
    text: "In a right triangle, the legs are 3 and 4. What is the length of the hypotenuse?",
    choices: ["5", "6", "7", "12"],
    answer: 0,
    explanation: "By the Pythagorean theorem: 3² + 4² = 9 + 16 = 25, so the hypotenuse is √25 = 5." },

  { id: "m9h", module: "m-9", domain: "MATH", type: "math-mc", diff: 2, skill: "m_geo",
    text: "The diameter of a circle is 10. What is its radius?",
    choices: ["5", "10", "20", "100"],
    answer: 0,
    explanation: "Radius = diameter / 2 = 10 / 2 = 5." },

  { id: "m9i", module: "m-9", domain: "MATH", type: "math-mc", diff: 2, skill: "m_geo",
    text: "The area of a circle is 36π. What is its radius?",
    choices: ["3", "6", "12", "36"],
    answer: 1,
    explanation: "Area = πr² = 36π → r² = 36 → r = 6." },

  { id: "m9j", module: "m-9", domain: "MATH", type: "math-mc", diff: 2, skill: "m_geo",
    text: "Two angles of a triangle measure 40° and 60°. What is the measure of the third angle?",
    choices: ["60°", "70°", "80°", "100°"],
    answer: 2,
    explanation: "Angles sum to 180°: 180 − 40 − 60 = 80°." },

  { id: "m9k", module: "m-9", domain: "MATH", type: "math-spr", diff: 2, skill: "m_geo",
    text: "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
    answer: 10,
    explanation: "6² + 8² = 36 + 64 = 100, so the hypotenuse is √100 = 10." },

  { id: "m9l", module: "m-9", domain: "MATH", type: "math-spr", diff: 2, skill: "m_geo",
    text: "A rectangular garden has length 12 m and width 5 m. What is the area of the garden in square meters?",
    answer: 60,
    explanation: "Area = 12 × 5 = 60 m²." },

  { id: "m9m", module: "m-9", domain: "MATH", type: "math-spr", diff: 3, skill: "m_geo",
    text: "A rectangular field is 30 m long and 16 m wide. A path runs diagonally from one corner to the opposite corner. What is the length of the path in meters?",
    answer: 34,
    explanation: "Diagonal = √(30² + 16²) = √(900 + 256) = √1156 = 34 m." },

  { id: "m9n", module: "m-9", domain: "MATH", type: "math-mc", diff: 3, skill: "m_geo",
    text: "The area of a triangle is 24 and its base is 8. What is the height of the triangle?",
    choices: ["3", "4", "6", "12"],
    answer: 2,
    explanation: "Area = (1/2) × base × height → 24 = (1/2)(8)(h) = 4h → h = 6." },

  // ═══════════ AUTHORED ORIGINALS — RW expansion (PACK C) ═══════════
  // RW-1 Central Ideas (more)
  { id: "rw1l", module: "rw-1", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_central",
    passages: ["Walking meetings are growing in popularity among office workers. Beyond the obvious benefit of added movement, supporters argue that the change of scenery and the rhythm of walking can improve focus and make conversations feel less pressured."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "Walking meetings are valued for benefits that include movement and improved focus.",
      "Walking meetings are popular because they are shorter than seated meetings.",
      "Office workers dislike sitting during meetings.",
      "The main downside of walking meetings is the weather."
    ],
    answer: 0,
    explanation: "The text cites added movement, improved focus, and less pressure as benefits. Choice A captures the main idea; the others are unsupported or inaccurate." },

  { id: "rw1m", module: "rw-1", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_central",
    passages: ["Recycling a plastic bottle requires far less energy than making a new one from raw materials. However, the benefit shrinks if the bottle is transported a long distance to a facility, since the fuel used to move it can offset much of the energy saved."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "The environmental benefit of recycling depends partly on how far the material must travel.",
      "Recycling always uses more energy than making new plastic.",
      "Plastic bottles cannot be recycled at all.",
      "Transporting bottles has no effect on the environment."
    ],
    answer: 0,
    explanation: "The text says recycling saves energy but that long transport can offset the savings. Choice A captures that conditional idea." },

  { id: "rw1n", module: "rw-1", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_central",
    passages: ["Playing a musical instrument requires the brain to coordinate reading, timing, and fine motor control all at once. Because of this, researchers have found that regular practice can strengthen memory and attention in ways that carry over to other tasks."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "Practicing an instrument may improve mental skills used in other activities.",
      "Only professional musicians benefit from practice.",
      "Reading music is harder than playing an instrument.",
      "Instruments have no effect on the brain."
    ],
    answer: 0,
    explanation: "The text explains that instrument practice strengthens memory and attention that carry over to other tasks — exactly choice A." },

  // RW-3 Inferences (more)
  { id: "rw3g", module: "rw-3", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_inf",
    passages: ["A teacher gave the same essay prompt to two classes. One class was shown a detailed rubric before writing; the other was not. Students who saw the rubric wrote essays that addressed the prompt's requirements more completely."],
    stem: "Which choice is best supported by the text?",
    choices: [
      "Sharing a rubric beforehand may help students meet assignment requirements.",
      "Students who saw the rubric wrote shorter essays.",
      "The rubric had no effect on the essays.",
      "Students always prefer prompts without rubrics."
    ],
    answer: 0,
    explanation: "The rubric-exposed class addressed requirements more completely, supporting the inference that advance rubrics help — choice A." },

  { id: "rw3h", module: "rw-3", domain: "RW", type: "rw-mc", diff: 3, skill: "rw_inf",
    passages: ["Oceanographers recorded that a particular current moves faster in summer than in winter. The current's speed is driven largely by temperature differences between warm and cold water, which are greatest in summer."],
    stem: "Based on the text, which choice is most likely true?",
    choices: [
      "A wider temperature gap between water masses is associated with a faster current.",
      "The current stops flowing in winter.",
      "Water temperature has no influence on the current.",
      "The current's speed is the same year-round."
    ],
    answer: 0,
    explanation: "The text ties greater temperature differences (summer) to faster speed, so wider gaps → faster current. Choice A is the supported inference." },

  // RW-5 Purpose (more)
  { id: "rw5g", module: "rw-5", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_purpose",
    passages: ["The pocket watch was once the standard way to tell time, but its reign did not last. The invention of the wristwatch, initially dismissed as a novelty for pilots, gradually made the pocket watch impractical and eventually obsolete in everyday use."],
    stem: "The main purpose of the text is to",
    choices: [
      "explain how the wristwatch came to replace the pocket watch",
      "argue that pocket watches should be brought back",
      "describe how watches are manufactured",
      "recommend a particular brand of watch"
    ],
    answer: 0,
    explanation: "The text explains the shift from pocket watch to wristwatch and why the pocket watch became obsolete — purpose is to explain that transition." },

  { id: "rw5h", module: "rw-5", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_purpose",
    passages: ["At first glance, the two paintings appear almost identical: the same harbor, the same sky. On closer inspection, however, the difference in brushstroke is striking. The first is built from smooth, blended layers, while the second is composed of bold, separate dabs of color."],
    stem: "The phrase 'On closer inspection' mainly serves to",
    choices: [
      "signal a shift from surface similarity to a deeper difference",
      "suggest that the paintings are exactly the same",
      "introduce the paintings' sales prices",
      "describe the paintings' frames"
    ],
    answer: 0,
    explanation: "'On closer inspection' marks the transition from a first, similar impression to a more careful view that reveals differences — signalling that deeper analysis." },

  // RW-2 Evidence (more)
  { id: "rw2f", module: "rw-2", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_evidence",
    passages: ["A scientist argues that a certain species of ant navigates using landmarks rather than a sense of direction. To test this, researchers plan to observe how the ants find their way back to the nest after moving recognizable objects."],
    stem: "Which type of result would best support the scientist's argument?",
    choices: [
      "Ants became lost when the landmarks they relied on were moved or removed.",
      "Ants found the nest equally well whether landmarks were present or not.",
      "Ants preferred walking in darkness.",
      "Ants formed a line as they marched."
    ],
    answer: 0,
    explanation: "If ants rely on landmarks, removing or moving those landmarks should disrupt their navigation. Choice A directly tests and would support that claim." },

  { id: "rw2g", module: "rw-2", domain: "RW", type: "rw-mc", diff: 3, skill: "rw_evidence",
    passages: ["A city claims that installing more public water fountains reduces the number of plastic water bottles sold in the area. The city plans to compare bottle sales before and after adding the fountains."],
    stem: "Which additional data would most strengthen the claim that fountains caused the drop?",
    choices: [
      "Bottle sales fell in the neighborhoods where fountains were added but stayed steady elsewhere.",
      "Bottle sales fell everywhere in the region at the same time.",
      "Fountain usage was never measured.",
      "The fountains were installed in a single weekend."
    ],
    answer: 0,
    explanation: "If sales dropped only where fountains were added and not elsewhere, that comparison supports a causal link to the fountains — strengthening the claim." },

  // RW-6 Rhetorical Synthesis (more)
  { id: "rw6e", module: "rw-6", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_rhet",
    passages: ["While researching a topic, a student has taken the following notes:\n\n• Venus flytraps catch insects using leaves that snap shut.\n• Each trap can close only a small number of times before it stops working.\n• Wasting a trap on a small prey item reduces the plant's ability to feed later.\n• Researchers found the plant can count: it closes only when enough signals arrive in a short time.\n\nThe student wants to explain why the flytrap delays closing. Which choice most effectively uses the notes to accomplish this goal?"],
    stem: "Which response best matches the student's goal?",
    choices: [
      "Because each trap can close only a limited number of times, the plant uses a counting mechanism to open only for prey worth the effort.",
      "Venus flytraps are plants that eat insects for nutrients.",
      "The trap is a modified leaf that looks like a mouth.",
      "Flytraps grow naturally in wetlands."
    ],
    answer: 0,
    explanation: "The goal is to explain the delay. Choice A connects the limited number of closes to the counting mechanism, explaining why the plant holds back." },

  { id: "rw6f", module: "rw-6", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_rhet",
    passages: ["While researching a topic, a student has taken the following notes:\n\n• The printing press reached Europe in the 1400s.\n• It allowed books to be produced far more quickly and cheaply than hand copying.\n• As a result, literacy spread among the general population.\n• The cost of a book dropped from the price of a small farm to that of a day's labor.\n\nThe student wants to emphasize how the printing press changed the affordability of books. Which choice most effectively uses the notes to accomplish this goal?"],
    stem: "Which response best matches the student's goal?",
    choices: [
      "By speeding up production, the printing press made books so much cheaper that a volume's price fell from that of a small farm to a day's labor.",
      "The printing press arrived in Europe during the 1400s.",
      "Printing presses are machines that apply ink to paper.",
      "Many important books were written in Europe."
    ],
    answer: 0,
    explanation: "To emphasize affordability, choice A leads with the dramatic price drop, which the notes provide. It best stays on the stated goal." },

  // ═══════════ AUTHORED ORIGINALS — Math expansion (PACK D) ═══════════
  // M-1 Linear (more)
  { id: "m1v", module: "m-1", domain: "MATH", type: "math-mc", diff: 2, skill: "m_lin",
    text: "The table shows that y changes at a constant rate with x. If x = 0 gives y = 3 and x = 2 gives y = 7, what is y when x = 6?",
    choices: ["11", "15", "19", "21"],
    answer: 1,
    explanation: "Slope = (7 − 3)/(2 − 0) = 2. Equation: y = 2x + 3. At x = 6: y = 12 + 3 = 15." },

  { id: "m1w", module: "m-1", domain: "MATH", type: "math-mc", diff: 2, skill: "m_lin",
    text: "At a constant speed, a cyclist travels d = 20t miles, where t is time in hours. How many miles does the cyclist travel in 2.5 hours?",
    choices: ["40", "45", "50", "60"],
    answer: 2,
    explanation: "d = 20(2.5) = 50 miles." },

  { id: "m1x", module: "m-1", domain: "MATH", type: "math-spr", diff: 2, skill: "m_lin",
    text: "If 2x + 3y = 12 and x = 3, what is the value of y?",
    answer: 2,
    explanation: "2(3) + 3y = 12 → 6 + 3y = 12 → 3y = 6 → y = 2." },

  { id: "m1y", module: "m-1", domain: "MATH", type: "math-spr", diff: 3, skill: "m_lin",
    text: "A line passes through (1, 5) and (3, 13). What is the y-intercept of the line?",
    answer: 1,
    explanation: "Slope = (13 − 5)/(3 − 1) = 4. Using y = 4x + b and (1,5): 5 = 4(1) + b → b = 1. y-intercept = 1." },

  // M-6 Rates (more)
  { id: "m6o", module: "m-6", domain: "MATH", type: "math-mc", diff: 2, skill: "m_rate",
    text: "A machine produces 90 items in 3 hours. How many items does it produce in 5 hours at the same rate?",
    choices: ["120", "150", "180", "270"],
    answer: 1,
    explanation: "Rate = 90/3 = 30 items/hour. In 5 hours: 30 × 5 = 150." },

  { id: "m6p", module: "m-6", domain: "MATH", type: "math-mc", diff: 2, skill: "m_rate",
    text: "A recipe uses 3 cups of sugar for every 4 cups of flour. If a baker uses 12 cups of flour, how many cups of sugar are needed to keep the same ratio?",
    choices: ["6", "9", "12", "16"],
    answer: 1,
    explanation: "Ratio 3:4 means sugar = (3/4) × flour = (3/4) × 12 = 9 cups." },

  { id: "m6q", module: "m-6", domain: "MATH", type: "math-spr", diff: 2, skill: "m_rate",
    text: "A faucet leaks 1.5 liters every hour. How many liters leak in 8 hours?",
    answer: 12,
    explanation: "1.5 × 8 = 12 liters." },

  { id: "m6r", module: "m-6", domain: "MATH", type: "math-spr", diff: 3, skill: "m_rate",
    text: "A car uses 5 gallons of gas to travel 140 miles. At this rate, how many gallons are needed to travel 350 miles?",
    answer: 12.5,
    explanation: "Miles per gallon = 140/5 = 28 mpg. Gallons = 350/28 = 12.5." },

  // M-9 Geometry (more)
  { id: "m9o", module: "m-9", domain: "MATH", type: "math-mc", diff: 2, skill: "m_geo",
    text: "In a right triangle, one acute angle measures 30°. What is the measure of the other acute angle?",
    choices: ["30°", "45°", "60°", "90°"],
    answer: 2,
    explanation: "Acute angles in a right triangle sum to 90°, so the other is 90 − 30 = 60°." },

  { id: "m9p", module: "m-9", domain: "MATH", type: "math-mc", diff: 2, skill: "m_geo",
    text: "What is the area of a triangle with base 10 and height 6?",
    choices: ["16", "30", "60", "120"],
    answer: 1,
    explanation: "Area = (1/2) × base × height = (1/2)(10)(6) = 30." },

  { id: "m9q", module: "m-9", domain: "MATH", type: "math-spr", diff: 2, skill: "m_geo",
    text: "What is the circumference of a circle with radius 7? (Use π = 22/7.)",
    answer: 44,
    explanation: "Circumference = 2πr = 2 × (22/7) × 7 = 44." },

  // M-8 Stats (more)
  { id: "m8m", module: "m-8", domain: "MATH", type: "math-mc", diff: 2, skill: "m_stat",
    text: "The test scores of five students are 70, 80, 80, 90, and 100. What is the median score?",
    choices: ["80", "84", "86", "90"],
    answer: 0,
    explanation: "Sorted: 70, 80, 80, 90, 100. Middle value is 80." },

  { id: "m8n", module: "m-8", domain: "MATH", type: "math-mc", diff: 3, skill: "m_stat",
    text: "A class of 20 students has a mean score of 80. One student with a score of 40 leaves. What is the new mean of the remaining 19 students?",
    choices: ["about 82.1", "about 82.5", "about 84.2", "about 84.4"],
    answer: 0,
    explanation: "Total = 20 × 80 = 1600. Remove 40: 1560. New mean = 1560/19 ≈ 82.1." },

  { id: "m8o", module: "m-8", domain: "MATH", type: "math-spr", diff: 2, skill: "m_stat",
    text: "A bag contains 4 red and 6 blue marbles. If one marble is drawn at random, what is the probability of drawing a red marble, expressed as a decimal?",
    answer: 0.4,
    explanation: "4 red out of 10 total = 4/10 = 0.4." },

  // M-4 Quadratics (more)
  { id: "m4m", module: "m-4", domain: "MATH", type: "math-mc", diff: 2, skill: "m_quad",
    text: "What is the vertex of the parabola y = (x − 3)² + 2?",
    choices: ["(3, 2)", "(−3, 2)", "(3, −2)", "(−3, −2)"],
    answer: 0,
    explanation: "In the form y = (x − h)² + k, the vertex is (h, k), so here it is (3, 2)." },

  { id: "m4n", module: "m-4", domain: "MATH", type: "math-spr", diff: 3, skill: "m_quad",
    text: "What is the sum of the roots of the quadratic x² − 8x + 15 = 0?",
    answer: 8,
    explanation: "The roots are 3 and 5 (since 3+5=8 and 3×5=15). Their sum is 8. (Equivalently, sum of roots = −b/a = 8/1 = 8.)" },

  { id: "m4o", module: "m-4", domain: "MATH", type: "math-spr", diff: 2, skill: "m_quad",
    text: "For what positive value of x does (x − 5)² = 0?",
    answer: 5,
    explanation: "(x − 5)² = 0 → x − 5 = 0 → x = 5." },

  // ═══════════ AUTHORED ORIGINALS — PACK E (Math + RW) ═══════════
  // M-1 Linear (more)
  { id: "m1z", module: "m-1", domain: "MATH", type: "math-mc", diff: 2, skill: "m_lin",
    text: "If 4(x − 2) = 20, what is the value of x?",
    choices: ["3", "5", "6", "7"],
    answer: 3,
    explanation: "4(x − 2) = 20 → x − 2 = 5 → x = 7." },

  { id: "m1aa", module: "m-1", domain: "MATH", type: "math-mc", diff: 2, skill: "m_lin",
    text: "A line has equation 2x + 3y = 6. What is the y-intercept of the line?",
    choices: ["2", "3", "6", "2/3"],
    answer: 0,
    explanation: "Set x = 0: 3y = 6 → y = 2. So the y-intercept is 2." },

  { id: "m1ab", module: "m-1", domain: "MATH", type: "math-spr", diff: 2, skill: "m_lin",
    text: "If x/3 = 7, what is the value of x?",
    answer: 21,
    explanation: "x = 7 × 3 = 21." },

  { id: "m1ac", module: "m-1", domain: "MATH", type: "math-spr", diff: 3, skill: "m_lin",
    text: "The function f is defined by f(x) = 4x + 9. For what value of x is f(x) = 45?",
    answer: 9,
    explanation: "4x + 9 = 45 → 4x = 36 → x = 9." },

  // M-6 Rates (more)
  { id: "m6s", module: "m-6", domain: "MATH", type: "math-mc", diff: 2, skill: "m_rate",
    text: "On a map, 2 centimeters represent 5 kilometers. If two towns are 7 cm apart on the map, what is the actual distance?",
    choices: ["35 km", "17.5 km", "14 km", "12.5 km"],
    answer: 1,
    explanation: "Ratio 2 cm : 5 km. 7 cm = (5/2) × 7 = 17.5 km." },

  { id: "m6t", module: "m-6", domain: "MATH", type: "math-mc", diff: 1, skill: "m_rate",
    text: "There are 8 pints in a gallon. How many pints are in 3.5 gallons?",
    choices: ["24", "28", "30", "35"],
    answer: 1,
    explanation: "3.5 × 8 = 28 pints." },

  { id: "m6u", module: "m-6", domain: "MATH", type: "math-spr", diff: 3, skill: "m_rate",
    text: "A pump empties a 600-liter tank in 15 minutes. How many liters does it pump per minute?",
    answer: 40,
    explanation: "600 / 15 = 40 liters per minute." },

  { id: "m6v", module: "m-6", domain: "MATH", type: "math-spr", diff: 3, skill: "m_rate",
    text: "A bike travels 7 miles in 20 minutes. At the same speed, how many miles does it travel in 1 hour?",
    answer: 21,
    explanation: "20 minutes is 1/3 hour, so in 1 hour: 7 × 3 = 21 miles." },

  // M-7 Percent (more)
  { id: "m7m", module: "m-7", domain: "MATH", type: "math-mc", diff: 2, skill: "m_pct",
    text: "A test has 40 questions. A student answered 85% correctly. How many questions did the student answer correctly?",
    choices: ["30", "32", "34", "36"],
    answer: 2,
    explanation: "85% of 40 = 0.85 × 40 = 34." },

  { id: "m7n", module: "m-7", domain: "MATH", type: "math-mc", diff: 3, skill: "m_pct",
    text: "A store increases a price of $50 by 20%, then applies a coupon for 20% off the new price. What is the final price?",
    choices: ["$48", "$50", "$52", "$60"],
    answer: 0,
    explanation: "After increase: 50 × 1.20 = $60. With 20% off: 60 × 0.80 = $48." },

  { id: "m7o", module: "m-7", domain: "MATH", type: "math-spr", diff: 2, skill: "m_pct",
    text: "What is 30% of 250?",
    answer: 75,
    explanation: "0.30 × 250 = 75." },

  { id: "m7p", module: "m-7", domain: "MATH", type: "math-spr", diff: 3, skill: "m_pct",
    text: "A price was reduced by 15% to $85. What was the original price?",
    answer: 100,
    explanation: "After a 15% reduction, the price is 85% of original: 0.85P = 85 → P = 100." },

  // M-8 Stats (more)
  { id: "m8p", module: "m-8", domain: "MATH", type: "math-mc", diff: 2, skill: "m_stat",
    text: "The scores on a quiz are 7, 8, 8, 9, 10. What is the mean?",
    choices: ["8", "8.2", "8.4", "8.5"],
    answer: 2,
    explanation: "Sum = 7+8+8+9+10 = 42. Mean = 42/5 = 8.4." },

  { id: "m8q", module: "m-8", domain: "MATH", type: "math-mc", diff: 2, skill: "m_stat",
    text: "A box contains 5 red, 3 yellow, and 2 green chips. If one chip is drawn at random, what is the probability it is green?",
    choices: ["2/10", "2/8", "3/10", "7/10"],
    answer: 0,
    explanation: "2 green out of 10 total = 2/10." },

  { id: "m8r", module: "m-8", domain: "MATH", type: "math-spr", diff: 3, skill: "m_stat",
    text: "The mean of the numbers 4, 9, and x is 7. What is the value of x?",
    answer: 8,
    explanation: "(4 + 9 + x)/3 = 7 → 13 + x = 21 → x = 8." },

  { id: "m8s", module: "m-8", domain: "MATH", type: "math-spr", diff: 2, skill: "m_stat",
    text: "A coin is flipped twice. How many possible outcomes are there in the sample space?",
    answer: 4,
    explanation: "2 outcomes per flip, so 2 × 2 = 4: HH, HT, TH, TT." },

  // M-9 Geometry (more)
  { id: "m9r", module: "m-9", domain: "MATH", type: "math-mc", diff: 2, skill: "m_geo",
    text: "The volume of a rectangular box is 120. The base has length 10 and width 4. What is the height?",
    choices: ["3", "6", "12", "40"],
    answer: 0,
    explanation: "Volume = l × w × h → 120 = 10 × 4 × h = 40h → h = 3." },

  { id: "m9s", module: "m-9", domain: "MATH", type: "math-mc", diff: 2, skill: "m_geo",
    text: "Two angles are supplementary and one measures 110°. What is the measure of the other?",
    choices: ["60°", "70°", "80°", "110°"],
    answer: 1,
    explanation: "Supplementary angles sum to 180°: 180 − 110 = 70°." },

  { id: "m9t", module: "m-9", domain: "MATH", type: "math-spr", diff: 3, skill: "m_geo",
    text: "What is the area of a triangle with base 12 and height 5?",
    answer: 30,
    explanation: "(1/2)(12)(5) = 30." },

  { id: "m9u", module: "m-9", domain: "MATH", type: "math-spr", diff: 3, skill: "m_geo",
    text: "A square has perimeter 44. What is its area?",
    answer: 121,
    explanation: "Side = 44/4 = 11. Area = 11² = 121." },

  // RW-7 Transitions (more)
  { id: "rw7m", module: "rw-7", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_trans",
    passages: ["Many people assume that all spiders spin webs to catch prey. ______ many spiders, such as jumping spiders, hunt by sight and do not build webs at all."],
    stem: "Which choice completes the text with the most logical transition?",
    choices: ["However,", "For example,", "In addition,", "Therefore,"],
    answer: 0,
    explanation: "The second idea contradicts the misconception in the first, so a contrast transition ('However') is needed." },

  { id: "rw7n", module: "rw-7", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_trans",
    passages: ["The plant needed sunlight to grow, ______ it also needed regular watering to survive indoors."],
    stem: "Which choice completes the text with the most logical transition?",
    choices: ["for example", "but", "because", "therefore"],
    answer: 1,
    explanation: "The two facts about care requirements are related but contrasting additions, so 'but' (additive with contrast nuance) fits best; the sentence adds another requirement, and 'but' acknowledges the second is also needed." },

  { id: "rw7o", module: "rw-7", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_trans",
    passages: ["The museum extended its hours in the summer. ______, attendance increased by nearly a third compared with the previous season."],
    stem: "Which choice completes the text with the most logical transition?",
    choices: ["As a result,", "Meanwhile,", "For instance,", "On the contrary,"],
    answer: 0,
    explanation: "The second sentence describes a consequence of the first (longer hours → more attendance), so 'As a result' is the correct transition." },

  { id: "rw7p", module: "rw-7", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_trans",
    passages: ["The two studies reached opposite conclusions. ______ both were based on large, carefully controlled samples, leaving researchers puzzled about the cause of the discrepancy."],
    stem: "Which choice completes the text with the most logical transition?",
    choices: ["Notably,", "However,", "Consequently,", "Therefore,"],
    answer: 0,
    explanation: "The surprising part is that well-designed studies reached opposite conclusions. 'Notably' (here meaning 'remarkably') signals that surprising observation. The other options don't fit the contrast-with-information structure." },

  { id: "rw7q", module: "rw-7", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_trans",
    passages: ["The recipe calls for the dough to rest for an hour. ______ the resting time, the gluten relaxes, which makes the dough easier to stretch."],
    stem: "Which choice completes the text with the most logical transition?",
    choices: ["During", "Despite", "Except for", "Rather than"],
    answer: 0,
    explanation: "The second clause explains what happens during the resting time itself, so 'During' is the logical transition." },

  // RW-8 Conventions (more)
  { id: "rw8zz", module: "rw-8", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_bound",
    passages: ["The committee approved the plan ______ the mayor had not yet signed the final version."],
    stem: "Which choice completes the text so that it conforms to the conventions of standard English?",
    choices: ["plan;", "plan,", "plan despite", "plan and"],
    answer: 0,
    explanation: "Two independent clauses joined without a conjunction need a semicolon: 'The committee approved the plan; the mayor had not yet signed the final version.'" },

  { id: "rw8yy", module: "rw-8", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_bound",
    passages: ["The novel, which was written in 1924, ______ still popular with readers today."],
    stem: "Which choice completes the text so that it conforms to the conventions of standard English?",
    choices: ["is", "are", "were", "be"],
    answer: 0,
    explanation: "The subject 'The novel' is singular, so the verb must be 'is'." },

  { id: "rw8xx", module: "rw-8", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_bound",
    passages: ["Each of the students ______ responsible for submitting their own report by Friday."],
    stem: "Which choice completes the text so that it conforms to the conventions of standard English?",
    choices: ["is", "are", "were", "have been"],
    answer: 0,
    explanation: "'Each' is singular, so the verb must be singular: 'Each of the students is responsible.'" },

  { id: "rw8va", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["The two researchers published their findings separately ______ their conclusions were nearly identical."],
    stem: "Which choice completes the text with the most logical and conventional punctuation?",
    choices: ["separately, and", "separately and", "separately.", "separately; therefore"],
    answer: 0,
    explanation: "Two independent clauses joined by 'and' need a comma before the conjunction. 'Their conclusions were nearly identical' is a full clause, so 'separately, and' is correct." },

  { id: "rw8wb", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["The instructions were clear; ______, many participants still made the same error."],
    stem: "Which choice completes the text so that it conforms to the conventions of standard English?",
    choices: ["however", "however,", ", however", "however;"],
    answer: 1,
    explanation: "After a semicolon, 'however' is a conjunctive adverb that needs a comma after it: 'The instructions were clear; however, many participants...'" },

  { id: "rw8vc", module: "rw-8", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_bound",
    passages: ["The café, located near the station, ______ popular with commuters in the morning."],
    stem: "Which choice completes the text so that it conforms to the conventions of standard English?",
    choices: ["are", "is", "were", "have been"],
    answer: 1,
    explanation: "The subject is 'The café' (singular); the phrase 'located near the station' is an aside between commas. So the verb must be 'is'." },

  { id: "rw8vd", module: "rw-8", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_bound",
    passages: ["The team of engineers ______ working on the bridge when the storm hit."],
    stem: "Which choice completes the text so that it conforms to the conventions of standard English?",
    choices: ["was", "were", "have", "had been being"],
    answer: 0,
    explanation: "'The team' is a singular collective noun, so the singular verb 'was' is correct: 'The team of engineers was working...'" },

  // RW-6 Rhetorical Synthesis (more)
  { id: "rw6g", module: "rw-6", domain: "RW", type: "rw-mc", diff: 3, skill: "rw_rhet",
    passages: ["While researching a topic, a student has taken the following notes:\n\n• In 1911, Roald Amundsen reached the South Pole.\n• In 1912, Robert Falcon Scott's expedition also arrived, but later.\n• Amundsen used dog sleds; Scott relied on motor sledges and ponies.\n• Both faced extreme cold, but only Amundsen's team returned safely.\n\nThe student wants to contrast the two expeditions' methods. Which choice most effectively uses the notes to accomplish this goal?"],
    stem: "Which response best matches the student's goal?",
    choices: [
      "Unlike Scott, who relied on motor sledges and ponies, Amundsen used dog sleds on the way to the pole.",
      "Amundsen reached the South Pole in 1911 and Scott arrived in 1912.",
      "The South Pole is one of the coldest places on Earth.",
      "Both teams experienced extreme cold during their journeys."
    ],
    answer: 0,
    explanation: "The goal is to contrast their methods. Choice A directly contrasts the two methods (dog sleds vs. motor sledges and ponies). The others either state facts without contrasting or leave the goal unmet." },

  { id: "rw6h", module: "rw-6", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_rhet",
    passages: ["While researching a topic, a student has taken the following notes:\n\n• Libraries in several states have started lending 'hotspots' for internet access.\n• The program targets residents who lack broadband.\n• Early data show users used the hotspots most for job searches and schoolwork.\n• Program directors say demand has outpaced supply.\n\nThe student wants to emphasize the program's popularity. Which choice most effectively uses the notes to accomplish this goal?"],
    stem: "Which response best matches the student's goal?",
    choices: [
      "Demand for the library hotspot program has grown so quickly that it now exceeds the supply, according to program directors.",
      "Libraries in several states lend hotspots for internet access.",
      "The program targets residents who lack broadband.",
      "Hotspots can be checked out like books."
    ],
    answer: 0,
    explanation: "To emphasize popularity, the strongest evidence is that demand outpaces supply. Choice A makes that point central, using the notes." },

  // RW-2 Evidence (more)
  { id: "rw2h", module: "rw-2", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_evidence",
    passages: ["A student claims that eating a protein-rich breakfast improves memory later in the day. Another student plans to test this by giving two groups different breakfasts and then running the same memory test."],
    stem: "Which aspect of the plan would best strengthen the test?",
    choices: [
      "Making sure the two groups are otherwise similar and the memory test is identical.",
      "Giving both groups the same breakfast.",
      "Running the memory test only once.",
      "Using only people who already eat a big breakfast."
    ],
    answer: 0,
    explanation: "To fairly test the effect of the breakfast, the groups should be similar and the test identical — controlling other variables strengthens the comparison." },

  { id: "rw2i", module: "rw-2", domain: "RW", type: "rw-mc", diff: 3, skill: "rw_evidence",
    passages: ["A researcher argues that morning classes improve student attendance because attendance data show higher turnout in morning sections than in afternoon sections. A skeptic notes that morning and afternoon sections are taught by different instructors."],
    stem: "Which concern does the skeptic's observation raise about the researcher's argument?",
    choices: [
      "The difference in attendance may be due to the instructors, not the time of day.",
      "Attendance data are unreliable.",
      "Morning classes are shorter than afternoon classes.",
      "Students prefer both classes equally."
    ],
    answer: 0,
    explanation: "Because different instructors are involved, the observed attendance difference could have another cause (the instructor). The skeptic's point introduces an alternative explanation that weakens the causal claim." },

  // RW-3 Inferences (more)
  { id: "rw3i", module: "rw-3", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_inf",
    passages: ["A music app noticed that users who created playlists in the first week of signing up were far likelier to still be active a year later than users who never created one."],
    stem: "Which claim is most strongly supported by the text?",
    choices: [
      "Early engagement with playlists is associated with longer-term use of the app.",
      "Creating playlists causes users to make mistakes.",
      "Users who sign up never stream music.",
      "All active users create a playlist on the first day."
    ],
    answer: 0,
    explanation: "The correlation between early playlist creation and long-term activity supports the inference of association — choice A. It does not prove causation, so the wording 'is associated with' is appropriate." },

  { id: "rw3j", module: "rw-3", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_inf",
    passages: ["Botanists studying a desert plant found that it produces seeds in two sizes. Large seeds survive drought better, while small seeds are more likely to be carried to new areas by wind."],
    stem: "Which choice is best supported by the text?",
    choices: [
      "Producing two seed sizes may help the plant survive both harsh conditions and spread to new places.",
      "Large seeds are always destroyed by wind.",
      "Small seeds never survive drought.",
      "The plant produces seeds only in years of drought."
    ],
    answer: 0,
    explanation: "The two seed sizes serve two functions — drought survival and dispersal — so having both likely helps the plant. Choice A follows from the text." },

  // RW-1 Central Ideas (more)
  { id: "rw1o", module: "rw-1", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_central",
    passages: ["Fish in the deepest parts of the ocean face conditions that make most life impossible: crushing pressure, total darkness, and near-freezing temperature. Yet biologists have discovered a remarkable variety of species thriving in these zones, each with adaptations that allow the extreme environment."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "Despite extreme conditions, a range of species thrives in the deep ocean through adaptation.",
      "The deep ocean is completely devoid of all life.",
      "Deep-sea fish are identical to surface fish.",
      "Ocean pressure has no effect on animals."
    ],
    answer: 0,
    explanation: "The text sets up the harsh conditions, then counters with the discovery of many adapted species. Choice A captures that main idea; the others are contradicted or unsupported." },

  { id: "rw1p", module: "rw-1", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_central",
    passages: ["Publishing a book is a team effort at every stage. Editors refine the manuscript, designers shape its look, and marketers plan its public reach — all before readers see a single page."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "Publishing a book depends on the work of many people, not just the author.",
      "Editors are the only people involved in publishing.",
      "Books are printed without any prior planning.",
      "Marketers write the content of books."
    ],
    answer: 0,
    explanation: "The text emphasizes the many roles (editors, designers, marketers) involved in publishing. Choice A is the main idea." },

  // RW-5 Purpose (more)
  { id: "rw5i", module: "rw-5", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_purpose",
    passages: ["Honeybees live in colonies that can contain tens of thousands of workers. Within the hive, workers divide tasks: some forage for nectar, others tend the young, and still others guard the entrance."],
    stem: "The main purpose of the text is to",
    choices: [
      "describe the specialization of tasks within a honeybee colony",
      "argue that honeybees should be protected",
      "explain how bees make honey",
      "compare bees with wasps"
    ],
    answer: 0,
    explanation: "The text primarily explains the division of labor among worker bees. Choice A states that purpose." },

  { id: "rw5j", module: "rw-5", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_purpose",
    passages: ["The new housing development promised affordable units and access to transit. Critics, however, note that fewer than a tenth of the units were actually priced affordably, and the promised transit station has not broken ground."],
    stem: "The overall structure of the text is best described as",
    choices: [
      "presenting a claim, then offering evidence that undercuts it",
      "describing a sequence of construction steps",
      "listing the benefits of transit",
      "recommending a way to cut housing costs"
    ],
    answer: 0,
    explanation: "The first sentence states the development's promise; the second gives facts that undercut it (few affordable units, no station). The structure is claim-then-undercutting-evidence." },

  // ═══════════ AUTHORED ORIGINALS — PACK F (Math heavy) ═══════════
  // M-2 Systems (more)
  { id: "m2p", module: "m-2", domain: "MATH", type: "math-mc", diff: 2, skill: "m_sys",
    text: "Solve the system: 2x + y = 11 and x − y = 1. What is the value of x?",
    choices: ["3", "4", "5", "6"],
    answer: 1,
    explanation: "Add the equations: (2x + y) + (x − y) = 11 + 1 → 3x = 12 → x = 4." },

  { id: "m2q", module: "m-2", domain: "MATH", type: "math-mc", diff: 2, skill: "m_sys",
    text: "If 3x + y = 12 and y = 3, what is the value of x?",
    choices: ["2", "3", "6", "9"],
    answer: 1,
    explanation: "3x + 3 = 12 → 3x = 9 → x = 3." },

  { id: "m2r", module: "m-2", domain: "MATH", type: "math-mc", diff: 3, skill: "m_sys",
    text: "A system consists of the equations y = 2x + 1 and y = −2x + 9. At what point do the two lines intersect?",
    choices: ["(2, 5)", "(2, 3)", "(3, 7)", "(1, 3)"],
    answer: 0,
    explanation: "Set 2x + 1 = −2x + 9 → 4x = 8 → x = 2. Then y = 2(2) + 1 = 5. So (2, 5)." },

  { id: "m2s", module: "m-2", domain: "MATH", type: "math-spr", diff: 2, skill: "m_sys",
    text: "For the system x + y = 15 and x − y = 1, what is the value of y?",
    answer: 7,
    explanation: "Add: 2x = 16 → x = 8. Then 8 + y = 15 → y = 7." },

  { id: "m2t", module: "m-2", domain: "MATH", type: "math-spr", diff: 3, skill: "m_sys",
    text: "Two small businesses together employ 75 people. One employs 15 more than the other. How many people does the larger business employ?",
    answer: 45,
    explanation: "Let sizes be a and b with a + b = 75 and a − b = 15. Add: 2a = 90 → a = 45." },

  // M-3 Inequalities (more)
  { id: "m3k", module: "m-3", domain: "MATH", type: "math-mc", diff: 2, skill: "m_ineq",
    text: "Which inequality is equivalent to 4x − 8 > 12?",
    choices: ["x > 5", "x > 1", "x > 3", "x < 5"],
    answer: 0,
    explanation: "4x > 20 → x > 5." },

  { id: "m3l", module: "m-3", domain: "MATH", type: "math-mc", diff: 2, skill: "m_ineq",
    text: "A theater can seat 120 people. If there are already 47 people in line, which inequality represents the number of additional people p that can still enter?",
    choices: ["p ≤ 73", "p < 73", "p ≥ 73", "p > 73"],
    answer: 0,
    explanation: "47 + p ≤ 120 → p ≤ 73." },

  { id: "m3m", module: "m-3", domain: "MATH", type: "math-spr", diff: 2, skill: "m_ineq",
    text: "What is the smallest integer value of x that satisfies x/3 > 5?",
    answer: 16,
    explanation: "x > 15, so the smallest integer is 16." },

  { id: "m3n", module: "m-3", domain: "MATH", type: "math-spr", diff: 3, skill: "m_ineq",
    text: "How many integer values of x satisfy the inequality −2 < x < 5?",
    answer: 6,
    explanation: "The integers are −1, 0, 1, 2, 3, 4 — six values." },

  // M-5 Nonlinear (more)
  { id: "m5k", module: "m-5", domain: "MATH", type: "math-mc", diff: 2, skill: "m_nonlin",
    text: "If f(x) = x² + 3, what is f(4)?",
    choices: ["16", "19", "23", "24"],
    answer: 1,
    explanation: "f(4) = 16 + 3 = 19." },

  { id: "m5l", module: "m-5", domain: "MATH", type: "math-mc", diff: 3, skill: "m_nonlin",
    text: "The number of bacteria doubles every hour. If there are 5 at the start, how many are there after 3 hours?",
    choices: ["30", "40", "80", "125"],
    answer: 1,
    explanation: "After 1 hour: 10; after 2: 20; after 3: 40. (Or: 5 × 2³ = 40.)" },

  { id: "m5m", module: "m-5", domain: "MATH", type: "math-spr", diff: 2, skill: "m_nonlin",
    text: "What is the value of 3³ − 2²?",
    answer: 23,
    explanation: "27 − 4 = 23." },

  { id: "m5n", module: "m-5", domain: "MATH", type: "math-spr", diff: 3, skill: "m_nonlin",
    text: "If f(x) = 2ˣ + 1, what is the value of f(3)?",
    answer: 9,
    explanation: "2³ + 1 = 8 + 1 = 9." },

  // M-4 Quadratics (more)
  { id: "m4p", module: "m-4", domain: "MATH", type: "math-mc", diff: 2, skill: "m_quad",
    text: "Which of the following is a root of x² − 9 = 0?",
    choices: ["3", "4", "9", "81"],
    answer: 0,
    explanation: "x² = 9 → x = 3 or x = −3. Among the choices, 3 is correct." },

  { id: "m4q", module: "m-4", domain: "MATH", type: "math-mc", diff: 2, skill: "m_quad",
    text: "Which expression is equivalent to x² − 16?",
    choices: ["(x − 4)²", "(x + 4)(x − 4)", "(x + 16)(x − 1)", "(x − 4)(x − 4)"],
    answer: 1,
    explanation: "Difference of squares: x² − 16 = (x + 4)(x − 4)." },

  { id: "m4r", module: "m-4", domain: "MATH", type: "math-spr", diff: 2, skill: "m_quad",
    text: "The product of two consecutive integers is 20. What is the smaller of the two?",
    answer: 4,
    explanation: "Consecutive integers 4 and 5 give product 20. The smaller is 4." },

  { id: "m4s", module: "m-4", domain: "MATH", type: "math-spr", diff: 3, skill: "m_quad",
    text: "For what value of x is x² − 6x + 9 = 0?",
    answer: 3,
    explanation: "x² − 6x + 9 = (x − 3)², so x = 3 is the only solution." },

  // M-7 Percent (more)
  { id: "m7q", module: "m-7", domain: "MATH", type: "math-mc", diff: 2, skill: "m_pct",
    text: "In a poll, 60% of 180 adults supported a new policy. How many supported it?",
    choices: ["90", "108", "112", "120"],
    answer: 1,
    explanation: "0.60 × 180 = 108." },

  { id: "m7r", module: "m-7", domain: "MATH", type: "math-mc", diff: 3, skill: "m_pct",
    text: "Sam's score increased from 75 to 90. What was the percent increase?",
    choices: ["15%", "18%", "20%", "25%"],
    answer: 2,
    explanation: "Increase = 15. 15/75 = 0.20 = 20%." },

  { id: "m7s", module: "m-7", domain: "MATH", type: "math-spr", diff: 2, skill: "m_pct",
    text: "What is 45% of 80?",
    answer: 36,
    explanation: "0.45 × 80 = 36." },

  // M-8 Stats (more)
  { id: "m8t", module: "m-8", domain: "MATH", type: "math-mc", diff: 2, skill: "m_stat",
    text: "The numbers 2, 2, 6, 8, 12. What is the mode?",
    choices: ["2", "6", "8", "No mode"],
    answer: 0,
    explanation: "2 appears twice, most frequently, so the mode is 2." },

  { id: "m8u", module: "m-8", domain: "MATH", type: "math-mc", diff: 3, skill: "m_stat",
    text: "If a data set has an even number of values, how is the median found?",
    choices: [
      "It is the average of the two middle values when sorted.",
      "It is the largest value.",
      "It is the value that appears most.",
      "It cannot be found."
    ],
    answer: 0,
    explanation: "For an even number of values, the median is the mean of the two middle values in sorted order." },

  { id: "m8v", module: "m-8", domain: "MATH", type: "math-spr", diff: 3, skill: "m_stat",
    text: "In a class, the mean of 10 scores is 75. One additional score of 95 is added. What is the new mean of all 11 scores?",
    answer: 76.8,
    explanation: "Total = 750. New total = 750 + 95 = 845. New mean = 845/11 ≈ 76.8." },

  // M-9 Geometry (more)
  { id: "m9v", module: "m-9", domain: "MATH", type: "math-mc", diff: 2, skill: "m_geo",
    text: "Two lines are parallel. One is cut by a transversal, creating an angle of 110°. What is the measure of the angle that is a vertical angle to it?",
    choices: ["70°", "90°", "110°", "180°"],
    answer: 2,
    explanation: "Vertical angles are congruent, so it is also 110°." },

  { id: "m9w", module: "m-9", domain: "MATH", type: "math-mc", diff: 2, skill: "m_geo",
    text: "Which of the following is NOT a valid measure for an interior angle of a triangle?",
    choices: ["30°", "60°", "90°", "180°"],
    answer: 3,
    explanation: "All interior angles of a triangle sum to 180°, so an individual interior angle cannot itself be 180°." },

  { id: "m9x", module: "m-9", domain: "MATH", type: "math-spr", diff: 3, skill: "m_geo",
    text: "A rectangle has length 15 and width 8. What is the length of its diagonal?",
    answer: 17,
    explanation: "√(15² + 8²) = √(225 + 64) = √289 = 17." },

  // M-1 Linear (more)
  { id: "m1ad", module: "m-1", domain: "MATH", type: "math-mc", diff: 2, skill: "m_lin",
    text: "The graph of y = 3x − 4 crosses the x-axis at which x-value?",
    choices: ["3", "4", "4/3", "−4/3"],
    answer: 2,
    explanation: "Set y = 0: 0 = 3x − 4 → x = 4/3." },

  { id: "m1ae", module: "m-1", domain: "MATH", type: "math-mc", diff: 2, skill: "m_lin",
    text: "A subscription costs $9 per month plus a one-time $15 setup fee. Which expression represents the total cost after m months?",
    choices: ["9m + 15", "15m + 9", "24m", "9 + 15m"],
    answer: 0,
    explanation: "The monthly charge is 9m; the one-time setup fee is added once: 9m + 15." },

  { id: "m1af", module: "m-1", domain: "MATH", type: "math-spr", diff: 2, skill: "m_lin",
    text: "If 7x − 2 = 5x + 8, what is the value of x?",
    answer: 5,
    explanation: "7x − 5x = 8 + 2 → 2x = 10 → x = 5." },

  // M-6 Rates (more)
  { id: "m6w", module: "m-6", domain: "MATH", type: "math-mc", diff: 2, skill: "m_rate",
    text: "A recipe makes 12 pancakes using 1.5 cups of batter. How many cups are needed for 20 pancakes at the same ratio?",
    choices: ["2.5", "3", "3.5", "4"],
    answer: 0,
    explanation: "1.5 cups / 12 pancakes = 0.125 cups per pancake. 20 × 0.125 = 2.5 cups." },

  { id: "m6x", module: "m-6", domain: "MATH", type: "math-mc", diff: 2, skill: "m_rate",
    text: "A plane covers 1,200 miles in 3 hours. What is its average speed in miles per hour?",
    choices: ["300", "360", "400", "600"],
    answer: 2,
    explanation: "1200 / 3 = 400 mph." },

  { id: "m6y", module: "m-6", domain: "MATH", type: "math-spr", diff: 3, skill: "m_rate",
    text: "If 4 kilograms of oranges cost $10, how much do 7 kilograms cost at the same rate?",
    answer: 17.5,
    explanation: "Unit price = 10/4 = $2.50/kg. 7 × 2.50 = $17.50." },

  // ═══════════ AUTHORED ORIGINALS — PACK G (fill thin modules) ═══════════
  // RW-2 Evidence (more)
  { id: "rw2j", module: "rw-2", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_evidence",
    passages: ["A farmer claims that rotating crops between years reduces pest damage. To investigate, she compares two fields for several seasons: one with rotation, one growing the same crop."],
    stem: "Which result would be most consistent with the farmer's claim?",
    choices: [
      "The rotated field consistently showed less pest damage than the single-crop field.",
      "Both fields showed identical pest damage.",
      "The single-crop field showed less pest damage.",
      "Pest damage varied randomly with no pattern."
    ],
    answer: 0,
    explanation: "If rotation reduces pest damage, the rotated field should show less pest damage than the comparison field. Choice A directly reflects the claim." },

  { id: "rw2k", module: "rw-2", domain: "RW", type: "rw-mc", diff: 3, skill: "rw_evidence",
    passages: ["A researcher argues that the author of an 18th-century novel was influenced by travel writings. The researcher has found a passage describing a city in detail."],
    stem: "Which additional evidence would most strengthen the argument?",
    choices: [
      "An earlier travel account describes the same city using very similar details and phrasing.",
      "The novel is set in a fictional city.",
      "The author once lived in the city.",
      "The novel was popular in its time."
    ],
    answer: 0,
    explanation: "To strengthen the claim of influence, evidence that the novel's passage closely resembles an earlier travel account (similar details and phrasing) is strongest." },

  { id: "rw2l", module: "rw-2", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_evidence",
    passages: ["A student claims that students sleep more when school starts later in the morning. She gathered survey data from two schools, one starting at 7:30 and one at 9:00."],
    stem: "Which finding would most support the claim?",
    choices: [
      "Students at the 9:00 school reported more average nightly sleep than students at the 7:30 school.",
      "Students at both schools reported the same sleep.",
      "The 7:30 school students slept more.",
      "School start time had no relationship with sleep length."
    ],
    answer: 0,
    explanation: "The claim links later start to more sleep. Support comes from comparing: the later-starting school reporting more sleep — choice A." },

  // RW-3 Inferences (more)
  { id: "rw3k", module: "rw-3", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_inf",
    passages: ["A glacier's meltwater feeds a river used for irrigation. Over the past decade, the glacier has thinned each year, and the river's summer flow has decreased even in years with normal rainfall."],
    stem: "Which choice is best supported by the text?",
    choices: [
      "The shrinking glacier is likely contributing to the river's declining summer flow.",
      "River flow depends only on rainfall.",
      "Glaciers are unaffected by temperature.",
      "Irrigation use has fallen in recent years."
    ],
    answer: 0,
    explanation: "Since summer flow fell even in normal-rainfall years while the glacier thinned, the glacier's loss is a plausible contributor. Choice A is supported." },

  { id: "rw3l", module: "rw-3", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_inf",
    passages: ["A school district found that students who participated in a reading mentor program were less likely to be absent. The district considered expanding the program, but noted that participating students came from families already highly involved in their schooling."],
    stem: "Which concern is most directly raised by the note?",
    choices: [
      "The program's benefits may be due to student-family involvement, not the mentoring alone.",
      "The mentoring program is too expensive to expand.",
      "Reading scores declined during the program.",
      "Students did not enjoy the program."
    ],
    answer: 0,
    explanation: "If participating students already came from involved families, that existing factor may explain lower absences, weakening the causal claim about the program. Choice A captures that concern." },

  // RW-5 Purpose (more)
  { id: "rw5k", module: "rw-5", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_purpose",
    passages: ["The historical novel was not the author's first attempt at the form, but it is widely regarded as her finest. Critics point especially to the way she interweaves the public events of the era with the private trials of her characters."],
    stem: "The second sentence serves mainly to",
    choices: [
      "point to a reason for the novel's high regard",
      "summarize the plot of the novel",
      "compare the novel with a film",
      "criticize the author's other works"
    ],
    answer: 0,
    explanation: "The second sentence explains why critics regard the novel highly (the interweaving of public and private). Its function is to give a reason for that regard." },

  { id: "rw5l", module: "rw-5", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_purpose",
    passages: ["Sea otters keep kelp forests healthy by eating sea urchins, which would otherwise overgraze the kelp. Where otters have been reintroduced, kelp and the fish that shelter in it have recovered."],
    stem: "The main purpose of the text is to",
    choices: [
      "explain how sea otters benefit an ecosystem",
      "argue that urchins should be removed by hand",
      "describe how to catch otters",
      "compare kelp with coral reefs"
    ],
    answer: 0,
    explanation: "The text explains the otter's role in controlling urchins and thus protecting kelp — its purpose is to explain that ecosystem benefit." },

  // RW-6 Rhetorical Synthesis (more)
  { id: "rw6i", module: "rw-6", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_rhet",
    passages: ["While researching a topic, a student has taken the following notes:\n\n• The invention of the elevator made tall buildings practical.\n• Before elevators, offices were rarely above the fourth or fifth floor.\n• Modern skyscrapers depend on high-speed elevators.\n• Rooftop elevators also allow observation decks at the top.\n\nThe student wants to emphasize the role of elevators in enabling tall buildings. Which choice most effectively uses the notes?"],
    stem: "Which response best matches the student's goal?",
    choices: [
      "By making upper floors practical, the elevator allowed buildings to grow into the skyscrapers that define modern cities.",
      "Elevators are machines that move people between floors.",
      "Some elevators are located on rooftops.",
      "Tall buildings were common before elevators existed."
    ],
    answer: 0,
    explanation: "The goal is to emphasize elevators' role in enabling tall buildings. Choice A states that causal role directly, drawing on the notes." },

  { id: "rw6j", module: "rw-6", domain: "RW", type: "rw-mc", diff: 3, skill: "rw_rhet",
    passages: ["While researching a topic, a student has taken the following notes:\n\n• Sea level has risen about 8 inches since 1880.\n• The rate of rise has accelerated in recent decades.\n• Melting ice sheets and expansion of warming water both add to the rise.\n• The rise threatens coastal cities and wetlands.\n\nThe student wants to argue that sea-level rise is a serious concern. Which choice most effectively uses the notes to accomplish this goal?"],
    stem: "Which response best matches the student's goal?",
    choices: [
      "Sea levels have already risen about 8 inches since 1880, the rise is accelerating, and it now threatens coastal cities and wetlands.",
      "Melting ice sheets and warming water contribute to sea-level rise.",
      "Sea level is measured relative to a fixed point.",
      "Some coastlines are unaffected by the ocean."
    ],
    answer: 0,
    explanation: "To make the case that the rise is serious, choice A marshals the key facts together: the existing rise, its acceleration, and the threat to cities and wetlands — the strongest argumentative response." },

  // M-2 Systems (more)
  { id: "m2u", module: "m-2", domain: "MATH", type: "math-mc", diff: 2, skill: "m_sys",
    text: "Which ordered pair (x, y) satisfies both y = 3x − 1 and x + y = 7?",
    choices: ["(1, 2)", "(2, 5)", "(3, 6)", "(4, 3)"],
    answer: 1,
    explanation: "Substitute: x + (3x − 1) = 7 → 4x = 8 → x = 2, y = 5. So (2, 5)." },

  { id: "m2v", module: "m-2", domain: "MATH", type: "math-spr", diff: 2, skill: "m_sys",
    text: "A system of equations is given: 3x + 2y = 12 and x = 2. What is the value of y?",
    answer: 3,
    explanation: "6 + 2y = 12 → 2y = 6 → y = 3." },

  // M-3 Inequalities (more)
  { id: "m3o", module: "m-3", domain: "MATH", type: "math-mc", diff: 1, skill: "m_ineq",
    text: "Which of the following is the solution to 2x − 4 ≤ 6?",
    choices: ["x ≤ 5", "x ≤ 1", "x ≥ 5", "x < 5"],
    answer: 0,
    explanation: "2x ≤ 10 → x ≤ 5." },

  { id: "m3p", module: "m-3", domain: "MATH", type: "math-spr", diff: 2, skill: "m_ineq",
    text: "What is the largest integer value of x that satisfies 5x < 37?",
    answer: 7,
    explanation: "x < 7.4, so the largest integer is 7." },

  // M-4 Quadratics (more)
  { id: "m4t", module: "m-4", domain: "MATH", type: "math-mc", diff: 3, skill: "m_quad",
    text: "For the equation x² = 64, how many real solutions are there?",
    choices: ["0", "1", "2", "4"],
    answer: 2,
    explanation: "x = 8 and x = −8 are both real solutions, so there are 2." },

  { id: "m4u", module: "m-4", domain: "MATH", type: "math-spr", diff: 2, skill: "m_quad",
    text: "The product of two numbers is 30 and their sum is 11. What is the larger number?",
    answer: 6,
    explanation: "The number pairs with product 30 and sum 11 are 5 and 6, so the larger is 6." },

  // M-5 Nonlinear (more)
  { id: "m5o", module: "m-5", domain: "MATH", type: "math-mc", diff: 2, skill: "m_nonlin",
    text: "If h(x) = 2x² − x, what is h(3)?",
    choices: ["12", "15", "18", "21"],
    answer: 1,
    explanation: "h(3) = 2(9) − 3 = 18 − 3 = 15." },

  { id: "m5p", module: "m-5", domain: "MATH", type: "math-spr", diff: 2, skill: "m_nonlin",
    text: "What is the value of 5² − 3³?",
    answer: -2,
    explanation: "25 − 27 = −2." },

  // M-7 Percent (more)
  { id: "m7t", module: "m-7", domain: "MATH", type: "math-mc", diff: 1, skill: "m_pct",
    text: "What is 10% of 50?",
    choices: ["5", "10", "15", "25"],
    answer: 0,
    explanation: "0.10 × 50 = 5." },

  { id: "m7u", module: "m-7", domain: "MATH", type: "math-spr", diff: 2, skill: "m_pct",
    text: "A jacket costing $60 is on sale at 15% off. What is the sale price?",
    answer: 51,
    explanation: "Discount = 0.15 × 60 = $9. Sale price = 60 − 9 = $51." },

  // M-8 Stats (more)
  { id: "m8w", module: "m-8", domain: "MATH", type: "math-mc", diff: 1, skill: "m_stat",
    text: "What is the median of the numbers 2, 5, 9?",
    choices: ["2", "5", "9", "16"],
    answer: 1,
    explanation: "The middle value of the sorted list is 5." },

  { id: "m8x", module: "m-8", domain: "MATH", type: "math-spr", diff: 3, skill: "m_stat",
    text: "A spinner has 4 equal sections labeled A, B, C, D. It is spun and a coin is flipped. How many total outcomes are in the sample space?",
    answer: 8,
    explanation: "4 × 2 = 8 possible outcomes." },

  // M-1 Linear (more)
  { id: "m1ag", module: "m-1", domain: "MATH", type: "math-mc", diff: 1, skill: "m_lin",
    text: "What value of x satisfies the equation x + 9 = 20?",
    choices: ["9", "11", "20", "29"],
    answer: 1,
    explanation: "x = 20 − 9 = 11." },

  { id: "m1ah", module: "m-1", domain: "MATH", type: "math-mc", diff: 3, skill: "m_lin",
    text: "The cost of renting a tool is $15 plus $8 per hour. If the total charge was $79, for how many hours was the tool rented?",
    choices: ["6", "7", "8", "9"],
    answer: 2,
    explanation: "15 + 8h = 79 → 8h = 64 → h = 8." },

  // M-6 Rates (more)
  { id: "m6z", module: "m-6", domain: "MATH", type: "math-mc", diff: 1, skill: "m_rate",
    text: "A runner completes a 5-kilometer race in 25 minutes. What is the runner's speed in kilometers per minute?",
    choices: ["0.1", "0.2", "0.5", "5"],
    answer: 1,
    explanation: "Speed = 5 / 25 = 0.2 km/min." },

  { id: "m6aa", module: "m-6", domain: "MATH", type: "math-spr", diff: 2, skill: "m_rate",
    text: "If 3 boxes weigh 12 kilograms, what is the total weight of 10 such boxes?",
    answer: 40,
    explanation: "Each box = 12/3 = 4 kg. 10 × 4 = 40 kg." },

  // M-9 Geometry (more)
  { id: "m9y", module: "m-9", domain: "MATH", type: "math-mc", diff: 1, skill: "m_geo",
    text: "What is the area of a square with side length 9?",
    choices: ["18", "36", "72", "81"],
    answer: 3,
    explanation: "Area = 9² = 81." },

  { id: "m9z", module: "m-9", domain: "MATH", type: "math-mc", diff: 2, skill: "m_geo",
    text: "In a right triangle, the hypotenuse is 13 and one leg is 5. What is the other leg?",
    choices: ["8", "10", "12", "18"],
    answer: 2,
    explanation: "5² + b² = 13² → 25 + b² = 169 → b² = 144 → b = 12." },

  { id: "m9aa", module: "m-9", domain: "MATH", type: "math-spr", diff: 2, skill: "m_geo",
    text: "A circle has circumference 30π. What is its radius?",
    answer: 15,
    explanation: "C = 2πr = 30π → r = 15." },

  // RW-1 Central Ideas (more)
  { id: "rw1q", module: "rw-1", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_central",
    passages: ["Rain gardens are planted in shallow, bowl-shaped areas designed to collect runoff. The plants and soil filter pollutants from the water before it reaches streams, and the gardens also reduce flooding during heavy rain."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "Rain gardens absorb runoff and filter it while also reducing flooding.",
      "Rain gardens are expensive to construct.",
      "Rain gardens are purely decorative features.",
      "Runoff has no effect on nearby streams."
    ],
    answer: 0,
    explanation: "The text lists the purposes: collecting runoff, filtering pollutants, and reducing flooding. Choice A summarizes the main idea." },

  { id: "rw1r", module: "rw-1", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_central",
    passages: ["Crows recognize individual human faces. In one experiment, researchers who had captured and tagged crows were later scolded and chased by those same birds, while people who had never handled them were not bothered."],
    stem: "Which choice best states the main idea of the text?",
    choices: [
      "Crows can remember and react to specific people who have treated them badly.",
      "Crows attack every human they see.",
      "Researchers cannot study crows safely.",
      "Crows rely only on sound to identify people."
    ],
    answer: 0,
    explanation: "The experiment shows crows reacted to the specific people who had captured them. Choice A states this main idea." },

  // RW-4 Words (more)
  { id: "rw4o", module: "rw-4", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_words",
    passages: ["The concert hall's acoustics were so refined that even a whisper from the stage could be heard clearly in the last row."],
    stem: "As used in the text, 'refined' most nearly means",
    choices: ["polished", "advanced", "subtle", "expensive"],
    answer: 0,
    explanation: "'Refined' means highly finished or polished. Here it describes acoustics tuned to a high quality." },

  { id: "rw4p", module: "rw-4", domain: "RW", type: "rw-mc", diff: 1, skill: "rw_words",
    passages: ["The manager praised the team for their prompt response, noting that the issue was resolved within minutes of the report."],
    stem: "As used in the text, 'prompt' most nearly means",
    choices: ["quick", "polite", "careful", "thorough"],
    answer: 0,
    explanation: "'Prompt' means done without delay; resolving in minutes supports 'quick.'" },

  // ═══════════ AUTHORED ORIGINALS — PACK H (final balance) ═══════════
  // RW-6 Rhetorical Synthesis (more)
  { id: "rw6k", module: "rw-6", domain: "RW", type: "rw-mc", diff: 3, skill: "rw_rhet",
    passages: ["While researching a topic, a student has taken the following notes:\n\n• Electric cars produce no tailpipe emissions while driving.\n• Manufacturing their batteries, however, produces significant emissions.\n• The difference depends on how a region generates electricity.\n• Where electricity is clean, electric cars emit less over their lifetime.\n\nThe student wants to present a balanced view of electric cars' emissions. Which choice most effectively uses the notes?"],
    stem: "Which response best matches the student's goal?",
    choices: [
      "Although electric cars emit nothing from the tailpipe, their battery production and the regional electricity supply both affect their overall emissions.",
      "Electric cars must be produced with clean energy to be useful.",
      "Electric cars have no environmental impact at all.",
      "Batteries are manufactured in every region equally."
    ],
    answer: 0,
    explanation: "A balanced view includes both the emissions-free driving and the battery-manufacturing/regional electricity caveat. Choice A captures both sides." },

  { id: "rw6l", module: "rw-6", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_rhet",
    passages: ["While researching a topic, a student has taken the following notes:\n\n• The pencil was invented in the 1500s.\n• Initially, graphite was wrapped in string or cloth.\n• The wooden pencil we know came later.\n• Erasers were attached to pencils starting in 1858.\n\nThe student wants to summarize the history of the pencil in chronological order. Which choice most effectively uses the notes to accomplish this goal?"],
    stem: "Which response best matches the student's goal?",
    choices: [
      "Graphite was first wrapped in string or cloth, later encased in wood, and erasers were added to pencils starting in 1858.",
      "Pencils are writing tools that are now used everywhere.",
      "Wooden pencils are better than mechanical ones.",
      "Erasers were invented before the pencil."
    ],
    answer: 0,
    explanation: "The goal is chronological history. Choice A orders the stages in time: wrapped graphite → wood → erasers, exactly as the notes support." },

  // RW-2 Evidence (more)
  { id: "rw2m", module: "rw-2", domain: "RW", type: "rw-mc", diff: 2, skill: "rw_evidence",
    passages: ["A scientist hypothesizes that a certain hormone, when increased, helps plants survive drought. She plans to expose plants to a dry period while increasing the hormone in some but not in others."],
    stem: "Which result would most directly support the hypothesis?",
    choices: [
      "The plants with the added hormone survived the dry period better than the others.",
      "All plants wilted at the same rate.",
      "The added hormone had no visible effect.",
      "Plants without the hormone grew taller."
    ],
    answer: 0,
    explanation: "The hypothesis links increased hormone to better drought survival, so evidence of better survival in the treated group directly supports it — choice A." },

  { id: "rw2n", module: "rw-2", domain: "RW", type: "rw-mc", diff: 3, skill: "rw_evidence",
    passages: ["A researcher claims that city dwellers have lost the skill of identifying local bird calls. To test this, she plays common bird calls to residents and to visitors, recording how many each group identifies."],
    stem: "Which result would most strengthen the claim?",
    choices: [
      "Residents identified far fewer calls than visitors did.",
      "Residents and visitors identified the same number of calls.",
      "Residents identified more calls than visitors.",
      "Neither group could name any bird."
    ],
    answer: 0,
    explanation: "The claim is that city dwellers specifically have lost the skill, so evidence that residents do worse than visitors strengthens it. Choice A is the contrast that supports the claim." },

  // M-3 Inequalities (more)
  { id: "m3q", module: "m-3", domain: "MATH", type: "math-mc", diff: 2, skill: "m_ineq",
    text: "Which inequality's graph includes the point (0, 5) in its solution region?",
    choices: ["y < 4", "y > 4", "x < 4", "x > 4"],
    answer: 1,
    explanation: "For point (0, 5), y = 5. It satisfies y > 4 but not y < 4 or the x-inequalities. So y > 4." },

  { id: "m3r", module: "m-3", domain: "MATH", type: "math-spr", diff: 3, skill: "m_ineq",
    text: "How many integer values of x satisfy −4 ≤ x ≤ 4?",
    answer: 9,
    explanation: "Integers −4, −3, −2, −1, 0, 1, 2, 3, 4 — nine values." },

  // M-4 Quadratics (more)
  { id: "m4v", module: "m-4", domain: "MATH", type: "math-mc", diff: 2, skill: "m_quad",
    text: "Which of the following is equivalent to (x − 5)²?",
    choices: ["x² − 25", "x² − 10x + 25", "x² + 10x + 25", "x² − 5x + 25"],
    answer: 1,
    explanation: "(x − 5)² = x² − 10x + 25." },

  { id: "m4w", module: "m-4", domain: "MATH", type: "math-spr", diff: 3, skill: "m_quad",
    text: "For the quadratic x² − 10x + 21 = 0, what is the smaller of the two roots?",
    answer: 3,
    explanation: "(x − 3)(x − 7) = 0 → roots 3 and 7; the smaller is 3." },

  // M-5 Nonlinear (more)
  { id: "m5q", module: "m-5", domain: "MATH", type: "math-mc", diff: 2, skill: "m_nonlin",
    text: "If g(t) = 2t and h(t) = t², what is h(g(3))?",
    choices: ["6", "12", "36", "18"],
    answer: 2,
    explanation: "g(3) = 6. Then h(6) = 6² = 36." },

  { id: "m5r", module: "m-5", domain: "MATH", type: "math-spr", diff: 3, skill: "m_nonlin",
    text: "A population of 100 grows by 10% each year. What is the population after 2 years?",
    answer: 121,
    explanation: "After year 1: 100 × 1.10 = 110. After year 2: 110 × 1.10 = 121." },

  { id: "m5s", module: "m-5", domain: "MATH", type: "math-mc", diff: 3, skill: "m_nonlin",
    text: "Which graph best represents a quantity that increases by a constant percentage each year?",
    choices: [
      "A curve that gets steeper as it rises",
      "A straight line slanting upward",
      "A curve that rises and then falls",
      "A horizontal line"
    ],
    answer: 0,
    explanation: "Constant percentage growth is exponential: it grows by a growing amount each period, so its graph curves upward and gets steeper." },

  // M-1 Linear (more)
  { id: "m1ai", module: "m-1", domain: "MATH", type: "math-spr", diff: 2, skill: "m_lin",
    text: "If 4x + 3 = 19, what is the value of x?",
    answer: 4,
    explanation: "4x = 16 → x = 4." },

  // M-7 Percent (more)
  { id: "m7v", module: "m-7", domain: "MATH", type: "math-mc", diff: 2, skill: "m_pct",
    text: "A charity raised $2,400 and spent 25% of it on supplies. How much was spent?",
    choices: ["$400", "$500", "$600", "$900"],
    answer: 2,
    explanation: "0.25 × 2400 = $600." },

  // M-8 Stats (more)
  { id: "m8y", module: "m-8", domain: "MATH", type: "math-mc", diff: 2, skill: "m_stat",
    text: "The ages of four siblings are 8, 10, 12, and 18. What is the median age?",
    choices: ["11", "12", "10", "13"],
    answer: 0,
    explanation: "Even number of values: median = (10 + 12)/2 = 11." },

  // M-9 Geometry (more)
  { id: "m9ab", module: "m-9", domain: "MATH", type: "math-mc", diff: 3, skill: "m_geo",
    text: "In a right triangle, the side opposite angle x° has length 5 and the hypotenuse has length 13. What is sin x°?",
    choices: ["5/13", "12/13", "5/12", "13/5"],
    answer: 0,
    explanation: "sin x° = opposite / hypotenuse = 5/13." },

  { id: "m9ac", module: "m-9", domain: "MATH", type: "math-spr", diff: 3, skill: "m_geo",
    text: "What is the volume of a cube with edge length 5?",
    answer: 125,
    explanation: "Volume = 5³ = 125." }
];
