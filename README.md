# Baotong Lu's homepage

A static academic homepage for GitHub Pages, focused on AI for Systems and
Systems for AI. No build step or external runtime dependencies are required.

## Editing

- `index.html`: biography, research, publications, service, and awards.
- `css/home.css`: responsive layout and lightweight CSS/SVG animations.
- `js/home.js`: the optional animation pause/resume control.
- `photos/`: portrait and favicon.

Edit `index.html` directly. The legacy `index.jemdoc` is not the source of the
current homepage; running jemdoc against it will overwrite the homepage with
outdated content. Existing project pages and legacy styles remain independent.

Open `index.html` in a browser, or serve this directory with any static HTTP
server. All homepage content and navigation work without JavaScript. Animations
respect the system's reduced-motion preference and can also be paused using the
control below the opening diagram.