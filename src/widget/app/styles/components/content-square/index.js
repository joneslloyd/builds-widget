import tw from 'twin.macro';
import { useStyled } from '../../../lib/context/goober';
import { parseStyles } from '../../../lib/helpers';
import LoadingText from '../../utils/loading-text';

const ContentSquareStyles = ({ children, ...rest }) => {

    const styled = useStyled();

    const ContentSquareStylesC = styled('div')(({ wh = 16, letter = false, loading = true, noBg = false }) => {
        return parseStyles([
            tw`text-white font-bold text-xs bg-widget-purple-overlay rounded-sm`,
            'W' === letter ? tw`text-widget-keys-W!` : tw``,
            'Q' === letter ? tw`text-widget-keys-Q!` : tw``,
            'E' === letter ? tw`text-widget-keys-E!` : tw``,
            'R' === letter ? tw`text-widget-keys-R!` : tw``,
            true === noBg ? tw`bg-transparent` : tw``,
            loading && (LoadingText),
            tw`m-0`,
            { width: `${wh}px`, height: `${wh}px` }
        ]);
    });

    return (
        <ContentSquareStylesC {...rest}>{children}</ContentSquareStylesC>
    );
};

export default ContentSquareStyles;