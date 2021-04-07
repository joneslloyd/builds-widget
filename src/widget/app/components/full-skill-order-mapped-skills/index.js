import ContentSquare from '../content-square';
import tw, { styled } from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallPurpleText from '../../styles/components/small-purple-text';

const FullSkillOrderMappedSkillsStyles = tw(FlexRow)``;
const FullSkillOrderDisplayStyles = styled(FlexCol)(({ leftSpace, keyHeight = 0 }) => [
    tw`items-center ml-2.5 relative before:(absolute z-0 inset-1/3 left-49p content block w-0.25 h-full bg-widget-purple-text bg-opacity-5)`,
    'large' === leftSpace ? tw`md:(ml-2)` : tw``,
    'normal' === leftSpace ? tw`md:(ml-1.5)` : tw``,
    'small' === leftSpace ? tw`md:(ml-1)` : tw``,
    'very-small' === leftSpace ? tw`md:(ml-0.5)` : tw``,
    0 === keyHeight ? tw`items-center ml-2.5 relative before:(absolute z-0 inset-36p left-49p content block w-0.25 h-22-24p bg-widget-purple-text-25 bg-opacity-5)` : tw``,
    1 === keyHeight ? tw`items-center ml-2.5 relative before:(absolute z-0 inset-36p left-49p content block w-0.25 h-111-15p bg-widget-purple-text-25 bg-opacity-5)` : tw``,
    2 === keyHeight ? tw`items-center ml-2.5 relative before:(absolute z-0 inset-36p left-49p content block w-0.25 h-200p bg-widget-purple-text-25 bg-opacity-5)` : tw``,
    3 === keyHeight ? tw`items-center ml-2.5 relative before:(absolute z-0 inset-36p left-49p content block w-0.25 h-289p bg-widget-purple-text-25 bg-opacity-5)` : tw``,
]);
const FullSkillOrderNumberCol = tw(FlexRow)`mb-1`;
const FullSkillOrderKeyCol = styled(FlexRow)(({ keyHeight = 0 }) => [
    tw`relative`,
    0 === keyHeight ? tw`top-1.6` : tw``,
    1 === keyHeight ? tw`top-9.6` : tw``,
    2 === keyHeight ? tw`top-17.6` : tw``,
    3 === keyHeight ? tw`top-25.5` : tw``,
]);
const FullSkillOrderDisplayNumberSmallPurpleText = tw(SmallPurpleText)`capitalize text-xs leading-none`;

const FullSkillOrderMappedSkills = ({ skillOrder, skillMap, loading = true }) => {

    return (
        <FullSkillOrderMappedSkillsStyles>
            {skillOrder.map((s, i) => {
                const number = i + 1;
                const key = skillMap[s - 1];
                const leftSpace = i !== 0 ? 'small' : false;

                return (
                    <FullSkillOrderDisplayStyles keyHeight={s - 1} key={number} leftSpace={leftSpace}>
                        <FullSkillOrderNumberCol>
                            <FullSkillOrderDisplayNumberSmallPurpleText>{number}</FullSkillOrderDisplayNumberSmallPurpleText>
                        </FullSkillOrderNumberCol>
                        <FullSkillOrderKeyCol keyHeight={s - 1}>
                            <ContentSquare letter={key} wh={20} loading={loading}>
                                {key}
                            </ContentSquare>
                        </FullSkillOrderKeyCol>
                    </FullSkillOrderDisplayStyles>
                );
            })}
        </FullSkillOrderMappedSkillsStyles>
    );
};

export default FullSkillOrderMappedSkills;