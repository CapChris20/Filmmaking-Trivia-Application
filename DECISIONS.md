# Architecture Decision Records — Filmmaking Trivia Application

A 9-question multiple-choice filmmaking trivia game drawn on a 600×600 canvas with **p5.js**. It tracks score and lives, and players answer by clicking A–D regions. It's an early learning project.

These records were reconstructed from `sketch.js` and `index.html`.

---

# ADR-001: p5.js canvas instead of HTML/DOM UI

## Context
This was a creative-coding exercise: build an interactive game with drawing primitives and a frame loop.

## Alternatives Considered
- **HTML buttons + vanilla JS**: Accessible and responsive, but doesn't practice canvas and game-loop concepts.
- **React quiz component**: More structure, but heavy for a first project.

## Decision
Use **p5.js 1.4.0** (plus `p5.sound`) from cdnjs. `setup()` creates a 600×600 canvas, and `draw()` switches on a `question` counter (0 = title, 1–9 = questions, 10 = game over). `mousePressed()` checks hard-coded rectangles for answers A–D.

## Rationale
p5's `setup`/`draw` model is the simplest way to learn the immediate-mode rendering loop.

## Tradeoffs
- **Gained:** a quick, visual, self-contained game.
- **Cost:** a fixed 600 px canvas doesn't scale on phones. Click targets are hard-coded pixel ranges. The canvas text is invisible to screen readers. Each question is its own function (`questionOne` … `questionNine`), so adding a question means copying code. `p5.sound` is loaded but unused.

## What I'd Change
Store questions as data (`[{ prompt, choices, answer }]`) and render them with one function. Scale the canvas to the window, derive hit-boxes from the layout, add keyboard input (A–D keys), and remove the unused sound add-on.

## Measurement
- 9 questions, 9 lives, and `sketch.js` is 355 lines.

---

# ADR-002: No backend, storage, authentication or payments

## Decision
Runs fully in the browser. Score resets on reload.

## Rationale
It's a single-session game with nothing to persist.

## Tradeoffs
No high-score history.

## What I'd Change
Save the best score in `localStorage`.

## Measurement
Not applicable.
