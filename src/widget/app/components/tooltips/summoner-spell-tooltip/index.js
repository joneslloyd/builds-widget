import { memo } from 'preact/compat';
import { useCallback, useState, useEffect } from 'preact/hooks';
import { summonerSpellIcon } from '../../../lib/helpers';
import { useTooltips } from '../../../lib/context/tooltips';
import { maybeFetchTooltip } from '../../../lib/tooltips';
import {
    GameTooltip,
    GameTooltipEmpty,
} from '../game-tooltip';

export const SummonerSpellTooltip = ({ slug = false }) => {

    const { ttData, setTtData } = useTooltips();
    const [mounted, setMounted] = useState(false);
    const [localTooltip, setLocalTooltip] = useState(false);

    //Get the tooltip
    const doTooltip = useCallback(async () => {
        //Only get it if there's a slug set
        if (slug) {
            const ttRes = await maybeFetchTooltip(slug, ttData, setTtData);
            if (ttRes) {
                setLocalTooltip(ttRes);
            }
        }
    }, [slug]);

    useEffect(async () => {
        await doTooltip();
    }, [slug]);

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