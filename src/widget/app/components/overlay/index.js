import { memo } from 'preact/compat';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import { parseStyles } from '../../lib/helpers';
import ContentSquareStyles from '../../styles/components/content-square';

const LetterOverlay = ({ letter = false, wh = 16, children, loading = true }) => {

    const styled = useStyled();

    const LetterOverlayStyles = styled(ContentSquareStyles)(() => {
        return parseStyles([
            tw`flex! justify-center! absolute! bottom-0! right-0!`,
        ]);
    });

    return (
        <LetterOverlayStyles wh={wh} letter={letter} loading={loading}>
            {children}
        </LetterOverlayStyles>
    );
};

export default memo(LetterOverlay);