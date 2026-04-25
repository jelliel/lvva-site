# LVVA Static Site Design

## Goal

Build a static first version of `LaVeritéVousAffranchira - LVVA`, an inter-religious comparison site with a strongly Roman Catholic visual identity and a practical library for downloadable dossiers and references.

## Visual Direction

Use a hybrid of:

- Roman basilica identity: cardinal red, old gold, deep ink, stone/ivory surfaces, arch motifs, formal serif typography.
- Patristic library structure: readable source cards, clear document categories, references grouped by tradition and theme.

The page should feel solemn, Roman, learned, and navigable. The Catholic identity is visible in the first viewport, while comparison content remains respectful and structured for visitors from Islam, Catholicism, Protestantism, and Kamite traditions.

## Scope

The first version is a static site:

- Homepage hero with title, mission, and clear calls to action.
- Navigation for accueil, traditions, dossiers, références, méthode, contact.
- Tradition comparison section covering Islam, Catholicisme romain, Protestantisme, and tradition Kamite as research areas.
- Download library with starter dossiers.
- Reference section for source categories.
- Contact section using a mail link.
- Responsive layout for desktop and mobile.
- Small JavaScript enhancement for filtering/searching dossier cards.

## Files

- `index.html`: semantic page structure and content.
- `assets/css/styles.css`: full visual system and responsive styling.
- `assets/js/main.js`: dossier search/filter behavior.
- `dossiers/*.md`: downloadable starter dossier files.
- `docs/superpowers/plans/2026-04-25-lvva-static-site.md`: implementation plan.

## Non-Goals

- No admin dashboard in the first version.
- No backend, database, user accounts, comments, payments, or file upload workflow.
- No claims that unsourced content is definitive doctrine. The starter dossiers are working templates and reference guides.

## Verification

- Open the static site locally.
- Confirm main navigation anchors work.
- Confirm dossier download links resolve.
- Confirm search/filter UI works without console errors.
- Check responsive behavior at desktop and narrow widths.
