import { summonerSpellIcon } from '../../../lib/helpers';
import { useContext, useState, useEffect } from 'preact/hooks';
import { BuildContext } from '../../../lib/context';
import { maybeFetchTooltip } from '../../../lib/tooltips';
import {
    GameTooltop,
    GameTooltopEmpty,
} from '../game-tooltip';

export const SummonerSpellTooltip = ({ slug = false }) => {

    const { tooltips, setTooltips } = useContext(BuildContext);
    const [tooltip, setTooltip] = useState(false);

    useEffect(() => {
        //Get the tooltip
        const doTooltip = async () => {
            const tooltip = await maybeFetchTooltip(slug, tooltips, setTooltips);
            setTooltip(tooltip);
        };

        //Only get it if there's a slug set
        if (slug) {
            doTooltip();
        }
    }, [slug]);

    return tooltip ? (
        <GameTooltop
            name={tooltip.name}
            iconName={tooltip.name}
            iconUrl={summonerSpellIcon(slug)}
            description={tooltip.description}
        />
    ) : (
        <GameTooltopEmpty />
    );
};
