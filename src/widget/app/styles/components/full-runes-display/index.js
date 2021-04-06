import { styled } from 'twin.macro';
import FullRunesDisplayU from '../../utils/full-runes-display';
import LoadingText from '../../utils/loading-text';

const FullRunesDisplay = styled.div(({ loading }) => [
    FullRunesDisplayU,
    (loading) && LoadingText,
]);

export default FullRunesDisplay;