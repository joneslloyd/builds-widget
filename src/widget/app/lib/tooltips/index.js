import { getSquidexTooltipBySlug, getSquidexTooltipByRiotId } from '../data';
import { firstItem } from '../helpers';

export const toolTipAlreadyFetched = (tooltip, by = 'slug', tooltips) => {
    return typeof tooltips?.tooltips.find(t => t[by] === tooltip[by]) !== 'undefined';
};

export const addTooltip = (tooltip, by = 'slug', tooltips, setTooltips) => {

    const existingTooltip = tooltips.tooltips.find(t => t[by] === tooltip[by]) || false;

    if (existingTooltip) {
        setTooltips({
            ...tooltips,
            tooltips: [
                ...tooltips.tooltips,
                {
                    ...existingTooltip,
                    ...tooltip
                }
            ]
        });
    }
    else {
        setTooltips({
            ...tooltips,
            tooltips: [
                ...tooltips.tooltips,
                {
                    ...tooltip
                }
            ]
        });
    }
};

export const getTooltip = (identifier, by = 'slug', tooltips) => {
    return tooltips.tooltips.find(t => t[by] === identifier) || false;
};

export const setTooltipsLoading = (loading = true, tooltips, setTooltips) => {
    return setTooltips({
        ...tooltips,
        loading,
    });
};

export const setTooltipsError = (error = false, tooltips, setTooltips) => {
    return setTooltips({
        ...tooltips,
        error,
    });
};

export const maybeFetchTooltip = async (type = 'spell', by = 'riotId', identifier, tooltips, setTooltips) => {

    let isFetchedOb = {};
    isFetchedOb[by] = identifier;
    const isFetched = toolTipAlreadyFetched(isFetchedOb, by, tooltips);

    let tooltip;

    if (!isFetched) {

        setTooltipsLoading(true, tooltips, setTooltips);

        const getFunc = 'slug' === by ? getSquidexTooltipBySlug : ('riotId' === by ? getSquidexTooltipByRiotId : false);

        const res = await getFunc(type, identifier, tooltips, setTooltips);
        const { data, error } = res;

        setTooltipsLoading(false, tooltips, setTooltips);

        if (!error) {
            const keyType = 'ability' === type ? 'item' : type;
            const key = `${keyType}s`;
            tooltip = firstItem(data[key]).flatData;
            addTooltip(tooltip, by, tooltips, setTooltips);
            return tooltip;
        }
        else {
            setTooltipsError(true, tooltips, setTooltips);
            return false;
        }
    }
    else {
        tooltip = getTooltip(identifier, by, tooltips);
    }

    return tooltip;
};