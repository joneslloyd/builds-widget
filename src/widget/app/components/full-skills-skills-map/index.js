import ContentSquare from '../content-square';
import tw, { styled } from 'twin.macro';

const FullSkillOrderSkillsMap = ({ skillMap: rawSkillMap = [], loading = true }) => {

    const skillMap = rawSkillMap.filter(s => s !== 'R');

    return (
        <>
            {skillMap && skillMap.map(s => {

                return (
                    <ContentSquare key={s} wh={16} loading={loading}>
                        {s}
                    </ContentSquare>
                );
            })}
        </>
    );
};

export default FullSkillOrderSkillsMap;