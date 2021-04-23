import { useStyled } from '../../../lib/context/goober';
import SpellsDisplayU from '../../utils/spells-display';
import LoadingText from '../../utils/loading-text';

const SpellsDisplay = ({ children, ...rest }) => {

    const styled = useStyled();

    const SpellsDisplayC = styled('div')(({ loading }) => [
        SpellsDisplayU,
        (loading) && LoadingText,
    ]);

    return (
        <SpellsDisplayC {...rest}>{children}</SpellsDisplayC>
    );
};

export default SpellsDisplay;