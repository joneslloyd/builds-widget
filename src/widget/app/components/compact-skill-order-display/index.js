import ContentSquare from '../content-square';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallPurpleText from '../../styles/components/small-purple-text';
import { parseStyles } from '../../lib/helpers';
import { useMemo } from 'preact/hooks';

const SkillOrderDisplay = ({ skillMap, skillOrder, loading = true }) => {

    const styled = useStyled();

    const SkillOrderDisplayStyles = useMemo(() => {
        return styled(FlexCol)(({ leftSpace }) => {
            return parseStyles([
                tw`items-center`,
                'large' === leftSpace ? tw`md:(ml-2)` : tw``,
                'normal' === leftSpace ? tw`md:(ml-1.5)` : tw``,
                'small' === leftSpace ? tw`md:(ml-1)` : tw``,
                'very-small' === leftSpace ? tw`md:(ml-0.5)` : tw``,
            ]);
        });
    }, [styled]);

    const SkillOrderNumberCol = useMemo(() => {
        return styled(FlexRow)(() => {
            return parseStyles([
                tw`mb-1`,
            ]);
        });
    }, [styled]);

    const SkillOrderKeyCol = useMemo(() => {
        return styled(FlexRow)(() => {
            return parseStyles([
                tw``,
            ]);
        });
    }, [styled]);

    const SkillOrderDisplayNumberSmallPurpleText = useMemo(() => {
        return styled(SmallPurpleText)(() => {
            return parseStyles([
                tw`capitalize text-xxs leading-none`,
            ]);
        });
    }, [styled]);

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