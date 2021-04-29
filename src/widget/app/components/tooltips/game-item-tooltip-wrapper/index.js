import { memo } from 'preact/compat';
import { useCallback } from 'preact/hooks';
import GameItemTooltip from '../game-item-tooltip';
import { TransparentTooltip } from '../../../styles/components/transparent-tooltip';

const GameItemTooltipWrapper = ({ by, identifier, children }) => {

    const tooltipFn = useCallback(() => <GameItemTooltip by={by} identifier={identifier} />, [identifier]);

    return (
        <>
            {identifier && (
                <TransparentTooltip tooltipFn={tooltipFn}>
                    <span style="z-index: 10;">{children}</span>
                </TransparentTooltip>
            )}
            {!identifier && children}
        </>
    );
};

export default memo(GameItemTooltipWrapper);