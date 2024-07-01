import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: 'var(--font-heading)',
        sans: 'var(--font-body)',
        body: 'var(--font-body)',
        mono: 'var(--font-body)',
      },
      colors: {
        Projects: '#D4A8EF',
        ProjectsDark: '#a986bf',
        About: '#93A4FF',
        Referrals: '#93FFC4',
        background: '#1E1E1E',
        'background-light': '#383838',
        eggshell: '#ECE9DD',
      },
      backgroundColor: {
        primary: '#1E1E1E'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
export default config
