import { memo } from 'preact/compat';
import { useMemo } from 'preact/hooks';
import { useSquidexApi } from '../../lib/context/squidex-api';
import { useLoading } from '../../lib/context/loading';
import SpellItem from '../spell-item';
import LetterOverlay from '../overlay';
import RightArrow from '../right-arrow';
import ChampionSkillTooltipWrapper from '../tooltips/champion-skill-tooltip-wrapper';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';
import { parseStyles } from '../../lib/helpers';

const CompactSkillPriority = () => {

    const styled = useStyled();

    const CompactSkillPriorityStyles = useMemo(() => {
        return styled(FlexCol)(() => {
            return parseStyles([
                tw`mr-0 xl:(mr-10)`,
            ]);
        });
    }, [styled]);

    const CompactSkillPrioritySmallWhiteText = useMemo(() => {
        return styled(SmallWhiteText)(() => {
            return parseStyles([
                tw`uppercase`,
            ]);
        });
    }, [styled]);

    const CompactSkillPriorityRow = useMemo(() => {
        return styled(FlexRow)(() => {
            return parseStyles([
                tw`pt-2.5`,
            ]);
        });
    }, [styled]);

    const RightArrowStyles = useMemo(() => {
        return styled(RightArrow)(() => {
            return parseStyles([
                tw`mx-2`,
            ]);
        });
    }, [styled]);

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