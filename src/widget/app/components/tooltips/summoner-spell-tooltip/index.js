import { memo } from 'preact/compat';
import { useCallback, useState } from 'preact/hooks';
import useAsync from '../../../lib/hooks/use-async';
import { summonerSpellIcon } from '../../../lib/helpers';
import { useTooltips } from '../../../lib/context/tooltips';
import { maybeFetchTooltip } from '../../../lib/tooltips';
import {
    GameTooltip,
    GameTooltipEmpty,
} from '../game-tooltip';

export const SummonerSpellTooltip = ({ slug = false }) => {

    const { ttData, setTtData } = useTooltips();
    const [localTooltip, setLocalTooltip] = useState(false);

    //Set state of tooltip
    const doSetLocalTooltipRes = (ttRes) => {
        if (ttRes) {
            setLocalTooltip(ttRes)
        }
    };

    const setLocalTooltipRes = useCallback((ttRes) => {
        doSetLocalTooltipRes(ttRes);
    }, []);

    //Get the tooltip
    const doTooltip = useCallback(async () => {
        //Only get it if there's a slug set
        if (slug) {
            return await maybeFetchTooltip('spell', 'slug', slug, ttData, setTtData);
        }
    }, [slug]);

    useAsync(doTooltip, setLocalTooltipRes);

    return localTooltip ? (
        <GameTooltip
            name={localTooltip.name}
            iconName={localTooltip.name}
            iconUrl={summonerSpellIcon(slug)}
            description={localTooltip.description}
        />
    ) : (
        <GameTooltipEmpty />
    );
};

export default memo(SummonerSpellTooltip);