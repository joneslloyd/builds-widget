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
                'widget-blue': {
                    DEFAULT: 'hsl(231, 90%, 80%)',
                    'line': 'hsla(231, 90%, 80%, 1)',
                    'outer-line': 'hsla(231, 90%, 80%, 0.4)',
                },
                'widget-gold': {
                    light: 'hsl(41, 43%, 70%)',
                    DEFAULT: 'hsl(41, 43%, 55%)',
                    'line': 'hsla(41, 43%, 55%, 1)',
                    'outer-line': 'hsla(40, 47%, 62%, 0.4)',
                },
                'widget-green': {
                    DEFAULT: 'hsl(165, 72%, 45%)',
                    'line': 'hsla(137, 61%, 51%, 1)',
                    'outer-line': 'hsla(137, 61%, 51%, 0.4)',
                },
                'widget-purple': {
                    lightest: 'hsl(238, 24%, 76%)',
                    light: 'hsl(248, 34%, 23%)',
                    DEFAULT: 'hsl(248, 37%, 20%)',
                    border: 'hsl(250, 37%, 29%)',
                    text: 'hsl(245, 14%, 47%)',
                    'line': 'hsla(303, 79%, 51%, 1)',
                    'outer-line': 'hsla(303, 79%, 51%, 0.4)',
                },
                'widget-red': {
                    DEFAULT: 'hsl(355, 76%, 55%)',
                    'line': 'hsla(355, 76%, 55%, 1)',
                    'outer-line': 'hsla(355, 76%, 55%, 0.4)',
                },
                'widget-white': {
                    line: 'hsla(0, 0%, 100%, 0.05)'
                },
            },
        },
        fill: theme => ({
            current: 'currentColor',
            'widget-gold': theme('colors.widget-gold'),
            'widget-gold-light': theme('colors.widget-gold.light'),
        }),
        outline: theme => ({
            'widget-blue-outer-line': [`1px solid ${theme('colors.widget-blue.outer-line')}`, '1px'],
            'widget-gold-outer-line': [`1px solid ${theme('colors.widget-gold.outer-line')}`, '1px'],
            'widget-green-outer-line': [`1px solid ${theme('colors.widget-green.outer-line')}`, '1px'],
            'widget-purple-outer-line': [`1px solid ${theme('colors.widget-purple.outer-line')}`, '1px'],
            'widget-red-outer-line': [`1px solid ${theme('colors.widget-red.outer-line')}`, '1px'],
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
