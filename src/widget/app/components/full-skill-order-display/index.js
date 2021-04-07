import FullSkillOrderAbilities from '../full-skill-order-abilities';
import FullSkillOrderMappedSkills from '../full-skill-order-mapped-skills';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';

const FullSkillOrderDisplayStyles = tw(FlexRow)`items-start`;

const FullSkillOrderDisplay = ({ abilities, skillOrder, skillMap, loading = true }) => {

    return (
        <FullSkillOrderDisplayStyles>
            <FullSkillOrderAbilities abilities={abilities} loading={loading} />
            <FullSkillOrderMappedSkills skillOrder={skillOrder} skillMap={skillMap} loading={loading} />
        </FullSkillOrderDisplayStyles>
    );
};

export default FullSkillOrderDisplay;