import ContentSquare from '../content-square';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallPurpleText from '../../styles/components/small-purple-text';
import { parseStyles } from '../../lib/helpers';

const FullSkillOrderMappedSkills = ({ skillOrder, skillMap, loading = true }) => {

    const styled = useStyled();

    const FullSkillOrderMappedSkillsStyles = styled(FlexRow)(() => {
        return parseStyles([
            tw``,
        ]);
    });
    const FullSkillOrderDisplayStyles = styled(FlexCol)(({ leftSpace, keyHeight = 0 }) => {
        return parseStyles([
            tw`items-center ml-2.5 relative before:(absolute z-0 inset-1/3 left-49p content block w-0.25 h-full bg-widget-purple-text bg-opacity-5)`,
            0 === keyHeight ? tw`items-center ml-2.5 relative before:(absolute z-0 inset-36p left-49p content block w-0.25 h-22-24p bg-widget-purple-text-25 bg-opacity-5)` : tw``,
            1 === keyHeight ? tw`items-center ml-2.5 relative before:(absolute z-0 inset-36p left-49p content block w-0.25 h-111-15p bg-widget-purple-text-25 bg-opacity-5)` : tw``,
            2 === keyHeight ? tw`items-center ml-2.5 relative before:(absolute z-0 inset-36p left-49p content block w-0.25 h-200p bg-widget-purple-text-25 bg-opacity-5)` : tw``,
            3 === keyHeight ? tw`items-center ml-2.5 relative before:(absolute z-0 inset-36p left-49p content block w-0.25 h-289p bg-widget-purple-text-25 bg-opacity-5)` : tw``,
            'large' === leftSpace ? tw`md:(ml-3)` : tw``,
            'normal' === leftSpace ? tw`md:(ml-2.5)` : tw``,
            'small' === leftSpace ? tw`md:(ml-2)` : tw``,
            'very-small' === leftSpace ? tw`md:(ml-0-76)` : tw``,
        ]);
    });
    const FullSkillOrderNumberCol = styled(FlexRow)(() => {
        return parseStyles([
            tw`mb-1`,
        ]);
    });
    const FullSkillOrderKeyCol = styled(FlexRow)(({ keyHeight = 0 }) => {
        return parseStyles([
            tw`relative`,
            0 === keyHeight ? tw`top-1.6` : tw``,
            1 === keyHeight ? tw`top-9.6` : tw``,
            2 === keyHeight ? tw`top-17.6` : tw``,
            3 === keyHeight ? tw`top-25.5` : tw``,
        ]);
    });
    const FullSkillOrderDisplayNumberSmallPurpleText = styled(SmallPurpleText)(() => {
        return parseStyles([
            tw`capitalize text-xs leading-none`,
        ]);
    });

    return (
        <FullSkillOrderMappedSkillsStyles>
            {skillOrder.map((s, i) => {
                const number = i + 1;
                const key = skillMap[s - 1];
                const leftSpace = i !== 0 ? 'very-small' : 'small';

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