# ⚠️ Placeholder design-system layer

This folder is a **stand-in**, not the real design system.

The task required reusing these existing components verbatim:

- `src/components/shell/LeftNav.tsx`
- `src/components/FusionShell/index.tsx`
- `NumericBadge` from `@ids-web` / `ids-web/components/Badge`
- `TextField` from `@ids-ts/text-field`
- `IconButton` from `components/icon-button/IconButton.tsx`
- icon components: star / star-fill / sliders-v / checkmark / chevron-down

No local checkout of that repository was found on this machine (no git
repositories under the home directory), so none of the above could be
imported or even confirmed to exist as currently written. Per the task's own
instructions ("if any of these don't exist in this repo, tell me before
proceeding instead of fabricating a substitute"), this was flagged before
building — the user asked to proceed anyway using a stand-in so the flow
could be prototyped now.

Every component in this folder:
- matches the **prop shape** implied by the Figma Code Connect snippets
  (e.g. `TextField` takes `placeholder`, `size`; `NumericBadge` takes `text`,
  `status`)
- uses **only** the CSS custom properties in `src/tokens.css`, each of which
  is traced to a named Figma variable
- is named identically to the real component so that swapping the import
  path is the only change needed to wire this prototype up to the real
  design system once its location is known
