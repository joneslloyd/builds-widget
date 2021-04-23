import SpellItem from '../spell-item';
import ChampionSkillTooltipWrapper from '../tooltips/champion-skill-tooltip-wrapper';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexCol from '../../styles/components/flex-col';

const FullSkillOrderAbilities = ({ loading = true, abilities = [] }) => {

    const styled = useStyled();

    const FullSkillOrderAbilitiesStyles = styled(FlexCol)(() => [
        tw``,
    ]);

    return (
        <FullSkillOrderAbilitiesStyles>
            {
                loading && (
                    <>
                        <SpellItem slug={false} wh={24} topSpace="large" bottomSpace="small" type="skill" />
                        <SpellItem slug={false} wh={24} bottomSpace="small" type="skill" />
                        <SpellItem slug={false} wh={24} bottomSpace="small" type="skill" />
                        <SpellItem slug={false} wh={24} bottomSpace="small" type="skill" />
                    </>
                )
            }
            {
                !loading && abilities.map((a, i) => {

                    const { flatData } = a;
                    const { activationKey = false, slug = false } = flatData;
                    const topSpace = i === 0 ? 'large' : false;

                    return (
                        <>
                            <ChampionSkillTooltipWrapper by="slug" identifier={slug}>
                                <SpellItem cursor="help" key={activationKey} slug={slug} wh={24} topSpace={topSpace} bottomSpace="small" type="skill" />
                            </ChampionSkillTooltipWrapper>
                        </>
                    );
                })
            }
        </FullSkillOrderAbilitiesStyles>
    );
};

export default FullSkillOrderAbilities;