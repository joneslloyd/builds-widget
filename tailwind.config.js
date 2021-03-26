const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: {
        mode: 'all',
        preserveHtmlElements: false,
        content: [
            './src/**/*.html',
            './src/**/*.vue',
            './src/**/*.jsx',
            './src/**/*.js',
        ],
        options: {
            keyframes: true,
        },
    },
    theme: {
        fontFamily: {
            sans: [
                'RobotoSlab',
                ...defaultTheme.fontFamily.sans,
            ],
        },
        extend: {
            lineHeight: {
                'line-4.5': '1.125',
            },
            colors: {
                mobalytics: {
                    light: 'hsl(253, 54%, 25%)',
                    DEFAULT: 'hsl(253, 54%, 15%)',
                },
                'widget-purple': {
                    light: 'hsl(248, 34%, 23%)',
                    DEFAULT: 'hsl(248, 37%, 20%)',
                    text: 'hsl(245, 14%, 47%)',
                },
                'widget-gold': {
                    light: 'hsl(41, 43%, 70%)',
                    DEFAULT: 'hsl(41, 43%, 55%)'
                },
                'widget-green': {
                    DEFAULT: 'hsl(165, 72%, 45%)'
                }
            },
        },
    },
    plugins: [],
}
