import { useCallback } from 'preact/hooks';
import { SummonerSpellTooltip } from '../summoner-spell-tooltip';
import { TransparentTooltip } from '../../../styles/components/transparent-tooltip';

export const SummonerSpellTooltipWrapper = props => {
    const { slug, children } = props;
    const tooltipFn = useCallback(() => <SummonerSpellTooltip slug={slug} />, [slug]);

    return (
        <TransparentTooltip tooltipFn={tooltipFn}>
            <span>{children}</span>
        </TransparentTooltip>
    );
};
