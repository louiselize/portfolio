/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      backgroundColor: {
        'salmon-200': '#FFA07A', // Exemple de couleur saumon (#FFA07A)
        'peach-200': '#FFDAB9',  // Exemple de couleur pêche (#FFDAB9)
        'coral-200': '#FF6B6B', // Couleur corail (#FF6B6B)
        'palette-blue': '#1a4d55',
        'palette-blue-100' : '#3b8d95',
        'palette-green' : '#5ea482',
        'palette-light' : '#bfd8d7',
        'palette-light-100' : '#FBF8ED',
        'palette-light-200' : '#f2f5f0',
        

      },
      textColor:{
        'palette-blue': '#1a4d55',
        'palette-green' : '#5ea482',
        'palette-light' : '#e7f2dd',
        'palette-light-100' : '#FBF8ED',
        'palette-blue-100' : '#3b8d95',
        'palette-light-200' : '#f2f5f0',

      }
    },
  },
  plugins: [],
  
}
