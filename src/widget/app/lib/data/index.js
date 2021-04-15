import { squidexApiClient } from '../graphql/client';
import { SPELL_BY_FILTER, PERK_BY_FILTER, ITEM_BY_FILTER, ABILITY_BY_FILTER } from '../graphql/queries';

export const queryKey = Object.freeze({
    'spell': SPELL_BY_FILTER,
    'perk': PERK_BY_FILTER,
    'item': ITEM_BY_FILTER,
    'ability': ABILITY_BY_FILTER,
});

const getDataByFilter = async (filter, query) => {
    return await squidexApiClient.query(query, {
        filter,
    }).toPromise();
};

export const getSquidexTooltipBySlug = async (type = 'spell', identifier) => {

    const tooltipQuery = queryKey[type];
    const queryText = Number.isInteger(identifier) ? identifier : `'${identifier}'`;

    return await getDataByFilter(`data/slug/iv eq ${queryText} `, tooltipQuery);
};

export const getSquidexTooltipByRiotId = async (type = 'spell', identifier) => {

    const tooltipQuery = queryKey[type];
    const queryText = Number.isInteger(identifier) ? identifier : `'${identifier}'`;

    return await getDataByFilter(`data/riotId/iv eq ${queryText} `, tooltipQuery);
};