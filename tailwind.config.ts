import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: "class" ,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        mutedForeground: 'var(--muted-foreground)',

      },
      boxShadow: {
        dreamy: 'var(--shadow-dreamy)',
        magical: 'var(--shadow-magical)',
        glow: 'var(--shadow-glow)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
  
      },
      
      
    },
        
    
  },

  
};

export default config;
