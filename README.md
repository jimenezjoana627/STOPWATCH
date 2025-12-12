# Stopwatch

Simple millisecond stopwatch with start, stop, and reset controls.

## Features
- Tracks hours, minutes, seconds, and milliseconds.
- Buttons reflect running state (start disabled while running, stop fades when paused).
- Reset zeros the clock without reloading the page.

## Files
- `index.html` – markup and buttons.
- `style.css` – styling.
- `app.js` – timer logic and UI state.

## Installation / Setup
- No dependencies or build tools. Works offline.
- Optional: serve locally with a static server (`npx serve .`) if you prefer not to use `file://`.

## Quick Start
1) Download/clone the `STOPWATCH` folder.
2) Open `index.html` in a modern browser.
3) Click `Start` to begin timing, `Stop` to pause, and `Reset` to zero the clock.

## Notes
- Timing resolution is 10ms; actual precision depends on the browser/tab being active.

