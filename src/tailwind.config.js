/** @type {import('tailwindcss').Config} */

// helper so colors support `/opacity` like bg-background/50
const withOpacity = (variable) => ({ opacityValue }) =>
  opacityValue !== undefined
    ? `hsl(var(${variable}) / ${opacityValue})`
    : `hsl(var(${variable}))`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'], // optional: use `.dark` on <html> to toggle
  theme: {
    extend: {
      colors: {
        background: withOpacity('--background'),
        foreground: withOpacity('--foreground'),
        card: withOpacity('--card'),
        'card-foreground': withOpacity('--card-foreground'),
        popover: withOpacity('--popover'),
        'popover-foreground': withOpacity('--popover-foreground'),
        primary: withOpacity('--primary'),
        'primary-foreground': withOpacity('--primary-foreground'),
        secondary: withOpacity('--secondary'),
        'secondary-foreground': withOpacity('--secondary-foreground'),
        muted: withOpacity('--muted'),
        'muted-foreground': withOpacity('--muted-foreground'),
        accent: withOpacity('--accent'),
        'accent-foreground': withOpacity('--accent-foreground'),
        destructive: withOpacity('--destructive'),
        'destructive-foreground': withOpacity('--destructive-foreground'),
        border: withOpacity('--border'),
        input: withOpacity('--input'),
        ring: withOpacity('--ring'),
      },
      borderRadius: {
        lg: '0.75rem',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.35)',
        soft: '0 24px 60px rgba(0,0,0,.5)',
      },
      maxWidth: {
        wrapper: '1100px', // used by max-w-wrapper
      },
    },
  },
  plugins: [],
};
