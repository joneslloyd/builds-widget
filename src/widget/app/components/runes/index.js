import { memo } from 'preact/compat';
import loadable from '@loadable/component';
import { useStaticGlobalProps } from '../../lib/context/static-global-props';

const Runes = (props) => {

    const { layout } = useStaticGlobalProps();

    const DynamicRunes = loadable(() => import(`../${layout}-runes/index.js`));

    return (
        <DynamicRunes {...props} />
    )
};

export default memo(Runes);