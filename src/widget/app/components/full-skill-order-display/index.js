import { useMemo } from 'preact/hooks';
import FullSkillOrderAbilities from '../full-skill-order-abilities';
import FullSkillOrderMappedSkills from '../full-skill-order-mapped-skills';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import { parseStyles } from '../../lib/helpers';

const FullSkillOrderDisplay = ({ abilities, skillOrder, skillMap, loading = true }) => {

    const styled = useStyled();

    const FullSkillOrderDisplayStyles = useMemo(() => {
        return styled(FlexRow)(() => {
            return parseStyles([
                tw`items-start`,
            ]);
        })
    }, [styled]);

    return (
        <FullSkillOrderDisplayStyles>
            <FullSkillOrderAbilities abilities={abilities} loading={loading} />
            <FullSkillOrderMappedSkills skillOrder={skillOrder} skillMap={skillMap} loading={loading} />
        </FullSkillOrderDisplayStyles>
    );
};

export default FullSkillOrderDisplay;