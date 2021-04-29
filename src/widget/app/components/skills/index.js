import { memo } from 'preact/compat';
import loadable from '@loadable/component';
import { useStaticGlobalProps } from '../../lib/context/static-global-props';

const Skills = (props) => {

    const { layout = 'full' } = useStaticGlobalProps();

    const DynamicSkills = loadable(() => import(`../${layout}-skills/index.js`));

    return (
        <DynamicSkills {...props} />
    )
};

export default memo(Skills);