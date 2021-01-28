const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", ...defaultTheme.fontFamily.sans],

            },

            fontSize: {
                large: '2.5rem',
            },
            colors: {
                primary: '#116466',
                secondary: '#E94349',
                black: '#19181A',
                'yellow': '#FFA805',
                'dark': '#252429',
                'grey': '#b3b3b3',
                'darker': '#1d1d20'

            },

        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        // require('tailwindcss-elevation')(['responsive']),
        require('@tailwindcss/custom-forms'),
    ],
}