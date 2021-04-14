import { memo } from 'preact/compat';
import { useCallback, useState, useEffect } from 'preact/hooks';
import { perkImage } from '../../../lib/helpers';
import { useTooltips } from '../../../lib/context/tooltips';
import { maybeFetchTooltip } from '../../../lib/tooltips';
import {
    GameTooltip,
    GameTooltipEmpty,
} from '../game-tooltip';

export const PerkTooltip = ({ by = 'riotId', identifier = false }) => {

    const { ttData, setTtData } = useTooltips();
    const [localTooltip, setLocalTooltip] = useState(false);

    //Get the tooltip
    const doTooltip = useCallback(async () => {
        //Only get it if there's a identifier set
        if (identifier) {
            const ttRes = await maybeFetchTooltip('perk', by, identifier, ttData, setTtData);
            if (ttRes) {
                setLocalTooltip(ttRes);
            }
        }
    }, [identifier]);

    useEffect(async () => {
        await doTooltip();
    }, [identifier]);

    return localTooltip ? (
        <GameTooltip
            name={localTooltip.name}
            iconName={localTooltip.name}
            iconUrl={perkImage(identifier)}
            description={localTooltip.longDescription || localTooltip.shortDescription || localTooltip.customDescription}
        />
    ) : (
        <GameTooltipEmpty />
    );
};

export default memo(PerkTooltip);