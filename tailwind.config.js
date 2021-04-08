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
                'RobotoMoba',
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
            backgroundPosition: {
                'x183y-36': '183px -36px'
            },
            backgroundSize: {
                'x100y100': '100% 100%'
            },
            colors: {
                mobalytics: {
                    light: 'hsla(253, 54%, 25%, 1)',
                    DEFAULT: 'hsla(253, 54%, 15%, 1)',
                },
                'widget-blue': {
                    DEFAULT: 'hsla(231, 90%, 80%, 1)',
                    'line': 'hsla(188, 44%, 51%, 1)',
                    'outer-line': 'hsla(188, 44%, 51%, 0.4)',
                },
                'widget-gold': {
                    light: 'hsla(41, 43%, 70%, 1)',
                    DEFAULT: 'hsla(41, 43%, 55%, 1)',
                    'line': 'hsla(40, 45%, 61%, 1)',
                    'outer-line': 'hsla(40, 45%, 61%, 0.4)',
                },
                'widget-green': {
                    DEFAULT: 'hsla(165, 72%, 45%, 1)',
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
                    lightest: 'hsla(238, 24%, 76%, 1)',
                    light: 'hsla(248, 34%, 23%, 1)',
                    'light-50': 'hsla(248, 34%, 23%, 0.5)',
                    'light-65': 'hsla(248, 34%, 23%, 0.65)',
                    DEFAULT: 'hsla(248, 37%, 20%, 1)',
                    border: 'hsla(250, 37%, 29%, 1)',
                    overlay: `hsla(251, 29%, 36%, 1)`,
                    'skeleton-text': 'hsla(229, 24%, 63%, 1)',
                    text: 'hsla(245, 14%, 47%, 1)',
                    'text-25': 'hsla(245, 14%, 47%, 0.25)',
                    'full-runes-text': 'hsla(238, 24%, 76%, 1)',
                    'line': 'hsla(233, 92%, 80%, 1)',
                    'outer-line': 'hsla(233, 92%, 80%, 0.4)',
                },
                'widget-red': {
                    DEFAULT: 'hsla(355, 76%, 55%, 1)',
                    'line': 'hsla(360, 57%, 52%, 1)',
                    'outer-line': 'hsla(360, 57%, 52%, 0.4)',
                },
                'widget-white': {
                    line: 'hsla(0, 0%, 100%, 0.05)'
                },
            },
            height: {
                '22-24p': '22.24%',
                '114p': '114%',
                '111-15p': '111.15%',
                '200p': '200%',
                '203p': '203%',
                '289p': '289%',
                '293p': '293%',
            },
            inset: {
                '1.6': '0.4rem',
                '9.6': '2.4rem',
                '36p': '36%',
                '49p': '49%',
                '53p': '53%',
                '17.6': '4.4rem',
                '18': '4.5rem',
                '20': '5rem',
                '25.5': '6.4rem',
                '26': '6.5rem',
                '30': '7.5rem',
            },
            lineHeight: {
                'line-4.5': '1.125',
            },
            margin: {
                '0-76': '0.19rem'
            },
            minHeight: {
                '808': '808px',
                '914': '914px',
            },
            width: {
                '0.25': '0.0625rem',
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
