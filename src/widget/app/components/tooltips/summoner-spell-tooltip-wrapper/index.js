import { memo } from 'preact/compat';
import { useCallback } from 'preact/hooks';
import SummonerSpellTooltip from '../summoner-spell-tooltip';
import { TransparentTooltip } from '../../../styles/components/transparent-tooltip';

const SummonerSpellTooltipWrapper = ({ slug, children }) => {

    const tooltipFn = useCallback(() => <SummonerSpellTooltip slug={slug} />, [slug]);

    return (
        <>
            {slug && (<TransparentTooltip tooltipFn={tooltipFn}>
                <span style="z-index: 10;">{children}</span>
            </TransparentTooltip>)}
            {!slug && children}
        </>
    );
};

export default memo(SummonerSpellTooltipWrapper);