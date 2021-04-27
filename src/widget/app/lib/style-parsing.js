const remToPx = (rem, base) => {
    return rem * base;
};

const doParseRemToPx = (styles) => {

    const base = 16;

    const stylesData = [];

    if (false === Array.isArray(styles)) {
        for (const [key, value] of Object.entries(styles)) {
            // console.log('key: ', key, ' key is a ', typeof key);
            // console.log('value: ', value, ' value is a ', typeof value);
            if (typeof value === 'string' && value.includes('rem')) {

                const num = parseFloat(value, 10);
                const pxNum = remToPx(num, base).toString() + 'px';

                stylesData.push([
                    key, pxNum
                ]);
            }
            else if (typeof value === 'object') {
                stylesData.push([
                    key, doParseRemToPx(value)
                ]);
            }
            else {
                stylesData.push([
                    key, value
                ]);
            }
        }
    }
    else {
        for (let i = 0; i < styles.length; i++) {
            const currentStyle = styles[i];
            stylesData.push(doParseStyles(currentStyle));
        }
    }

    return false === Array.isArray(styles) ? Object.fromEntries(stylesData) : stylesData;
};

export const doParseStyles = (styles) => {
    return doParseRemToPx(styles);
};

export default doParseStyles;