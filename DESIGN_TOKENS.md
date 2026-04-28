# Inteliment Design Tokens

A reference for designers and developers. These tokens drive every colour, font size, weight, and spacing decision across the Inteliment website.

---

## Quick Start

### Syncing colours from Figma

```bash
node scripts/figma-import.mjs <FIGMA_FILE_KEY> <FIGMA_PERSONAL_TOKEN>
```

- **FIGMA_FILE_KEY** — the string after `/file/` or `/design/` in your Figma URL  
  e.g. `https://www.figma.com/design/AbCdEf123456/Inteliment-Design` → key = `AbCdEf123456`
- **FIGMA_PERSONAL_TOKEN** — Figma → Account Settings → Personal Access Tokens  
  (Requires "File content" read scope; Variables scope on Enterprise plans)
- **Requires a paid Figma plan** (Professional or Enterprise). Variables must be published in the file.

After running the script, two files are regenerated:
- `src/tokens/color-primitives.js` — raw hex palette
- `src/tokens/color-tokens.js` — semantic aliases

Then run `npm run build` to verify nothing broke.

---

## Token File Map

| File | Purpose | Auto-generated? |
|------|---------|----------------|
| `src/tokens/color-primitives.js` | Raw hex colour palette | ✅ Figma script |
| `src/tokens/color-tokens.js` | Semantic colour aliases | ✅ Figma script |
| `src/tokens/typography-primitives.js` | Font sizes, weights, line-heights, letter-spacing | ❌ Hand-crafted |
| `src/tokens/typography-tokens.js` | Semantic type roles (display, body, label, code) | ❌ Hand-crafted |
| `src/tokens/index.js` | Barrel re-export of all four files | ❌ Static |

All four files are imported by `tailwind.config.js` — **do not** manually edit the auto-generated files.

---

## Colour Primitives

Raw palette values. Use these for direct scale references (`bg-navy-200`, `text-teal-300`).

### Navy

| Token | Tailwind Class | Hex |
|-------|---------------|-----|
| `navy-50` | `bg-navy-50` / `text-navy-50` | `#E8EEF4` |
| `navy-100` | `bg-navy-100` / `text-navy-100` | `#C5D3E0` |
| `navy-200` | `bg-navy-200` / `text-navy-200` | `#8FA8C0` |
| `navy-300` | `bg-navy-300` / `text-navy-300` | `#5A7DA0` |
| `navy-400` | `bg-navy-400` / `text-navy-400` | `#2D5380` |
| `navy-500` | `bg-navy-500` / `text-navy-500` | `#0A2540` — **PRIMARY BRAND** |
| `navy-600` | `bg-navy-600` / `text-navy-600` | `#081E33` |
| `navy-700` | `bg-navy-700` / `text-navy-700` | `#061626` |
| `navy-800` | `bg-navy-800` / `text-navy-800` | `#040F1A` |
| `navy-900` | `bg-navy-900` / `text-navy-900` | `#02070D` |

Shorthand alias: `navy` → `navy-500`. Use `bg-navy`, `text-navy` throughout.

### Teal

| Token | Tailwind Class | Hex |
|-------|---------------|-----|
| `teal-300` / `teal-light` | `text-teal-light` | `#48CAE4` |
| `teal-400` / `teal` | `text-teal` / `bg-teal` | `#00B4D8` — **ACCENT** |
| `teal-600` / `teal-dark` | `text-teal-dark` | `#0096C7` |

### Mint

| Token | Tailwind Class | Hex |
|-------|---------------|-----|
| `mint-300` / `mint-light` | `text-mint-light` | `#52EFD0` |
| `mint-400` / `mint` | `text-mint` / `bg-mint` | `#00D4AA` — **SECONDARY ACCENT** |
| `mint-600` / `mint-dark` | `text-mint-dark` | `#00B892` |

### Neutrals

| Token | Tailwind Class | Hex |
|-------|---------------|-----|
| `neutral-0` | — | `#FFFFFF` |
| `neutral-50` / `surface` | `bg-surface` | `#F8FAFC` — **LIGHT PAGE BACKGROUND** |
| `neutral-100` | `bg-neutral-100` | `#E2E8F0` |
| `neutral-200` | `bg-neutral-200` | `#CBD5E1` |
| `neutral-300` | `text-neutral-300` | `#94A3B8` |
| `neutral-400` | `text-neutral-400` | `#64748B` |
| `neutral-500` | `text-neutral-500` | `#475569` |
| `neutral-600` | `text-neutral-600` | `#334155` |
| `neutral-700` | `text-neutral-700` | `#1E293B` |
| `neutral-800` | `text-neutral-800` | `#0F172A` |
| `neutral-900` | `text-neutral-900` | `#020617` |

### Status

| Token | Tailwind Class | Hex | Usage |
|-------|---------------|-----|-------|
| `status-error` | `text-status-error` | `#E63946` | Errors, validation |
| `status-success` | `text-status-success` | `#10B981` | Success states |
| `status-warning` | `text-status-warning` | `#F59E0B` | Warnings |
| `status-info` | `text-status-info` | `#00B4D8` | Informational |

---

## Colour Tokens (Semantic)

Semantic aliases that map design intent to primitives. After a Figma sync these are regenerated to match your Figma Variable structure. Pre-sync fallbacks shown below.

| Token | Resolves To | Usage |
|-------|------------|-------|
| `color-bg-default` | `neutral-0` | Page / modal backgrounds |
| `color-bg-surface` | `neutral-50` | Card, panel backgrounds |
| `color-bg-muted` | `neutral-100` | Subtle backgrounds, dividers |
| `color-bg-brand` | `navy-500` | Brand/hero dark sections |
| `color-bg-brand-dark` | `navy-800` | Deepest dark sections |
| `color-brand-primary` | `navy-500` | Primary brand identifier |
| `color-brand-teal` | `teal-400` | Primary accent |
| `color-brand-teal-light` | `teal-300` | Hover states |
| `color-brand-teal-dark` | `teal-600` | Active / pressed states |
| `color-brand-mint` | `mint-400` | Secondary accent |
| `color-text-primary` | `neutral-700` | Main body text on light bg |
| `color-text-secondary` | `neutral-400` | Supporting text |
| `color-text-muted` | `neutral-300` | Disabled / placeholder text |
| `color-text-inverse` | `neutral-0` | Text on dark backgrounds |
| `color-text-brand` | `navy-500` | Brand-coloured text |
| `color-text-accent` | `teal-400` | Accent / link text |
| `color-border-default` | `neutral-200` | Standard borders |
| `color-border-muted` | `neutral-100` | Subtle borders |
| `color-border-brand` | `teal-400` | Highlighted / active borders |

---

## Typography

### Fonts in Use

| Role | Family | Source |
|------|--------|--------|
| Display / Headlines | **Public Sans** | Google Fonts — variable weight `100..900` |
| Body / UI Text | **DM Sans** | Google Fonts — weights 300, 400, 500, 600 |
| Code / Mono | **JetBrains Mono** | Google Fonts — weights 400, 500 |

Apply via Tailwind: `font-display`, `font-body`, `font-mono`

---

### Typography Primitives

#### Font Sizes

| Token | Value | Pixels |
|-------|-------|--------|
| `fontSize10` | `0.625rem` | 10px |
| `fontSize12` | `0.75rem` | 12px |
| `fontSize14` | `0.875rem` | 14px |
| `fontSize16` | `1rem` | 16px |
| `fontSize18` | `1.125rem` | 18px |
| `fontSize20` | `1.25rem` | 20px |
| `fontSize24` | `1.5rem` | 24px |
| `fontSize30` | `1.875rem` | 30px |
| `fontSize36` | `2.25rem` | 36px |
| `fontSize48` | `3rem` | 48px |
| `fontSize60` | `3.75rem` | 60px |
| `fontSize72` | `4.5rem` | 72px |

#### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `fontWeightLight` | 300 | Light body copy |
| `fontWeightRegular` | 400 | Default body text |
| `fontWeightMedium` | 500 | Slightly emphasised text |
| `fontWeightSemibold` | 600 | Labels, captions, nav |
| `fontWeightBold` | 700 | Headings, CTAs |
| `fontWeightExtrabold` | 800 | Hero display titles |

#### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `lineHeightTight` | 1.1 | Large display headings |
| `lineHeightSnug` | 1.2 | Mid-size headings |
| `lineHeightNormal` | 1.5 | Labels, short text |
| `lineHeightRelaxed` | 1.625 | Body paragraphs |

#### Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `letterSpacingTighter` | -0.02em | Largest display text |
| `letterSpacingTight` | -0.015em | Large headings |
| `letterSpacingNormal` | 0em | Default |
| `letterSpacingWide` | 0.025em | Labels, small caps |
| `letterSpacingWider` | 0.05em | All-caps eyebrows |
| `letterSpacingWidest` | 0.1em | Micro labels, badges |

---

### Typography Tokens (Semantic)

These map directly to Tailwind `text-*` classes.

#### Display — Public Sans Bold

Use for hero headings, page titles, major section headings.

| Tailwind Class | Size | Line Height | Letter Spacing |
|----------------|------|------------|----------------|
| `text-display-2xl` | 72px | 1.1 | -0.02em |
| `text-display-xl` | 60px | 1.1 | -0.02em |
| `text-display-lg` | 48px | 1.1 | -0.015em |
| `text-display-md` | 36px | 1.2 | -0.015em |
| `text-display-sm` | 30px | 1.2 | 0em |

#### Body — DM Sans Regular

Use for paragraphs, descriptions, UI copy.

| Tailwind Class | Size | Line Height |
|----------------|------|------------|
| `text-body-xl` | 20px | 1.625 |
| `text-body-lg` | 18px | 1.625 |
| `text-body-md` | 16px | 1.5 |
| `text-body-sm` | 14px | 1.5 |
| `text-body-xs` | 12px | 1.5 |

#### Label — Public Sans Semibold / Bold

Use for eyebrows, tags, badges, navigation items, table headers, form labels.

| Tailwind Class | Size | Line Height | Letter Spacing |
|----------------|------|------------|----------------|
| `text-label-lg` | 16px | 1.5 | 0em |
| `text-label-md` | 14px | 1.5 | 0em |
| `text-label-sm` | 12px | 1.5 | 0.025em |
| `text-label-xs` | 10px | 1.5 | 0.1em |

#### Code — JetBrains Mono

Use for code snippets, technical identifiers, terminal outputs.

| Tailwind Class | Size | Line Height |
|----------------|------|------------|
| `text-code-md` | 14px | 1.5 |
| `text-code-sm` | 12px | 1.5 |

---

## Usage in Code

### Headlines
```jsx
// Hero title
<h1 className="font-display font-bold text-display-xl text-white">
  Intelligence. Engineered.
</h1>

// Section heading
<h2 className="font-display font-bold text-display-md text-navy">
  Every layer of AI your enterprise needs.
</h2>
```

### Body Copy
```jsx
// Paragraph
<p className="font-body text-body-md text-slate-600 leading-relaxed">
  Production-grade AI that drives decisions.
</p>

// Small helper text
<p className="font-body text-body-xs text-neutral-400">
  100+ enterprise clients across 12 industries
</p>
```

### Labels & Eyebrows
```jsx
// Section eyebrow
<span className="font-display font-bold text-label-xs uppercase tracking-widest text-teal">
  AI Solutions
</span>

// Tag / badge
<span className="font-display font-semibold text-label-sm text-teal bg-teal/10 px-2 py-0.5 rounded-full">
  RAG
</span>
```

### Colour Usage
```jsx
// Brand dark section
<section className="bg-navy">...</section>

// Light surface section
<section className="bg-surface">...</section>

// Accent text
<span className="text-teal">Explore →</span>

// Semantic token (after Figma sync)
<p className="text-[--color-text-secondary]">Supporting text</p>
```

---

## Update Workflow

### When Figma colours change

1. Open terminal at the project root
2. Run: `node scripts/figma-import.mjs <FILE_KEY> <PERSONAL_TOKEN>`
3. Review the diff in `src/tokens/color-primitives.js` and `src/tokens/color-tokens.js`
4. Run `npm run build` — verify no errors
5. `git add src/tokens/color-primitives.js src/tokens/color-tokens.js`
6. `git commit -m "chore: sync design tokens from Figma"`

### When typography changes

Edit `src/tokens/typography-primitives.js` directly — then update `typography-tokens.js` if semantic mappings change. Run `npm run build` to verify.

### When adding a new semantic colour token

1. Add the mapping to `src/tokens/color-tokens.js` (or let the Figma import script handle it)
2. Use it in components via the generated Tailwind class, or as a CSS custom property

---

## Figma Variable Naming Convention

For the import script to correctly map Figma variables to token keys:

- **Primitives** should follow: `Colors/<group>/<scale>` — e.g. `Colors/Teal/400`, `Colors/Navy/500`
- **Tokens** (aliases) should follow: `color/<role>/<variant>` — e.g. `color/bg/default`, `color/text/primary`

The script normalises names: strips the leading `color(s)/` prefix, replaces `/` and spaces with `-`, lowercases everything.

---

*Last updated: April 2026 — Inteliment Technologies*
