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
        extend: {
            colors: {
                mobalytics: {
                    light: 'hsl(253, 54%, 25%)',
                    DEFAULT: 'hsl(253, 54%, 15%)',
                },
                widget: {
                    light: 'hsl(248, 34%, 23%)',
                    DEFAULT: 'hsl(248, 37%, 20%)'
                }
            },
        },
    },
    plugins: [],
}
