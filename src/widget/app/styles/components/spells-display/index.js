import { styled } from 'twin.macro';
import SpellsDisplayU from '../../utils/spells-display';
import LoadingText from '../../utils/loading-text';

const SpellsDisplay = styled.div(({ loading }) => [
    SpellsDisplayU,
    (loading) && LoadingText,
]);

export default SpellsDisplay;