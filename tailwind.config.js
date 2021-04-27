const reduceCalc = require('reduce-css-calc');

const negateValue = (value) => {
    try {
        return reduceCalc(`calc(${value} * -1)`)
    } catch (e) {
        return value
    }
};

const negative = (scale) => {
    return Object.keys(scale)
        .filter((key) => scale[key] !== '0')
        .reduce(
            (negativeScale, key) => ({
                ...negativeScale,
                [`-${key}`]: negateValue(scale[key]),
            }),
            {}
        )
};

const defaultSpacing = {
    px: '1px',
    0: '0px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
};

const defaultWidth = {
    auto: 'auto',
    ...defaultSpacing,
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    full: '100%',
    screen: '100vw',
    min: 'min-content',
    max: 'max-content',
};

const defaultColors = {
    transparent: 'transparent',
    current: 'currentColor',

    black: '#000',
    white: '#fff',
    gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
    },
    red: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
    },
    yellow: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
    },
    green: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
    },
    blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
    },
    indigo: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
    },
    purple: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
    },
    pink: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
    },
};

const colors = {
    ...defaultColors,
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
};

const defaultSansFont = [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
];

const defaultHeight = {
    auto: 'auto',
    ...defaultSpacing,
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    full: '100%',
    screen: '100vh',
};

const defaultInset = {
    auto: 'auto',
    ...defaultSpacing,
    ...negative(defaultSpacing),
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    full: '100%',
    '-1/2': '-50%',
    '-1/3': '-33.333333%',
    '-2/3': '-66.666667%',
    '-1/4': '-25%',
    '-2/4': '-50%',
    '-3/4': '-75%',
    '-full': '-100%',
};

const defaultLineHeight = {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
};

const defaultMargin = {
    auto: 'auto',
    ...defaultSpacing,
    ...negative(defaultSpacing),
};

const defaultMinHeight = {
    0: '0px',
    full: '100%',
    screen: '100vh',
};

const defaultOutline = {
    none: ['2px solid transparent', '2px'],
    white: ['2px dotted white', '2px'],
    black: ['2px dotted black', '2px'],
};

const defaultStroke = {
    current: 'currentColor',
};

const theme = {
    backgroundColor: {
        ...colors
    },
    backgroundPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
        'x183y-36': '183px -36px'
    },
    backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        'x100y100': '100% 100%'
    },
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
    borderColor: {
        ...colors,
        DEFAULT: colors['gray']['200'],
    },
    colors,
    fill: {
        current: 'currentColor',
        'widget-gold': colors['widget-gold'].DEFAULT,
        'widget-gold-light': colors['widget-gold'].light,
    },
    fontFamily: {
        sans: [
            'RobotoMoba',
            ...defaultSansFont,
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
    height: {
        ...defaultHeight,
        '22-24p': '22.24%',
        '114p': '114%',
        '111-15p': '111.15%',
        '200p': '200%',
        '203p': '203%',
        '289p': '289%',
        '293p': '293%',
    },
    inset: {
        ...defaultInset,
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
        ...defaultLineHeight,
        'line-4.5': '1.125',
    },
    margin: {
        ...defaultMargin,
        '0-76': '0.19rem'
    },
    minHeight: {
        ...defaultMinHeight,
        '808': '808px',
        '914': '914px',
    },
    outline: {
        ...defaultOutline,
        'widget-blue-outer-line': [`1px solid ${colors['widget-blue']['outer-line']}`, '1px'],
        'widget-gold-outer-line': [`1px solid ${colors['widget-gold']['outer-line']}`, '1px'],
        'widget-green-outer-line': [`1px solid ${colors['widget-green']['outer-line']}`, '1px'],
        'widget-purple-outer-line': [`1px solid ${colors['widget-purple']['outer-line']}`, '1px'],
        'widget-red-outer-line': [`1px solid ${colors['widget-red']['outer-line']}`, '1px'],
    },
    screens: {
        'sm': '300px',
        'md': '560px',
        'lg': '600px',
        'xl': '740px',
    },
    stroke: {
        ...defaultStroke,
        'widget-gold': colors['widget-gold'].DEFAULT,
        'widget-gold-light': colors['widget-gold'].light,
    },
    textColor: {
        ...colors
    },
    width: {
        ...defaultWidth,
        '0.25': '0.0625rem',
        '100': '25rem',
    },
};

const variants = {
    extend: {
        fill: ['responsive', 'hover'],
        stroke: ['responsive', 'hover'],
    },
};

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
    theme,
    variants,
    plugins: [
        require('./rem-to-px.js')({
            baseFontSize: 16,
            toModify: [
                'all'
            ],
            data: {
                theme,
                variants
            }
        }),
    ],
};