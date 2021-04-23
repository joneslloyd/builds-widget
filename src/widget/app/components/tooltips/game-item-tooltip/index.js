import { memo } from 'preact/compat';
import { useCallback, useState } from 'preact/hooks';
import useAsync from '../../../lib/hooks/use-async';
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

    //Set state of tooltip
    const setLocalTooltipRes = useCallback((ttRes) => {
        if (ttRes) {
            setLocalTooltip(ttRes)
        }
    }, []);

    //Get the tooltip
    const doTooltip = useCallback(async () => {
        //Only get it if there's a identifier set
        if (identifier) {
            return await maybeFetchTooltip('item', by, identifier, ttData, setTtData);
        }
    }, [identifier]);

    useAsync(doTooltip, setLocalTooltipRes);

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