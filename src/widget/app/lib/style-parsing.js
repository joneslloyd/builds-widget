const remToPx = (rem, base) => {
    return rem * base;
};

const remFinderRegex = new RegExp(/(?<=\s|^|\b)(\d*\.*\d*)(?:rem)(?=\s|$|\b)/, 'gmi');

const rindRemReplaceWithPxRegex = (text, base) => {
    return text.replaceAll(remFinderRegex, (s, p1) => {
        if (p1) {
            return parseFloat(remToPx(p1, base), 10) + 'px';
        }

        return s;
    });
};

const doParseRemToPx = (styles) => {

    const base = 16;

    const stylesData = [];

    if (false === Array.isArray(styles)) {
        for (const [key, value] of Object.entries(styles)) {

            if (typeof value === 'string' && value.includes('rem')) {
                const newVal = rindRemReplaceWithPxRegex(value, base);
                stylesData.push([
                    key, newVal
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
            stylesData.push(doParseRemToPx(currentStyle));
        }
    }

    return false === Array.isArray(styles) ? Object.fromEntries(stylesData) : stylesData;
};

export const doParseStyles = (styles) => {
    return doParseRemToPx(styles);
};

export default doParseStyles;