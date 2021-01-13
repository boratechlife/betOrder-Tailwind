const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", ...defaultTheme.fontFamily.sans],
                title: ["Montserrat", ...defaultTheme.fontFamily.sans]
            },

            fontSize: {
                large: '2.5rem',
            },
            colors: {
                primary: '#1ab7ea',
                grayish: '#f7f9fb',
                'dark': '#262f3c'


            },

        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tailwindcss-elevation')(['responsive']),
        require('@tailwindcss/custom-forms'),
    ],
}