import { memo } from 'preact/compat';
import { useMemo } from 'preact/hooks';
import { useSquidexApi } from '../../lib/context/squidex-api';
import { useLoading } from '../../lib/context/loading';
import SpellItem from '../spell-item';
import LetterOverlay from '../overlay';
import RightArrow from '../right-arrow';
import ChampionSkillTooltipWrapper from '../tooltips/champion-skill-tooltip-wrapper';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';

const CompactSkillPriorityStyles = tw(FlexCol)`mr-0 xl:(mr-10)`;
const CompactSkillPrioritySmallWhiteText = tw(SmallWhiteText)`uppercase`;
const CompactSkillPriorityRow = tw(FlexRow)`pt-2.5`;
const RightArrowStyles = tw(RightArrow)`mx-2`;

const CompactSkillPriority = () => {

    const { sqData: { data: { championCommonInfo: [{ flatData: { abilities: abilitiesRaw = [] } = {} } = {}] = [] } = {} } = {} } = useSquidexApi();
    const { loading: isLoading = true } = useLoading();

    const abilities = useMemo(() => {
        return abilitiesRaw.filter(a => a.flatData.activationKey !== 'PASSIVE') || [];
    }, [abilitiesRaw]);

    const loading = isLoading || abilities.length === 0;

    return (
        <CompactSkillPriorityStyles>
            <CompactSkillPrioritySmallWhiteText>Skill priority</CompactSkillPrioritySmallWhiteText>
            <CompactSkillPriorityRow>
                {loading && (
                    <>
                        <SpellItem slug={false} wh={32} type="skill" />
                        <RightArrowStyles />
                        <SpellItem slug={false} wh={32} type="skill" />
                        <RightArrowStyles />
                        <SpellItem slug={false} wh={32} type="skill" />
                        <RightArrowStyles />
                        <SpellItem slug={false} wh={32} type="skill" />
                    </>
                )}
                {!loading && abilities.map((a, i) => {

                    const { flatData } = a;
                    const { activationKey = false, slug = false } = flatData;

                    const overlay = activationKey ? (
                        <LetterOverlay key={activationKey} letter={activationKey} loading={false}>
                            {activationKey}
                        </LetterOverlay>
                    ) : false;

                    return (
                        <>
                            <ChampionSkillTooltipWrapper by="slug" identifier={slug}>
                                <SpellItem cursor="help" key={activationKey} overlay={overlay} slug={slug} wh={32} type="skill" />
                            </ChampionSkillTooltipWrapper>
                            {i !== abilities.length - 1 && (
                                <RightArrowStyles />
                            )}
                        </>
                    );
                })}
            </CompactSkillPriorityRow>
        </CompactSkillPriorityStyles>
    );
};

export default memo(CompactSkillPriority);