import { useMemo } from 'preact/hooks';
import { useStyled } from '../../../lib/context/goober';
import tw from 'twin.macro';
import { parseStyles } from '../../../lib/helpers';
import CompactRunesDisplayU from '../../utils/compact-runes-display';
import LoadingText from '../../utils/loading-text';

const CompactRunesDisplay = ({ children, ...rest }) => {

    const styled = useStyled();

    const CompactRunesDisplayC = useMemo(() => {
        return styled('div')(({ loading }) => {
            return parseStyles([
                CompactRunesDisplayU,
                loading ? LoadingText : tw``,
            ]);
        })
    }, [styled]);

    return (
        <CompactRunesDisplayC {...rest}>{children}</CompactRunesDisplayC>
    );
};

export default CompactRunesDisplay;