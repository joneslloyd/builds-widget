import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';

const SkillsStyles = tw.div`flex flex-col bg-transparent`;

const Skills = () => {

    const { buildData } = useContext(BuildContext);
    const { data } = buildData;

    return (
        <SkillsStyles>
            {JSON.stringify(data)}
        </SkillsStyles>
    );
};

export default Skills;