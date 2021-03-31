import tw, { styled } from 'twin.macro';

const OverlayStyles = styled('div')(({ wh = 16, letter = false }) => [
    tw`text-white`,
    'W' === letter ? tw`text-widget-keys-W!` : tw``,
    'Q' === letter ? tw`text-widget-keys-Q!` : tw``,
    'E' === letter ? tw`text-widget-keys-E!` : tw``,
    'R' === letter ? tw`text-widget-keys-R!` : tw``,
    { width: `${wh}px`, height: `${wh}px` }
]);

const Overlay = ({ letter = false, wh = 16 }) => {

    return (
        <OverlayStyles letter={letter} wh={wh}>
            {letter}
        </OverlayStyles>
    );
};

export default Overlay;