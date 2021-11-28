const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            'sora': 'Sora'
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            red: colors.rose,
            "primary": "#8d97a2",
            "secondary": "#6b7886",
            "heading-primary":"#595961",
            "app-primary": "#f8f8fa",
            "primary-hover" :"#7e8798",
            "btn-primary":"#555569",
            "btn-secondary": "#ecf5fa",
            white: colors.white,
            "gradient-blue-x": "#cae3ef",
            "gradient-blue-y": "#9ac2db",
            
        },
        fontSize: {
            sm:['10px', '20px'],
            base:['10px', '20px'],
            lg:['10px', '20px'],
            xl:['10px', '20px'],
            '10':'10px'
        }
    },
    variants: {
        extend: {
            padding: ['hover'],
            gradientColorStops: ['active', 'group-hover'],
            linearGradients: ['hover', 'responsive'],
        },
    },
    plugins: [],
};
