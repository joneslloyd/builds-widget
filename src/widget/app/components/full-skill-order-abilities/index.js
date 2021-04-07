import SpellItem from '../spell-item';
import tw from 'twin.macro';
import FlexCol from '../../styles/components/flex-col';

const FullSkillOrderAbilitiesStyles = tw(FlexCol)``;

const FullSkillOrderAbilities = ({ loading = true, abilities = [] }) => {
    return (
        <FullSkillOrderAbilitiesStyles>
            {
                loading && (
                    <>
                        <SpellItem slug={false} wh={24} topSpace="normal" bottomSpace="small" type="skill" />
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
                            <SpellItem key={activationKey} slug={slug} wh={24} topSpace={topSpace} bottomSpace="small" type="skill" />
                        </>
                    );
                })
            }
        </FullSkillOrderAbilitiesStyles>
    );
};

export default FullSkillOrderAbilities;