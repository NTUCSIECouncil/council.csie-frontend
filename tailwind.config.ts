import typography from '@tailwindcss/typography';
import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 'navbar': '#1c1c29',
        background: '#1c1c29',
        card: '#3a3b46',
        text: '#d4d2d5',
        'text-secondary': '#bbb9bd',
        // 'default': '#d4d2d5',
        // 'button': '#40465a'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [typography],
};
export default config;
