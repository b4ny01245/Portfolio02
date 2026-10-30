# Bert Ann S. Binasbas — Portfolio (TypeScript)

Static portfolio site. All JavaScript is now written in TypeScript (strict mode).

## Structure

```
public/            HTML, CSS, images (copied as-is to dist/)
src/
  main.ts          entry point
  dom.ts           typed DOM helper
  menu.ts          mobile hamburger menu
  header.ts        hide/show header on scroll
  contactForm.ts   contact form handler
scripts/build.mjs  copies public/ -> dist/
```

## Commands

```bash
npm install        # once
npm run build      # type-check + compile to dist/
npm run typecheck  # type-check only
npm run watch      # recompile TS on save
npm run serve      # build and preview locally
```

## Deploy (Netlify)

`netlify.toml` is included: build command `npm run build`, publish directory `dist`.
