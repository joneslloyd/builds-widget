import ContentSquare from '../content-square';
import tw, { styled } from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallPurpleText from '../../styles/components/small-purple-text';

const SkillOrderDisplayStyles = styled(FlexCol)(({ leftSpace }) => [
    tw`items-center`,
    'large' === leftSpace ? tw`md:(ml-2)` : tw``,
    'normal' === leftSpace ? tw`md:(ml-1.5)` : tw``,
    'small' === leftSpace ? tw`md:(ml-1)` : tw``,
    'very-small' === leftSpace ? tw`md:(ml-0.5)` : tw``,
]);
const SkillOrderNumberCol = tw(FlexRow)`mb-1`;
const SkillOrderKeyCol = tw(FlexRow)``;
const SkillOrderDisplayNumberSmallPurpleText = tw(SmallPurpleText)`capitalize text-xxs leading-none`;

const SkillOrderDisplay = ({ skillMap, skillOrder, loading = true }) => {

    return (
        <>
            {skillOrder.map((s, i) => {
                const number = i + 1;
                const key = skillMap[s - 1];
                const leftSpace = i !== 0 ? 'small' : false;
                return (
                    <SkillOrderDisplayStyles key={number} leftSpace={leftSpace}>
                        <SkillOrderNumberCol>
                            <SkillOrderDisplayNumberSmallPurpleText>{number}</SkillOrderDisplayNumberSmallPurpleText>
                        </SkillOrderNumberCol>
                        <SkillOrderKeyCol>
                            <ContentSquare letter={key} wh={20} loading={loading}>
                                {key}
                            </ContentSquare>
                        </SkillOrderKeyCol>
                    </SkillOrderDisplayStyles>
                );
            })}
        </>
    );
};

export default SkillOrderDisplay;