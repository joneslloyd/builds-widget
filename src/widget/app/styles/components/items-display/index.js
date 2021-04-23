import { useStyled } from '../../../lib/context/goober';
import ItemsDisplayU from '../../utils/items-display';
import LoadingText from '../../utils/loading-text';

const ItemsDisplay = ({ children, ...rest }) => {

    const styled = useStyled();

    const ItemsDisplayC = styled('div')(({ loading }) => [
        ItemsDisplayU,
        (loading) && LoadingText,
    ]);

    return (
        <ItemsDisplayC {...rest}>{children}</ItemsDisplayC>
    );
};

export default ItemsDisplay;