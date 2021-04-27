const plugin = require('tailwindcss/plugin');
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig)

const remToPx = (rem, base) => {
    return rem * base;
};

const makePixelsForThemePart = function (data, base) {

    const pixelData = [];

    for (const [key, value] of Object.entries(data)) {

        if (typeof value === 'string' && value.includes('rem')) {

            const num = parseFloat(value, 10);
            const pxNum = remToPx(num, base).toString() + 'px';

            pixelData.push([
                key, pxNum
            ]);
        }
        else {
            pixelData.push([
                key, value
            ]);
        }
    }
    return Object.fromEntries(pixelData);
};

const doPxConfig = (options) => {

    const { baseFontSize = 16, toModify = ['all'], data = {} } = options;
    const { theme, variants } = data;

    const returnPxData = {
        theme: {
            ...fullConfig.theme,
            ...theme
        },
        variants: {
            ...fullConfig.variants,
            ...variants
        }
    };

    for (const [key, value] of Object.entries(theme)) {
        if ('all' === toModify[0] || toModify.includes(key)) {
            const updatedData = makePixelsForThemePart(value, baseFontSize);
            returnPxData.theme[key] = updatedData;
        }
    }

    return returnPxData;
};

module.exports = plugin.withOptions(() => {
    return () => { };
}, (options) => {
    return doPxConfig(options);
});