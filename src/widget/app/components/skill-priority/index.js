import SpellItem from '../spell-item';
import LetterOverlay from '../overlay';
import RightArrow from '../right-arrow';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';

const SkillPriorityStyles = tw(FlexCol)`pr-0 md:(pr-10)`;
const SkillPrioritySmallWhiteText = tw(SmallWhiteText)`uppercase`;
const SkillPriorityRow = tw(FlexRow)`pt-3`;
const RightArrowStyles = tw(RightArrow)`mx-2`;

const SkillPriority = () => {

    const { squidexApiBuildData: { data: { championCommonInfo: [{ flatData: { abilities: abilitiesRaw = [] } = {} } = {}] = [] } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);
    const abilities = abilitiesRaw.filter(a => a.flatData.activationKey !== 'PASSIVE');
    const loading = isLoading || abilities.length === 0;

    return (
        <SkillPriorityStyles>
            <SkillPrioritySmallWhiteText>Skill priority</SkillPrioritySmallWhiteText>
            <SkillPriorityRow>
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
                        <LetterOverlay key={activationKey} letter={activationKey}>
                            {activationKey}
                        </LetterOverlay>
                    ) : false;
                    console.log(activationKey, overlay);
                    return (
                        <>
                            <SpellItem key={activationKey} overlay={overlay} slug={slug} wh={32} type="skill" />
                            {i !== abilities.length - 1 && (
                                <RightArrowStyles />
                            )}
                        </>
                    );
                })}
            </SkillPriorityRow>
        </SkillPriorityStyles>
    );
};

export default SkillPriority;