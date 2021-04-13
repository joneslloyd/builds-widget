import { memo } from 'preact/compat';
import { useCallback } from 'preact/hooks';
import SummonerSpellTooltip from '../summoner-spell-tooltip';
import { TransparentTooltip } from '../../../styles/components/transparent-tooltip';

const SummonerSpellTooltipWrapper = props => {
    const { slug, children } = props;
    const tooltipFn = useCallback(() => <SummonerSpellTooltip slug={slug} />, [slug]);
    console.log('summoners spell tooltip wrapper')
    return (
        <TransparentTooltip tooltipFn={tooltipFn}>
            <span>{children}</span>
        </TransparentTooltip>
    );
};

export default memo(SummonerSpellTooltipWrapper);