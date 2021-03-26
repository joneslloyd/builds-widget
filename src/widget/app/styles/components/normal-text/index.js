import { styled } from 'twin.macro';
import StandardText from '../../utils/standard-text';
import LoadingText from '../../utils/loading-text';

const NormalText = styled.span(({ loading }) => [
    StandardText,
    (loading) && LoadingText,
]);

export default NormalText;