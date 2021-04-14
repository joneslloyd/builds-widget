import { memo } from 'preact/compat';
import { useCallback, useState, useEffect } from 'preact/hooks';
import { gameItemIcon } from '../../../lib/helpers';
import { useTooltips } from '../../../lib/context/tooltips';
import { maybeFetchTooltip } from '../../../lib/tooltips';
import {
    GameTooltip,
    GameTooltipEmpty,
} from '../game-tooltip';

export const GameItemTooltip = ({ by = 'riotId', identifier = false }) => {

    const { ttData, setTtData } = useTooltips();
    const [localTooltip, setLocalTooltip] = useState(false);

    //Get the tooltip
    const doTooltip = useCallback(async () => {
        //Only get it if there's a identifier set
        if (identifier) {
            const ttRes = await maybeFetchTooltip('item', by, identifier, ttData, setTtData);
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
            iconUrl={gameItemIcon(identifier)}
            description={localTooltip.effectDescription}
        />
    ) : (
        <GameTooltipEmpty />
    );
};

export default memo(GameItemTooltip);