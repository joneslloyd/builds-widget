import { memo } from 'preact/compat';
import { useCallback, useMemo } from 'preact/hooks';
import ChampionSkillStandaloneTooltip from '../champion-skill-standalone-tooltip';
import { useStyled } from '../../../lib/context/goober';
import { TransparentTooltip } from '../../../styles/components/transparent-tooltip';
import { parseStyles } from '../../../lib/helpers';


const ChampionSkillTooltipWrapper = ({ by, identifier, children }) => {

    const styled = useStyled();

    const TooltipWrapper = useMemo(() => {
        return styled('div')(() => {
            return parseStyles([
                {
                    'width': '17.5rem',
                },
            ]);
        })
    }, [styled]);

    const tooltipFn = useCallback(() => {

        return (
            <TooltipWrapper>
                <ChampionSkillStandaloneTooltip by={by} identifier={identifier} />
            </TooltipWrapper>
        )
    }, [identifier]);


    return (identifier && (
        <TransparentTooltip tooltipFn={tooltipFn}>
            <span style="z-index: 10;">{children}</span>
        </TransparentTooltip>
    ));
};

export default memo(ChampionSkillTooltipWrapper);