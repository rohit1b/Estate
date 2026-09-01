# Rohitrise Realty — React Frontend

A React + Vite + Tailwind CSS clone/redesign of the Rohitrise Realty website, using static data (no backend/API).

## Run it in VS Code

1. Unzip this folder and open it in VS Code (`File > Open Folder`).
2. Open the built-in terminal: `Terminal > New Terminal`.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the dev server:
   ```
   npm run dev
   ```
5. Open the URL shown in the terminal (usually `http://localhost:5173`).

## Project structure

```
src/
  components/   -> one file per page section (Navbar, Hero, Properties, ...)
  data/         -> static data (properties.js, content.js) — edit these to change site content
  App.jsx       -> assembles all sections in order
  index.css     -> Tailwind + global styles
tailwind.config.js -> color palette & fonts (navy, gold, ivory)
```

## Editing content

All text/images are in `src/data/properties.js` and `src/data/content.js` — no need to touch component code to change listings, testimonials, locations, etc.

## Build for production

```
npm run build
```
Output goes to the `dist/` folder.
