export const getEnvironmentVariables = () => {
    /* eslint-disable no-undef */
    return (VARIABLES !== 'undefined') ? VARIABLES : {};
};

export const getEnvVar = (namePart = 'DATA_API') => {
    const name = `VARIABLE_${namePart}`;
    const vars = getEnvironmentVariables();
    return vars[name] !== 'undefined' ? vars[name] : false;
};