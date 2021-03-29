import { styled } from 'twin.macro';
import RunesDisplayU from '../../utils/runes-display';
import LoadingText from '../../utils/loading-text';

const RunesDisplay = styled.div(({ loading }) => [
    RunesDisplayU,
    (loading) && LoadingText,
]);

export default RunesDisplay;