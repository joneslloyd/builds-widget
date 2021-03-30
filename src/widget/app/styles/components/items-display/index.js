import { styled } from 'twin.macro';
import ItemsDisplayU from '../../utils/items-display';
import LoadingText from '../../utils/loading-text';

const ItemsDisplay = styled.div(({ loading }) => [
    ItemsDisplayU,
    (loading) && LoadingText,
]);

export default ItemsDisplay;