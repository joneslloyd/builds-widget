import { memo } from 'preact/compat';
import { useCallback, useState, useEffect } from 'preact/hooks';
import { findBySlug } from '../../../lib/helpers';
import { isConnectedChampionCommonAbility } from '../../../lib/tooltips/helpers';
import { useTooltips } from '../../../lib/context/tooltips';
import { maybeFetchTooltip } from '../../../lib/tooltips';
import ChampionSkillTooltip from '../champion-skill-tooltip';
import { GameTooltipEmpty, } from '../game-tooltip';

export const ChampionSkillStandaloneTooltip = ({ by = 'riotId', identifier = false }) => {

    const { ttData, setTtData } = useTooltips();
    const [localTooltip, setLocalTooltip] = useState(false);

    //Get the tooltip
    const doTooltip = useCallback(async () => {
        //Only get it if there's a identifier set
        if (identifier) {
            const ttRes = await maybeFetchTooltip('ability', by, identifier, ttData, setTtData);
            if (ttRes) {
                setLocalTooltip(ttRes);
            }
        }
    }, [identifier]);

    useEffect(async () => {
        await doTooltip();
    }, [identifier]);

    return (localTooltip && isConnectedChampionCommonAbility(localTooltip)) ? (
        <ChampionSkillTooltip
            identifier={identifier}
            by={by}
            name={localTooltip.name}
            abilityKey={localTooltip.activationKey}
            description={localTooltip.riotDesc || ability.mobaDesc}
            range={findBySlug('range', localTooltip.stats)?.value}
            cost={findBySlug('cost', localTooltip.stats)?.value}
            cooldown={findBySlug('cooldown', localTooltip.stats)?.value}
        />
    ) : (
        <GameTooltipEmpty />
    );
};

export default memo(ChampionSkillStandaloneTooltip);