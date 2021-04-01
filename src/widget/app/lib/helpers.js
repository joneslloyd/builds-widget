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

export const rolenameIcon = (rolename) => {
    const cdnUrl = getEnvVar('CDN_URL');
    return rolename && 'XXX' !== rolename ? `${cdnUrl}/assets/lol/images/rolename-icon/${rolename}.svg` : false;
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

export const RunesSlotsMap = {
    Precision: {
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
    Domination: {
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
    Sorcery: {
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
    Inspiration: {
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
    Resolve: {
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
    Shards: {
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
};