import { memo } from 'preact/compat';
import { useCallback } from 'preact/hooks';
import ChampionSkillStandaloneTooltip from '../champion-skill-standalone-tooltip';
import { styled } from 'twin.macro';
import { TransparentTooltip } from '../../../styles/components/transparent-tooltip';

const ChampionSkillTooltipWrapper = ({ by, identifier, children }) => {

    const tooltipFn = useCallback(() => {

        return (
            <TooltipWrapper>
                <ChampionSkillStandaloneTooltip by={by} identifier={identifier} />
            </TooltipWrapper>
        )
    }, [identifier]);


    return (identifier && (
        <TransparentTooltip tooltipFn={tooltipFn}>
            <span>{children}</span>
        </TransparentTooltip>
    ));
};

const TooltipWrapper = styled('div')(() => [
    {
        'width': '28rem',
    },
]);

export default memo(ChampionSkillTooltipWrapper);