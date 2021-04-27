import ContentSquare from '../content-square';
import RightArrow from '../right-arrow';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import { parseStyles } from '../../lib/helpers';

const FullSkillOrderSkillsMap = ({ skillMap: rawSkillMap = [], loading = true }) => {

    const styled = useStyled();

    const FullSkillOrderSkillsMapStyles = styled(FlexRow)(() => {
        return parseStyles([
            tw`ml-2`,
        ]);
    });
    const FullSkillOrderContentSquareStyles = styled(ContentSquare)(({ leftSpace = false, rightSpace = false }) => {
        return parseStyles([
            'normal' === leftSpace ? tw`ml-2` : tw``,
            'normal' === rightSpace ? tw`mr-2` : tw``
        ]);
    });

    const skillMap = rawSkillMap.length > 0 ? rawSkillMap.filter(s => s !== 'R') : [
        0, 1, 2
    ];

    return (
        <FullSkillOrderSkillsMapStyles>
            {skillMap && skillMap.map((s, i) => {

                const rightArrowOutput = i !== skillMap.length - 1 ? (
                    <RightArrow />
                ) : false;

                const leftSpace = i !== 0 ? 'normal' : false;
                const rightSpace = i !== skillMap.length - 1 ? 'normal' : false;

                return (
                    <>
                        <FullSkillOrderContentSquareStyles leftSpace={leftSpace} rightSpace={rightSpace} letter={s} key={s} wh={16} loading={loading} noBg={true}>
                            {s}
                        </FullSkillOrderContentSquareStyles>
                        {rightArrowOutput}
                    </>
                );
            })}
        </FullSkillOrderSkillsMapStyles>
    );
};

export default FullSkillOrderSkillsMap;