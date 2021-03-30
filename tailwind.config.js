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
                    lightest: 'hsl(238, 24%, 76%)',
                    light: 'hsl(248, 34%, 23%)',
                    DEFAULT: 'hsl(248, 37%, 20%)',
                    border: 'hsl(250, 37%, 29%)',
                    text: 'hsl(245, 14%, 47%)',
                },
                'widget-gold': {
                    light: 'hsl(41, 43%, 70%)',
                    DEFAULT: 'hsl(41, 43%, 55%)',
                    'outer-line': 'hsla(40, 47%, 62%, 0.4)',
                },
                'widget-green': {
                    DEFAULT: 'hsl(165, 72%, 45%)'
                },
                'widget-white': {
                    line: 'hsla(0, 0%, 100%, 0.05)'
                },
                'widget-blue': {
                    DEFAULT: 'hsl(231, 90%, 80%)',
                    'outer-line': 'hsla(231, 90%, 80%, 0.4)',
                }
            },
        },
        fill: theme => ({
            current: 'currentColor',
            'widget-gold': theme('colors.widget-gold'),
            'widget-gold-light': theme('colors.widget-gold.light'),
        }),
        outline: theme => ({
            'widget-gold-outer-line': [`1px solid ${theme('colors.widget-gold.outer-line')}`, '1px'],
            'widget-blue-outer-line': [`1px solid ${theme('colors.widget-blue.outer-line')}`, '1px'],
        }),
        stroke: theme => ({
            current: 'currentColor',
            'widget-gold': theme('colors.widget-gold'),
            'widget-gold-light': theme('colors.widget-gold.light'),
        }),
    },
    variants: {
        extend: {
            fill: ['hover'],
            stroke: ['hover']
        },
    },
    plugins: [],
}
