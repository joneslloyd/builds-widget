import ContentSquare from '../content-square';
import RightArrow from '../right-arrow';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import { parseStyles } from '../../lib/helpers';

const FullSkillOrderSkillsMap = ({ skillOrder: rawSkillOrder = [], loading = true }) => {

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

    const skillOrder = rawSkillOrder.length > 0 ? rawSkillOrder.filter(s => s !== 'R') : [
        1, 2, 3
    ];

    return (
        <FullSkillOrderSkillsMapStyles>
            {skillOrder && skillOrder.map((s, i) => {

                const rightArrowOutput = i !== skillOrder.length - 1 ? (
                    <RightArrow />
                ) : false;

                const leftSpace = i !== 0 ? 'normal' : false;
                const rightSpace = i !== skillOrder.length - 1 ? 'normal' : false;

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