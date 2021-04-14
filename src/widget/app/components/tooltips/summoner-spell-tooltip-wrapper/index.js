import { memo } from 'preact/compat';
import { useCallback } from 'preact/hooks';
import SummonerSpellTooltip from '../summoner-spell-tooltip';
import { TransparentTooltip } from '../../../styles/components/transparent-tooltip';

const SummonerSpellTooltipWrapper = ({ slug, children }) => {

    const tooltipFn = useCallback(() => <SummonerSpellTooltip slug={slug} />, [slug]);

    return (slug && (<TransparentTooltip tooltipFn={tooltipFn}>
        <span>{children}</span>
    </TransparentTooltip>));
};

export default memo(SummonerSpellTooltipWrapper);