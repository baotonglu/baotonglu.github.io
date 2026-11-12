# Baotong Lu's homepage

A static academic homepage for GitHub Pages, focused on AI for Systems and
Systems for AI. No build step or external runtime dependencies are required.

## Editing

- `index.html`: biography, research, publications, service, and awards.
- `css/home.css`: editorial layout, responsive reading widths, and the research
  landscape animation. The three research-story figures are intentionally static.
- `js/home.js`: the optional animation pause/resume control.
- `photos/`: portrait and favicon.
- `fonts/`: self-hosted Inter variable font and its SIL Open Font License.
  Source: https://github.com/rsms/inter.

Edit `index.html` directly. The legacy `index.jemdoc` is not the source of the
current homepage; running jemdoc against it will overwrite the homepage with
outdated content. Existing project pages and legacy styles remain independent.

Open `index.html` in a browser, or serve this directory with any static HTTP
server. All homepage content and navigation work without JavaScript. Animations
respect the system's reduced-motion preference and can also be paused using the
control below the opening diagram. Without JavaScript, the diagram is static.

Typography is defined by the reading, detail, and metadata size variables in
`css/home.css`. Keep narrative copy at 18-20px and publication authors and other
supporting content at least 16px, using the primary near-black text color.
Reserve the secondary color and smaller type for labels, dates, and captions;
do not shrink reading text at mobile breakpoints.

The opening landscape is a conceptual map of related research directions, not
an architecture diagram of a combined system. Desktop and mobile have separate
SVG compositions so labels remain legible instead of scaling a wide figure down.
Keep the biography, publication list, academic service, and awards on the shared
reading column; use the wider layout only for research illustrations and stories.