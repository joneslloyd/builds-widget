import { memo } from 'preact/compat';
import DynamicSvg from '../dynamic-svg';

const PlatinumPlusIcon = ({ className }) => {

    return (
        <DynamicSvg name="platinum-plus" className={className} />
    );
}

export default memo(PlatinumPlusIcon);