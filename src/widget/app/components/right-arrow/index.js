import { memo } from 'preact/compat';
import DynamicSvg from '../dynamic-svg';

const RightArrow = ({ className }) => {

    return (
        <DynamicSvg name="right-arrow" className={className} />
    );
}

export default memo(RightArrow);