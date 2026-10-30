# Bert Ann S. Binasbas — Portfolio (100% TypeScript)

The page content, rendering, behaviour and build tooling are all TypeScript (strict mode).
`public/index.html` is only an empty shell with `<div id="app">`; TypeScript builds the page.

## Structure

```
public/              index.html shell, style1.css, images (copied to dist/)
src/
  data.ts            ALL site content — edit this to change text, projects, skills...
  types.ts           interfaces for the content
  h.ts, icons.ts     typed element builder + SVG icons
  components/        header, hero, sections, footer renderers
  render.ts          assembles the page
  menu.ts, header.ts, contactForm.ts   behaviour
  main.ts            entry point
scripts/build.ts     build helper (TypeScript)
```

## Commands

```bash
npm install
npm run build       # -> dist/
npm run typecheck
npm run watch
npm run serve       # build + local preview
```

Deploy on Netlify: build `npm run build`, publish `dist` (see netlify.toml).
