import { memo } from 'preact/compat';
import { useCallback } from 'preact/hooks';
import PerkTooltip from '../perk-tooltip';
import { TransparentTooltip } from '../../../styles/components/transparent-tooltip';

const PerkTooltipWrapper = ({ by, identifier, children }) => {

    const tooltipFn = useCallback(() => <PerkTooltip by={by} identifier={identifier} />, [identifier]);

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

export default memo(PerkTooltipWrapper);