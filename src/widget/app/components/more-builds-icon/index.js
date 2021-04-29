import { memo } from 'preact/compat';
import DynamicSvg from '../dynamic-svg';


const MoreBuildsIcon = ({ className }) => {

    return (
        <DynamicSvg name="more-builds" className={className} />
    );
}

export default memo(MoreBuildsIcon);