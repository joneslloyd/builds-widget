export const getEnvironmentVariables = () => {
    /* eslint-disable no-undef */
    return (VARIABLES !== 'undefined') ? VARIABLES : {};
};

export const getEnvVar = (namePart = 'DATA_API') => {
    const name = `VARIABLE_${namePart}`;
    const vars = getEnvironmentVariables();
    return vars[name] !== 'undefined' ? vars[name] : false;
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