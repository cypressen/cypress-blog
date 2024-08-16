/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#93c5fd',

          'primary-content': '#374151',

          secondary: '#c7d2fe',

          'secondary-content': '#0369a1',

          accent: '#e5e7eb',

          'accent-content': '#0369a1',

          neutral: '#bfdbfe',

          'neutral-content': '#78716c',

          'base-100': '#e7e5e4',

          'base-200': '#d1d5db',

          'base-300': '#9ca3af',

          'base-content': '#374151',

          info: '#3b82f6',

          'info-content': '#f3f4f6',

          success: '#6ee7b7',

          'success-content': '#f3f4f6',

          warning: '#c7d2fe',

          'warning-content': '#e11d48',

          error: '#dc2626',

          'error-content': '#f3f4f6',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
