import tw, { styled } from 'twin.macro';
import SmallText from '../../utils/small-text';
import LoadingText from '../../utils/loading-text';

const SmallPurpleText = styled.span(({ loading }) => [
    SmallText,
    tw`text-widget-purple-text`,
    (loading) && LoadingText,
]);

export default SmallPurpleText;