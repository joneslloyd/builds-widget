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
                electric: '#db00ff',
                ribbon: '#0047ff',
            },
        },
    },
    plugins: [],
}
