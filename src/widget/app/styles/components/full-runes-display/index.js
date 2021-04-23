import { useStyled } from '../../../lib/context/goober';
import FullRunesDisplayU from '../../utils/full-runes-display';
import LoadingText from '../../utils/loading-text';

const FullRunesDisplay = ({ children, ...rest }) => {

    const styled = useStyled();

    const FullRunesDisplayC = styled('div')(({ loading }) => [
        FullRunesDisplayU,
        (loading) && LoadingText,
    ]);

    return (
        <FullRunesDisplayC {...rest}>{children}</FullRunesDisplayC>
    );
};

export default FullRunesDisplay;