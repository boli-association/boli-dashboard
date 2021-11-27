const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            red: colors.rose,
            "primary": "#e6e8ec",
            "bg-primary": "#f8f8fa",
            "primary-hover" :"#7e8798"
        },
        fontSize: {
            sm:['10px', '20px'],
            base:['10px', '20px'],
            lg:['10px', '20px'],
            xl:['10px', '20px'],
            '10':'10px'
        },
        variants: {
            extend: {
                padding: ['hover'],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
