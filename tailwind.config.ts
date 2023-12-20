import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        't-gray-500': '#737994',
        't-blue-500': '#8caaee',
        't-blue-900': '#303446'
      },
      width: {
        120: '30rem',
        125: '31.25rem'
      },
      height: {
        125: '31.25rem'
      }
    },
  },
  plugins: [],
}
export default config
