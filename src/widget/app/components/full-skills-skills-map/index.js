import ContentSquare from '../content-square';
import RightArrow from '../right-arrow';
import tw, { styled } from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';

const FullSkillOrderSkillsMapStyles = tw(FlexRow)`ml-2`;
const FullSkillOrderContentSquareStyles = styled(ContentSquare)(({ leftSpace = false, rightSpace = false }) => [
    'normal' === leftSpace ? tw`ml-2` : tw``,
    'normal' === rightSpace ? tw`mr-2` : tw``
]);

const FullSkillOrderSkillsMap = ({ skillMap: rawSkillMap = [], loading = true }) => {

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