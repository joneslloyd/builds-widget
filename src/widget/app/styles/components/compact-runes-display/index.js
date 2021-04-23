import { useStyled } from '../../../lib/context/goober';
import CompactRunesDisplayU from '../../utils/compact-runes-display';
import LoadingText from '../../utils/loading-text';

const CompactRunesDisplay = ({ children, ...rest }) => {

    const styled = useStyled();

    const CompactRunesDisplayC = styled('div')(({ loading }) => [
        CompactRunesDisplayU,
        (loading) && LoadingText,
    ]);

    return (
        <CompactRunesDisplayC {...rest}>{children}</CompactRunesDisplayC>
    );
};

export default CompactRunesDisplay;