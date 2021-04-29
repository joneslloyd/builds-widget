import CompactSkillPriority from '../compact-skill-priority';
import CompactSkillOrder from '../compact-skill-order';
import { memo } from 'preact/compat';

const CompactSkills = () => {

    return (
        <>
            <CompactSkillPriority />
            <CompactSkillOrder />
        </>
    );
};

export default memo(CompactSkills);