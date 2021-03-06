import FullSkillOrderAbilities from '../full-skill-order-abilities';
import FullSkillOrderMappedSkills from '../full-skill-order-mapped-skills';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import { parseStyles } from '../../lib/helpers';

const FullSkillOrderDisplay = ({ abilities, skillOrder, loading = true }) => {

    const styled = useStyled();

    const FullSkillOrderDisplayStyles = styled(FlexRow)(() => {
        return parseStyles([
            tw`items-start`,
        ]);
    });

    return (
        <FullSkillOrderDisplayStyles>
            <FullSkillOrderAbilities abilities={abilities} loading={loading} />
            <FullSkillOrderMappedSkills skillOrder={skillOrder} loading={loading} />
        </FullSkillOrderDisplayStyles>
    );
};

export default FullSkillOrderDisplay;