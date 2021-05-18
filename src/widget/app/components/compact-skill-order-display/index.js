import ContentSquare from '../content-square';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallPurpleText from '../../styles/components/small-purple-text';
import { parseStyles, SkillKeyInt } from '../../lib/helpers';

const SkillOrderDisplay = ({ skillOrder, loading = true }) => {

    const styled = useStyled();

    const SkillOrderDisplayStyles = styled(FlexCol)(({ leftSpace }) => {
        return parseStyles([
            tw`items-center`,
            'large' === leftSpace ? tw`md:(ml-2)` : tw``,
            'normal' === leftSpace ? tw`md:(ml-1.5)` : tw``,
            'small' === leftSpace ? tw`md:(ml-1)` : tw``,
            'very-small' === leftSpace ? tw`md:(ml-0.5)` : tw``,
        ]);
    });
    const SkillOrderNumberCol = styled(FlexRow)(() => {
        return parseStyles([
            tw`mb-1`,
        ]);
    });
    const SkillOrderKeyCol = styled(FlexRow)(() => {
        return parseStyles([
            tw``,
        ]);
    });
    const SkillOrderDisplayNumberSmallPurpleText = styled(SmallPurpleText)(() => {
        return parseStyles([
            tw`capitalize text-xxs leading-none`,
        ]);
    });

    return (
        <>
            {skillOrder.map((s, i) => {
                const number = i + 1;
                const key = SkillKeyInt[s];
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