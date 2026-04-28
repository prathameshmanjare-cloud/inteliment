// Hand-crafted typography primitives, source of truth for all type values
// Referenced by typography-tokens.js and tailwind.config.js

export const typographyPrimitives = {
  // ── Font Families ────────────────────────────────────────────
  fontFamilyDisplay: '"Public Sans", sans-serif',
  fontFamilyBody:    '"DM Sans", sans-serif',
  fontFamilyMono:    '"JetBrains Mono", monospace',

  // ── Font Sizes (rem), Figma-synced ─────────────────────────
  fontSize10: '0.625rem',   // 10px
  fontSize12: '0.75rem',    // 12px , Figma: Typography/Label/S, Typography/Data/Small
  fontSize14: '0.875rem',   // 14px , Figma: Typography/Label/L, Typography/Body/S
  fontSize16: '1rem',       // 16px
  fontSize18: '1.125rem',   // 18px
  fontSize20: '1.25rem',    // 20px
  fontSize24: '1.5rem',     // 24px , Figma: Typography/Heading/H4
  fontSize28: '1.75rem',    // 28px , Figma: Typography/Heading/H3
  fontSize30: '1.875rem',   // 30px
  fontSize36: '2.25rem',    // 36px
  fontSize48: '3rem',       // 48px , Figma: Typography/Heading/H2
  fontSize56: '3.5rem',     // 56px , Figma: Typography/Display/L, Typography/Heading/H1
  fontSize60: '3.75rem',    // 60px
  fontSize64: '4rem',       // 64px , Figma: Typography/Display/XL
  fontSize72: '4.5rem',     // 72px

  // ── Font Weights ─────────────────────────────────────────────
  fontWeightLight:     300,
  fontWeightRegular:   400,
  fontWeightMedium:    500,
  fontWeightSemibold:  600,
  fontWeightBold:      700,
  fontWeightExtrabold: 800,

  // ── Line Heights ─────────────────────────────────────────────
  lineHeightTight:   '1.1',
  lineHeightSnug:    '1.2',
  lineHeightNormal:  '1.5',
  lineHeightRelaxed: '1.625',

  // ── Letter Spacing ───────────────────────────────────────────
  letterSpacingTighter: '-0.02em',
  letterSpacingTight:   '-0.015em',
  letterSpacingNormal:  '0em',
  letterSpacingWide:    '0.025em',
  letterSpacingWider:   '0.05em',
  letterSpacingWidest:  '0.1em',
}
