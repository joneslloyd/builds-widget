import { getSquidexTooltipBySlug } from '../data';
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

export const maybeFetchTooltip = async (slug, tooltips, setTooltips) => {

    const isFetched = toolTipAlreadyFetched({ slug }, 'slug', tooltips);

    let tooltip;

    if (!isFetched) {

        const res = await getSquidexTooltipBySlug(slug, tooltips, setTooltips);
        const { data, error } = res;

        if (!error) {
            tooltip = firstItem(data.spells).flatData;
            addTooltip(tooltip, 'slug', tooltips, setTooltips);
            return tooltip;
        }
        else {
            setTooltipsError(true, tooltips, setTooltips);
            return false;
        }
    }
    else {
        tooltip = getTooltip(slug, 'slug', tooltips);
    }

    return tooltip;
};