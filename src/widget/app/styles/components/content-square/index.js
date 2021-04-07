import tw, { styled } from 'twin.macro';
import LoadingText from '../../utils/loading-text';

const ContentSquareStyles = styled.div(({ wh = 16, letter = false, loading = true, noBg = false }) => [
    tw`text-white font-bold text-xs bg-widget-purple-overlay rounded-sm`,
    'W' === letter ? tw`text-widget-keys-W!` : tw``,
    'Q' === letter ? tw`text-widget-keys-Q!` : tw``,
    'E' === letter ? tw`text-widget-keys-E!` : tw``,
    'R' === letter ? tw`text-widget-keys-R!` : tw``,
    true === noBg ? tw`bg-transparent` : tw``,
    loading && (LoadingText),
    { width: `${wh}px`, height: `${wh}px` }
]);

export default ContentSquareStyles;