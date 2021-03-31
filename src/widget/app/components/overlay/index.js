import tw, { styled } from 'twin.macro';

const LetterOverlayStyles = styled('div')(({ wh = 16, letter = false }) => [
    tw`text-white font-bold text-xs bg-widget-purple-overlay rounded-sm flex justify-center absolute bottom-0 right-0`,
    'W' === letter ? tw`text-widget-keys-W!` : tw``,
    'Q' === letter ? tw`text-widget-keys-Q!` : tw``,
    'E' === letter ? tw`text-widget-keys-E!` : tw``,
    'R' === letter ? tw`text-widget-keys-R!` : tw``,
    { width: `${wh}px`, height: `${wh}px` }
]);

const LetterOverlayLetterSpan = tw.span`text-center`;

const LetterOverlay = ({ letter = false, wh = 16, children }) => {

    return (
        <LetterOverlayStyles letter={letter} wh={wh}>
            <LetterOverlayLetterSpan>{children}</LetterOverlayLetterSpan>
        </LetterOverlayStyles>
    );
};

export default LetterOverlay;