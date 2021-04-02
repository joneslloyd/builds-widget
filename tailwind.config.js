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
        borderRadius: {
            none: '0px',
            sm: '0.19rem',
            DEFAULT: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px',
        },
        fontFamily: {
            sans: [
                'RobotoSlab',
                ...defaultTheme.fontFamily.sans,
            ],
        },
        fontSize: {
            'xxs': '.63rem',
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
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
                    'line': 'hsla(188, 44%, 51%, 1)',
                    'outer-line': 'hsla(188, 44%, 51%, 0.4)',
                },
                'widget-gold': {
                    light: 'hsl(41, 43%, 70%)',
                    DEFAULT: 'hsl(41, 43%, 55%)',
                    'line': 'hsla(40, 45%, 61%, 1)',
                    'outer-line': 'hsla(40, 45%, 61%, 0.4)',
                },
                'widget-green': {
                    DEFAULT: 'hsl(165, 72%, 45%)',
                    'line': 'hsla(99, 48%, 68%, 1 )',
                    'outer-line': 'hsla(99, 48%, 68%, 0.4 )',
                },
                'widget-keys': {
                    'W': 'hsla(195, 90%, 59%, 1)',
                    'Q': 'hsla(46, 100%, 51%, 1)',
                    'E': 'hsla(118, 58%, 53%, 1)',
                    'R': 'hsla(338, 100%, 57%, 1)',
                },
                'widget-purple': {
                    lightest: 'hsl(238, 24%, 76%)',
                    light: 'hsl(248, 34%, 23%)',
                    DEFAULT: 'hsl(248, 37%, 20%)',
                    border: 'hsl(250, 37%, 29%)',
                    overlay: `hsla(251, 29%, 36%, 1)`,
                    'skeleton-text': 'hsla(229, 24%, 63%, 1)',
                    text: 'hsl(245, 14%, 47%)',
                    'line': 'hsla(233, 92%, 80%, 1)',
                    'outer-line': 'hsla(233, 92%, 80%, 0.4)',
                },
                'widget-red': {
                    DEFAULT: 'hsl(355, 76%, 55%)',
                    'line': 'hsla(360, 57%, 52%, 1)',
                    'outer-line': 'hsla(360, 57%, 52%, 0.4)',
                },
                'widget-white': {
                    line: 'hsla(0, 0%, 100%, 0.05)'
                },
            },
            inset: {
                '53p': '53%',
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
        screens: {
            'sm': '300px',
            'md': '560px',
            'lg': '600px',
            'xl': '740px',
        },
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
