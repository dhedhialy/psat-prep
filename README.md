# PSAT Prep Coach

A free, self-contained study app for the PSAT/NMSQT: Reading & Writing and Math. No account, no build step, no server — just open the page and practice.

**Live:** https://dhedhialy.github.io/psat-prep/

## What's inside
- **9 Math + 8 Reading & Writing modules** covering the full digital PSAT skill map
- **345 original, exam-style questions** with worked explanations
- **Mastery dashboard** — see skill-level accuracy at a glance, with weak-area chips
- **Module flow** — Learn → Practice → Check, so concept review precedes testing
- **Adaptive drills** — drills target your weakest skills (<60% accuracy after ≥2 attempts)
- **Built-in Desmos calculators** on math questions
- **Progress saved locally** in your browser (`localStorage`); no data leaves your machine

## Run locally
Open `index.html` in any browser. That's it — no install.

## Structure
- `index.html` — app shell (dashboard / practice / progress views)
- `styles.css` — responsive layout (phone, tablet, desktop)
- `data.js` — curriculum map + 345-question bank
- `app.js` — SPA logic (routing, grading, mastery, adaptive drill)

## Content note
Questions are original, written by an experienced tutor to match the format and rigor of the current digital PSAT. They are not official College Board items.