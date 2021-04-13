import { memo } from 'preact/compat';
import tw from 'twin.macro';
import ContentSquareStyles from '../../styles/components/content-square';

const LetterOverlayStyles = tw(ContentSquareStyles)`flex! justify-center! absolute! bottom-0! right-0!`;

const LetterOverlay = ({ letter = false, wh = 16, children, loading = true }) => {

    return (
        <LetterOverlayStyles wh={wh} letter={letter} loading={loading}>
            {children}
        </LetterOverlayStyles>
    );
};

export default memo(LetterOverlay);