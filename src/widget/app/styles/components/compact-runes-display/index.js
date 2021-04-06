import { styled } from 'twin.macro';
import CompactRunesDisplayU from '../../utils/compact-runes-display';
import LoadingText from '../../utils/loading-text';

const CompactRunesDisplay = styled.div(({ loading }) => [
    CompactRunesDisplayU,
    (loading) && LoadingText,
]);

export default CompactRunesDisplay;