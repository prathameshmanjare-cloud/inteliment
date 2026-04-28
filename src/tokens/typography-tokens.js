// Semantic typography tokens, maps design roles to primitive values
// These become Tailwind fontSize entries (e.g. `text-display-md`, `text-body-lg`)

import { typographyPrimitives as p } from './typography-primitives.js'

export const typographyTokens = {
  // ── Display, Public Sans Bold ────────────────────────────────
  // Used for hero headings and major section titles
  'display-2xl': [p.fontSize72, { lineHeight: p.lineHeightTight,  letterSpacing: p.letterSpacingTighter }],
  'display-xl':  [p.fontSize60, { lineHeight: p.lineHeightTight,  letterSpacing: p.letterSpacingTighter }],
  'display-lg':  [p.fontSize48, { lineHeight: p.lineHeightTight,  letterSpacing: p.letterSpacingTight   }],
  'display-md':  [p.fontSize36, { lineHeight: p.lineHeightSnug,   letterSpacing: p.letterSpacingTight   }],
  'display-sm':  [p.fontSize30, { lineHeight: p.lineHeightSnug,   letterSpacing: p.letterSpacingNormal  }],

  // ── Body, DM Sans Regular ────────────────────────────────────
  // Used for paragraphs, descriptions, and UI text
  'body-xl': [p.fontSize20, { lineHeight: p.lineHeightRelaxed }],
  'body-lg': [p.fontSize18, { lineHeight: p.lineHeightRelaxed }],
  'body-md': [p.fontSize16, { lineHeight: p.lineHeightNormal  }],
  'body-sm': [p.fontSize14, { lineHeight: p.lineHeightNormal  }],
  'body-xs': [p.fontSize12, { lineHeight: p.lineHeightNormal  }],

  // ── Label, Public Sans Semibold/Bold ─────────────────────────
  // Used for eyebrows, tags, badges, navigation items, and captions
  'label-lg': [p.fontSize16, { lineHeight: p.lineHeightNormal, letterSpacing: p.letterSpacingNormal }],
  'label-md': [p.fontSize14, { lineHeight: p.lineHeightNormal, letterSpacing: p.letterSpacingNormal }],
  'label-sm': [p.fontSize12, { lineHeight: p.lineHeightNormal, letterSpacing: p.letterSpacingWide   }],
  'label-xs': [p.fontSize10, { lineHeight: p.lineHeightNormal, letterSpacing: p.letterSpacingWidest }],

  // ── Code, JetBrains Mono ─────────────────────────────────────
  // Used for code snippets, technical identifiers
  'code-md': [p.fontSize14, { lineHeight: p.lineHeightNormal }],
  'code-sm': [p.fontSize12, { lineHeight: p.lineHeightNormal }],
}
