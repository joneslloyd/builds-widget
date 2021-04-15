import { memo } from 'preact/compat';
import { useCallback } from 'preact/hooks';
import GameItemTooltip from '../game-item-tooltip';
import { TransparentTooltip } from '../../../styles/components/transparent-tooltip';

const GameItemTooltipWrapper = ({ by, identifier, children }) => {

    const tooltipFn = useCallback(() => <GameItemTooltip by={by} identifier={identifier} />, [identifier]);

    return (identifier && (
        <TransparentTooltip tooltipFn={tooltipFn}>
            <span>{children}</span>
        </TransparentTooltip>
    ));
};

export default memo(GameItemTooltipWrapper);