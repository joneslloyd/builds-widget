import { squidexApiClient } from '../graphql/client';
import { SPELL_BY_SLUG, PERK_BY_FILTER } from '../graphql/queries';

const getDataByFilter = async (filter, query) => {
    return await squidexApiClient.query(query, {
        filter,
    }).toPromise();
};

export const getSquidexTooltipBySlug = async (type = 'spell', identifier) => {

    const tooltipQuery = 'spell' === type ? SPELL_BY_SLUG : ('perk' === type ? PERK_BY_FILTER : false);
    const queryText = Number.isInteger(identifier) ? identifier : `'${identifier}'`;

    return await getDataByFilter(`data/slug/iv eq ${queryText} `, tooltipQuery);
};

export const getSquidexTooltipByRiotId = async (type = 'spell', identifier) => {

    const tooltipQuery = 'perk' === type ? PERK_BY_FILTER : false;
    const queryText = Number.isInteger(identifier) ? identifier : `'${identifier}'`;

    return await getDataByFilter(`data/riotId/iv eq ${queryText} `, tooltipQuery);
};