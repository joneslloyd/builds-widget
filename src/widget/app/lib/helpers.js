import { colors } from './legacy/colors';
import doParseStyles from './style-parsing';

export const SkillKey = Object.freeze({
    E: 'E',
    PASSIVE: 'PASSIVE',
    Q: 'Q',
    R: 'R',
    W: 'W',
});

export const PowerSpikeValue = Object.freeze({
    GOOD: 'GOOD',
    OK: 'OK',
    POOR: 'POOR',
});

export const Rolename = Object.freeze({
    ADC: 'ADC',
    JUNGLE: 'JUNGLE',
    MID: 'MID',
    SUPPORT: 'SUPPORT',
    TOP: 'TOP',
    UNKNOWN: 'UNKNOWN',
});

export const TierLevel = Object.freeze({
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
    E: 'E',
    S: 'S',
});

export const LolChampionBuildItemsListType = Object.freeze({
    Boots: 'Boots',
    Core: 'Core',
    Early: 'Early',
    FifthItem: 'FifthItem',
    FirstCore: 'FirstCore',
    FourthItem: 'FourthItem',
    FullBuild: 'FullBuild',
    SecondCore: 'SecondCore',
    Situational: 'Situational',
    SixthItem: 'SixthItem',
    Starter: 'Starter',
});

export const LolChampionBuildType = Object.freeze({
    HIGHEST_WIN_RATE: 'HIGHEST_WIN_RATE',
    MATCHUP_SPECIFIC: 'MATCHUP_SPECIFIC',
    MOST_POPULAR: 'MOST_POPULAR',
    OPTIONAL: 'OPTIONAL',
    PRO_PLAYERS: 'PRO_PLAYERS',
    RECOMMENDED: 'RECOMMENDED',
});

export const ProPlayerType = Object.freeze({
    OTP: 'OTP',
    Other: 'Other',
    Pro: 'Pro',
    Streamer: 'Streamer',
});

export const SkillKeyColor = Object.freeze({
    [SkillKey.PASSIVE]: colors.skillLetterColor.P,
    [SkillKey.Q]: colors.skillLetterColor.Q,
    [SkillKey.W]: colors.skillLetterColor.W,
    [SkillKey.E]: colors.skillLetterColor.E,
    [SkillKey.R]: colors.skillLetterColor.R,
});

export const SkillKeyLetter = Object.freeze({
    [SkillKey.PASSIVE]: 'P',
    [SkillKey.Q]: 'Q',
    [SkillKey.W]: 'W',
    [SkillKey.E]: 'E',
    [SkillKey.R]: 'R',
});

export const getEnvironmentVariables = () => {
    /* eslint-disable no-undef */
    return (VARIABLES !== 'undefined') ? VARIABLES : {};
};

export const getEnvVar = (namePart = 'DATA_API') => {
    const name = `VARIABLE_${namePart}`;
    const vars = getEnvironmentVariables();
    return vars[name] !== 'undefined' ? vars[name] : false;
};

export const getLineColorFromIcon = (iconCode) => {
    return 8000 === iconCode ? 'gold' : (8100 === iconCode ? 'red' : (8200 === iconCode ? 'purple' : (8400 === iconCode ? 'green' : 'blue')));
};

export const championImage = (slug) => {
    const cdnUrl = getEnvVar('CDN_URL');
    return slug ? `${cdnUrl}/assets/lol/images/dd/champions/icons/${slug.toLowerCase()}.png` : false;
}

export const rolenameIcon = (rolename, skip = true) => {
    const cdnUrl = getEnvVar('CDN_URL');
    return rolename && !skip ? `${cdnUrl}/assets/lol/images/rolename-icon/${rolename}.svg` : false;
};

export const roundWinRate = (value, precision = 1) => {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
};

export const commaNumber = (num) => {
    return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : false;
};

export const perkImage = (perk) => {
    const cdnUrl = getEnvVar('CDN_URL');
    return perk ? `${cdnUrl}/assets/lol/images/perks/${perk}.png` : false;
};

export const summonerSpellIcon = (slug) => {
    const cdnUrl = getEnvVar('CDN_URL');
    return slug ? `${cdnUrl}/assets/lol/images/dd/summoner-spells/${slug}.png` : false;
};

export const gameItemIcon = (id) => {
    const cdnUrl = getEnvVar('CDN_URL');
    return id ? `${cdnUrl}/assets/lol/images/dd/game-items/${id}.png` : false;
}

export const getSkillIcon = (slug) => {
    const cdnUrl = getEnvVar('CDN_URL');
    return slug ? `${cdnUrl}/assets/lol/images/dd/champions/abilities/${slug}.png` : false;
};

export const championPosterImage = (slug) => {
    const cdnUrl = getEnvVar('CDN_URL');
    return slug ? `${cdnUrl}/assets/lol/images/dd/champions/backgrounds/${slug.toLowerCase().replace(/\s/g, '')}.jpg` : false;
};

export const championAbilityVideo = (identifier, by = 'slug') => {
    const cdnUrl = getEnvVar('CDN_URL');
    return (identifier && 'slug' === by) ? {
        slug: identifier,
        mp4: `${cdnUrl}/assets/lol/video/champion-abilities/${identifier}.mp4`,
        webm: `${cdnUrl}/assets/lol/video/champion-abilities/${identifier}.webm`,
        placeholder: `${cdnUrl}/assets/lol/video/champion-abilities/${identifier}.png`,
    } : false;
};

export const RunesSlotsMap = [
    {
        title: {
            label: 'Precision',
            icon: 8000,
        },
        slots: [
            [8005, 8008, 8021, 8010],
            [9101, 9111, 8009],
            [9104, 9105, 9103],
            [8014, 8017, 8299],
        ],
    },
    {
        title: {
            label: 'Domination',
            icon: 8100,
        },
        slots: [
            [8112, 8124, 8128, 9923],
            [8126, 8139, 8143],
            [8136, 8120, 8138],
            [8135, 8134, 8105, 8106],
        ],
    },
    {
        title: {
            label: 'Sorcery',
            icon: 8200,
        },
        slots: [
            [8214, 8229, 8230],
            [8224, 8226, 8275],
            [8210, 8234, 8233],
            [8237, 8232, 8236],
        ],
    },
    {
        title: {
            label: 'Inspiration',
            icon: 8300,
        },
        slots: [
            [8351, 8358, 8360],
            [8306, 8304, 8313],
            [8321, 8316, 8345],
            [8347, 8410, 8352],
        ],
    },
    {
        title: {
            label: 'Resolve',
            icon: 8400,
        },
        slots: [
            [8437, 8439, 8465],
            [8446, 8463, 8401],
            [8429, 8444, 8473],
            [8451, 8453, 8242],
        ],
    },
    {
        title: {
            label: 'Shards',
            icon: null,
        },
        slots: [
            [5008, 5005, 5007],
            [5008, 5002, 5003],
            [5001, 5002, 5003],
        ],
    },
];

export const firstItem = (list) => {
    return list?.length ? list[0] || null : null;
}

export const secondItem = (list) => {
    if (list && list.length > 1) {
        return list[1];
    }
    return null;
}

export const isDef = (value) => {
    return value !== null && value !== undefined;
}

export const isDefAndNotEmpty = (value) => {
    return !!(value && value.length);
}

export const isDefAndMoreThenZero = (value) => {
    return isDef(value) && value > 0;
}

const allowedTags = ['li', 'br', 'div', 'span', 'i', 'a', 'font'];

/**
 * Replaces tags like rarityMythic to raritymythic, camle case tags are not stylable
 * @param markdown
 */
export const processCustomHtmlTags = (markdown) => {
    return markdown.replace(
        /<(\/?)([a-z-]+)([\s>])/gi,
        (match, closeTagSymbol, tagName, closeMatchSymbol) => {
            if (!allowedTags.includes(tagName)) {
                return closeTagSymbol ? `</div${closeMatchSymbol}` : `<div class="custom ${tagName}"${closeMatchSymbol}`;
            }
            return match;
        }
    );
}

export const findBySlug = (slug, list) => {
    return slug && list ? list.find(it => it.slug === slug) || null : null;
}

export const getStrEnumValues = (obj) => {
    const result = [];
    for (const key in obj) {
        result.push(obj[key]);
    }
    return result;
}

export const isStrEnumValue = (obj, value) => {
    return getStrEnumValues(obj).indexOf(value) !== -1;
}

export const validateStrEnumValue = (obj, value) => {
    return obj && isStrEnumValue(obj, value) ? value : null;
}

export const parseStyles = (styles) => {
    // console.log(' before ');
    // console.log(styles);
    const parsedStyles = doParseStyles(styles);
    // console.log(' after ');
    // console.log(parsedStyles);
    return parsedStyles;
};