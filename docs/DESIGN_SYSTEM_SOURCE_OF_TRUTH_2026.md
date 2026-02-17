# Schedulaa Marketing Design System - Source of Truth (2026)

This document defines the visual system for `www.schedulaa.com` (Next marketing app).  
Scope: marketing pages only. App product UX (`app.schedulaa.com`) is separate.

## 1) Typography Scale

- Font family: `Inter Tight` (`--font-inter-tight`)
- Heading scale:
  - `H1`: `--text-heading-1` (4rem, 110%)
  - `H2`: `--text-heading-2` (3rem, 120%)
  - `H3`: `--text-heading-3` (2.25rem, 120%)
  - `H4`: `--text-heading-4` (1.875rem, 130%)
  - `H5`: `--text-heading-5` (1.5rem, 140%)
  - `H6`: `--text-heading-6` (1.25rem, 140%)
- Body/copy:
  - default: `--text-tagline-1` (1rem, 150%)
  - compact/meta: `--text-tagline-2` (0.875rem, 150%)
  - micro: `--text-tagline-3` (0.75rem, 150%)

## 2) Button Variants and Usage

- Primary CTA: `btn btn-primary`
  - Use for one primary action per section.
- Secondary CTA: `btn btn-primary-v2` (or bordered variants)
  - Use for secondary actions (docs, compare, learn more).
- Dark surfaces:
  - Keep sufficient contrast; prefer existing `dark:*` utility classes.
- Rules:
  - Maximum 2 CTAs in a hero block.
  - Do not mix multiple primary buttons in same action group.

## 3) Card Styles

- Hero cards: `rounded-[24px]`, white/dark surface, shadow token (`shadow-2`).
- Content cards: `rounded-[20px]`, border `border-stroke-2` or `border-stroke-7` in dark mode.
- Spacing inside cards:
  - Base: `p-6`
  - Large/hero: `p-8` to `p-12` (responsive)

## 4) Section Spacing Rules

- Page top offset: `pt-44` (accounts for fixed navbar).
- Page bottom spacing: `pb-24`.
- Standard vertical rhythm between sections: `space-y-8` (implemented via `PageShell`).
- Dense sections can use `space-y-6` only when content is short and utility-focused.

## 5) Max Width and Container Rules

- Primary container: `main-container` + `px-5`.
- Max content width token: `--layout-container-max: 1220px`.
- Do not create ad-hoc page widths unless required for data tables or legal content.

## 6) Shadow and Border Radius Rules

- Shadow tokens come from `variables.css` (`--shadow-*`).
- Radius tokens:
  - Large surface: `--radius-card-lg` (24px)
  - Medium surface: `--radius-card-md` (20px)
  - Pill controls: `--radius-control-pill` (full)

## 7) Page Composition Contract

- Use `PageShell` (`src/components/shared/layout/PageShell.tsx`) for marketing pages.
- `PageShell` guarantees:
  - consistent background
  - consistent container width/padding
  - consistent vertical section spacing
  - optional page-header composition

## 8) Navigation and Footer Source of Truth

- Navbar IA must be data-driven from:
  - `src/data/navbar-data.ts`
- Footer IA must be data-driven from:
  - `src/data/footer-data.ts`
- Legacy IA is preserved:
  - Top-level: Product / Resources / Pricing
  - Footer Compare column includes full compare links.

## 9) Change Management Rules

- New pages must use `PageShell` unless there is a documented exception.
- New nav/footer links must be added in data files first, then consumed by components.
- Token changes must be made in `src/styles/variables.css` and reflected here.
