import tw, { styled } from 'twin.macro';
import SmallText from '../../utils/small-text';
import LoadingText from '../../utils/loading-text';

const SmallWhiteText = styled.span(({ loading }) => [
    SmallText,
    tw`text-white`,
    (loading) && LoadingText,
]);

export default SmallWhiteText;