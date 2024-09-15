/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'highlight-img': "url('/src/assets/images/nft_highlight.png')",
        'artist-img': "url('/src/assets/images/artist_bg-img.png')",
      },
      fontFamily: {
        monospace: ['Space Mono', 'sans-serif'],
        worksans: ['Work Sans', 'sans-serif'],
      },
      colors: {
        primary: ' #2b2b2b',
        secondary: ' #3b3b3b',
        cta: ' #a259ff',
        'caption--label-text': ' #858584',
        celeste: ' #cccccc',
        jade: ' #00ac4f',
        masala: ' #3b3b3b80',
      },
    },
  },
  plugins: [],
};
