/** @type {import('tailwindcss').Config} */
import { colorPrimitives } from './src/tokens/color-primitives.js'
import { colorTokens }     from './src/tokens/color-tokens.js'
import { typographyPrimitives as tp } from './src/tokens/typography-primitives.js'
import { typographyTokens }           from './src/tokens/typography-tokens.js'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        slate: { 950: '#0a0e1a' },
        accent: {
          50: '#e8f4ff', 100: '#d4ecff', 200: '#b0daff', 300: '#7ac0ff',
          400: '#4aa3ff', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
        },
        ice: { 50: '#f0f7ff', 100: '#e0efff', 200: '#c7e2ff' },
        // Full primitive palette
        ...colorPrimitives,
        // Semantic tokens
        ...colorTokens,

        // ── Named shorthands (used throughout all component JSX) ──────────
        // navy → deep dark scale; DEFAULT = dark-800 for consistent dark sections
        navy: {
          DEFAULT: colorPrimitives['dark-800'],  // #1C2127 — primary dark bg
          50:  colorPrimitives['dark-50'],
          100: colorPrimitives['dark-100'],
          200: colorPrimitives['dark-200'],
          300: colorPrimitives['dark-300'],
          400: colorPrimitives['dark-400'],
          500: colorPrimitives['dark-500'],       // #4C5664 — brand-logo-dark mid-tone
          600: colorPrimitives['dark-600'],
          700: colorPrimitives['dark-700'],       // #2B323C — mesh/hero base
          800: colorPrimitives['dark-800'],       // #1C2127 — standard dark section
          900: colorPrimitives['dark-900'],       // #0E1115 — footer
        },
        // teal → brand-blue (#5BA3D1) + Figma light tint + derived dark
        teal: {
          DEFAULT: colorPrimitives['brand-blue'],
          light:   colorPrimitives['light-shades-2-blue'],
          dark:    colorPrimitives['brand-blue-dark'],
        },
        // mint → brand-dark-green (#51B198) + Figma light tint + derived dark
        mint: {
          DEFAULT: colorPrimitives['brand-dark-green'],
          light:   colorPrimitives['light-shades-dark-green'],
          dark:    colorPrimitives['brand-dark-green-dark'],
        },
        // orange → brand-orange + full Figma orange scale
        orange: {
          DEFAULT: colorPrimitives['brand-orange'],
          50:  colorPrimitives['orange-50'],
          100: colorPrimitives['orange-100'],
          200: colorPrimitives['orange-200'],
          300: colorPrimitives['orange-300'],
          400: colorPrimitives['orange-400'],
          500: colorPrimitives['orange-500'],
          600: colorPrimitives['orange-600'],
          700: colorPrimitives['orange-700'],
          800: colorPrimitives['orange-800'],
          900: colorPrimitives['orange-900'],
        },
        // Figma full colour scales — available as bg-blue-500, text-green-300, etc.
        blue: {
          50:  colorPrimitives['blue-50'],
          100: colorPrimitives['blue-100'],
          200: colorPrimitives['blue-200'],
          300: colorPrimitives['blue-300'],
          400: colorPrimitives['blue-400'],
          500: colorPrimitives['blue-500'],
          600: colorPrimitives['blue-600'],
          700: colorPrimitives['blue-700'],
          800: colorPrimitives['blue-800'],
          900: colorPrimitives['blue-900'],
        },
        green: {
          50:  colorPrimitives['green-50'],
          100: colorPrimitives['green-100'],
          200: colorPrimitives['green-200'],
          300: colorPrimitives['green-300'],
          400: colorPrimitives['green-400'],
          500: colorPrimitives['green-500'],
          600: colorPrimitives['green-600'],
          700: colorPrimitives['green-700'],
          800: colorPrimitives['green-800'],
          900: colorPrimitives['green-900'],
        },
        red: {
          50:  colorPrimitives['red-50'],
          100: colorPrimitives['red-100'],
          200: colorPrimitives['red-200'],
          300: colorPrimitives['red-300'],
          400: colorPrimitives['red-400'],
          500: colorPrimitives['red-500'],
          600: colorPrimitives['red-600'],
          700: colorPrimitives['red-700'],
          800: colorPrimitives['red-800'],
          900: colorPrimitives['red-900'],
        },
        yellow: {
          50:  colorPrimitives['yellow-50'],
          100: colorPrimitives['yellow-100'],
          200: colorPrimitives['yellow-200'],
          300: colorPrimitives['yellow-300'],
          400: colorPrimitives['yellow-400'],
          500: colorPrimitives['yellow-500'],
          600: colorPrimitives['yellow-600'],
          700: colorPrimitives['yellow-700'],
          800: colorPrimitives['yellow-800'],
          900: colorPrimitives['yellow-900'],
        },
        grey: {
          50:  colorPrimitives['grey-50'],
          100: colorPrimitives['grey-100'],
          200: colorPrimitives['grey-200'],
          300: colorPrimitives['grey-300'],
          400: colorPrimitives['grey-400'],
          500: colorPrimitives['grey-500'],
          600: colorPrimitives['grey-600'],
          700: colorPrimitives['grey-700'],
          900: colorPrimitives['grey-900'],
        },
        'light-green': {
          50:  colorPrimitives['light-green-50'],
          100: colorPrimitives['light-green-100'],
          200: colorPrimitives['light-green-200'],
          300: colorPrimitives['light-green-300'],
          400: colorPrimitives['light-green-400'],
          500: colorPrimitives['light-green-500'],
          600: colorPrimitives['light-green-600'],
          700: colorPrimitives['light-green-700'],
          800: colorPrimitives['light-green-800'],
          900: colorPrimitives['light-green-900'],
        },
        surface: colorPrimitives['neutral-50'],
      },

      fontFamily: {
        display: [tp.fontFamilyDisplay],
        body:    [tp.fontFamilyBody],
        mono:    [tp.fontFamilyMono],
      },

      fontSize: typographyTokens,

      backgroundImage: {
        // teal → brand-blue, mint → brand-dark-green
        'gradient-teal': 'linear-gradient(135deg, #5BA3D1 0%, #51B198 100%)',
        // hero uses dark-800 → dark-700 → dark-800
        'gradient-hero': 'linear-gradient(135deg, #1C2127 0%, #2B323C 50%, #1C2127 100%)',
        // CTA: dark-700 → brand-blue → brand-dark-green
        'gradient-cta':  'linear-gradient(135deg, #2B323C 0%, #5BA3D1 50%, #51B198 100%)',
      },

      boxShadow: {
        // rgba updated to match brand-blue (91, 163, 209) and brand-dark-green (81, 177, 152)
        'glow-teal':  '0 0 20px rgba(91, 163, 209, 0.4), 0 0 60px rgba(91, 163, 209, 0.1)',
        'glow-mint':  '0 0 20px rgba(81, 177, 152, 0.4), 0 0 60px rgba(81, 177, 152, 0.1)',
        glass:        '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(91, 163, 209, 0.15)',
      },

      animation: {
        sparkle: 'sparkle 2s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        float:            'float 6s ease-in-out infinite',
        'data-flow':      'dataFlow 3s linear infinite',
        'glow-pulse':     'glowPulse 2.5s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        marquee:          'marquee 35s linear infinite',
        'marquee-reverse':'marqueeReverse 38s linear infinite',
      },

      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float:          { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        dataFlow:       { '0%': { strokeDashoffset: '200' }, '100%': { strokeDashoffset: '0' } },
        glowPulse:      { '0%, 100%': { boxShadow: '0 0 20px rgba(91, 163, 209, 0.2)' }, '50%': { boxShadow: '0 0 40px rgba(91, 163, 209, 0.6)' } },
        gradientShift:  { '0%, 100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        marquee:        { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
        marqueeReverse: { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0%)' } },
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities, addComponents, theme }) {
      addComponents({
        '.pill-badge': {
          'display': 'inline-flex',
          'align-items': 'center',
          'padding': `${theme('spacing.1')} ${theme('spacing.4')}`,
          'border-radius': theme('borderRadius.full'),
          'font-size': theme('fontSize.sm'),
          'font-weight': theme('fontWeight.medium'),
          'letter-spacing': theme('letterSpacing.wide'),
        },
        '.pill-badge-outlined': {
          'border': '1px solid rgba(59, 130, 246, 0.4)',
          'color': theme('colors.accent.400'),
          'background': 'rgba(59, 130, 246, 0.08)',
        },
        '.pill-badge-filled': {
          'background': 'rgba(59, 130, 246, 0.15)',
          'color': theme('colors.accent.400'),
        },
      });
      addUtilities({
        '.text-gradient': {
          'background': 'linear-gradient(135deg, #3b82f6, #7ac0ff)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.glow-border': {
          'box-shadow': '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)',
          'border': '1px solid rgba(59, 130, 246, 0.4)',
        },
        '.glow-border-strong': {
          'box-shadow': '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.15)',
          'border': '1px solid rgba(59, 130, 246, 0.6)',
        },
        '.glass': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        // nav-scrolled — grey-900 (#1F1F1F)
        '.nav-scrolled': {
          background: '#1F1F1F',
          backdropFilter: 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
        },
        // glass-dark background updated to dark-700 rgba (44, 50, 60)
        '.glass-dark': {
          background: 'rgba(44, 50, 60, 0.7)',
          backdropFilter: 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
          border: '1px solid rgba(91, 163, 209, 0.2)',
        },
        '.glass-light': {
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          border: '1px solid rgba(0, 0, 0, 0.06)',
        },
        // gradient text updated to new brand colours
        '.text-gradient-teal':  { background: 'linear-gradient(135deg, #5BA3D1, #51B198)', '-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent', backgroundClip: 'text' },
        '.text-gradient-white': { background: 'linear-gradient(135deg, #ffffff, #ADD1E8)', '-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent', backgroundClip: 'text' },
        '.text-gradient-brand': { background: 'linear-gradient(135deg, #4C5664, #5BA3D1)', '-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent', backgroundClip: 'text' },
        '.clip-hero':         { clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)' },
        '.clip-hero-reverse': { clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)' },
        '.scrollbar-hide':    { '-ms-overflow-style': 'none', 'scrollbar-width': 'none' },
      })
    },
  ],
}
