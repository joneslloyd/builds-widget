import { memo } from 'preact/compat';
import { useCallback, useState } from 'preact/hooks';
import useAsync from '../../../lib/hooks/use-async';
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
        //Only get it if there's a identifier set
        if (identifier) {
            return await maybeFetchTooltip('perk', by, identifier, ttData, setTtData);
        }
    }, [identifier]);

    useAsync(doTooltip, setLocalTooltipRes);

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