import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';

const SkillsStyles = tw.div`flex flex-col bg-transparent`;

const Skills = () => {

    const { dataApiBuildData: { data = {} } = {} } = useContext(BuildContext);

    return (
        <SkillsStyles>
            {JSON.stringify(data)}
        </SkillsStyles>
    );
};

export default Skills;