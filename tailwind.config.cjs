/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        'mona-sans': ['"Mona Sans"'],
      },
      colors: {
        'rural-black': '#070A09',
        'rural-blue': '#1D3557',
        'rural-green': '#386154',
        'rural-green-hard': '#274038',
        'rural-yellow': '#F2DB96',
        'rural-red': '#B94A65',
        'rural-white': '#ECFFEB',
        'rural-sky': '#A8DADC'      
      },
    },
	},
	plugins: [],
}
