import { useStyled } from '../../../lib/context/goober';
import tw from 'twin.macro';
import { parseStyles } from '../../../lib/helpers';
import ItemsDisplayU from '../../utils/items-display';
import LoadingText from '../../utils/loading-text';

const ItemsDisplay = ({ children, ...rest }) => {

    const styled = useStyled();

    const ItemsDisplayC = styled('div')(({ loading }) => {
        return parseStyles([
            ItemsDisplayU,
            loading ? LoadingText : tw``,
        ]);
    });

    return (
        <ItemsDisplayC {...rest}>{children}</ItemsDisplayC>
    );
};

export default ItemsDisplay;