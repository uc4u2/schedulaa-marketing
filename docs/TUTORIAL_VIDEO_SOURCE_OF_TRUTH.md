# Tutorial Video Source of Truth

## Purpose
This system adds compact, product-specific tutorial callouts to the Schedulaa marketing site without turning feature pages into large video libraries.

Use it to:
- show short outcome-focused walkthroughs near the relevant product area
- keep one source of truth for tutorial titles, purposes, and YouTube links
- allow placeholder topics before videos are recorded
- avoid page clutter from large always-visible embeds

## Current design
The tutorial system is intentionally lightweight.

It uses:
- one catalog file for tutorial data
- one reusable panel component for rendering
- optional placement on any marketing page

The default UX is:
- one featured tutorial with a primary button
- an optional collapsible list for additional tutorials
- external YouTube open in a new tab
- no large inline player by default

This keeps the pages clean while still making tutorial content easy to find.

## Source of truth files
Data catalog:
- `src/data/tutorials/tutorialCatalog.ts`

Reusable UI:
- `src/components/tutorials/ProductTutorialPanel.tsx`

Current live placement:
- `src/components/business-finance/BusinessFinanceLandingPage.tsx`

## Data shape
Each module entry in `tutorialCatalog.ts` should define:
- `key`: stable module identifier
- `badge`: short label shown above the section
- `title`: section title
- `summary`: why these tutorials exist and what they help with
- `featuredKey`: which item should be highlighted first
- `items[]`: tutorial list

Each tutorial item should define:
- `key`: stable item identifier
- `title`: public tutorial title
- `purpose`: what the viewer will learn and why it matters
- `youtubeUrl`: YouTube link when available, or `null` when pending
- `durationLabel`: optional short label like `Short tutorial`

## How to add a new tutorial later
1. Open `src/data/tutorials/tutorialCatalog.ts`
2. Find the correct module, or add a new module
3. Add a new item with:
   - clear title
   - clear purpose
   - YouTube URL if available
4. If the new video should be primary, update `featuredKey`
5. If the tutorial should appear on a new page, import and render `ProductTutorialPanel` on that page
6. Run build before push

## Placement guidance
Add tutorial panels only to high-intent product pages.

Good placements:
- Business Finance
- Payroll
- Workforce
- Website Builder

Do not place tutorial panels on every block.
Use one compact panel per major product page or major workflow section.

## Content rules
Tutorial titles should be action-oriented.
Good examples:
- `How to Turn an Estimate Into a Paid Job in Schedulaa`
- `How to Create a Work Order and Assign Your Team`
- `How Payroll-Ready Handoff Works in Schedulaa`

Purpose text should explain:
- what the tutorial demonstrates
- why the workflow matters to a manager or operator

Avoid vague titles like:
- `Demo 1`
- `Video about finance`

## Why this design
This system is designed to support growth without making the marketing pages messy.

We are not building:
- a large academy page on every feature route
- giant embedded players across the site
- a separate content system for tutorials

We are building:
- one reusable tutorial pattern
- one easy place to add or update links
- one clean way to expand later when more videos exist

## Current rollout plan
Phase 1:
- Business Finance tutorial panel
- one live YouTube tutorial
- several placeholder topics for future videos

Phase 2:
- add Payroll tutorial panel
- add Workforce tutorial panel
- add Website Builder tutorial panel

Phase 3:
- if tutorial volume grows, add a dedicated tutorial hub or grouped index page
