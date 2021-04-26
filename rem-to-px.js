const plugin = require('tailwindcss/plugin');
const resolveConfig = require('tailwindcss/resolveConfig');
const configFile = require('./tailwind.config.js');
const config = resolveConfig(configFile);

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

module.exports = plugin.withOptions(() => {

}, (options) => {

    const { baseFontSize = 16, toModify = ['all'] } = options;
    const theme = config.theme;
    const returnPxData = {};

    for (const [key, value] of Object.entries(theme)) {
        if ('all' === toModify[0] || toModify.includes(key)) {
            const updatedData = makePixelsForThemePart(value, baseFontSize);
            returnPxData[key] = updatedData;
        }
    }

    return returnPxData;
});