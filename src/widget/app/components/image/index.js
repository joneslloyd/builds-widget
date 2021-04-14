import { useState } from 'preact/hooks';
import tw, { styled } from 'twin.macro';

const Image = ({ src = false, alt, title, width, height, rounded = false, bgColor = true, cursor = 'default' }) => {

    const [loading, setLoading] = useState(true);

    const setLoadingFalse = () => {
        if (src && loading) {
            setLoading(false);
        }
    };

    const ImageLoadingStyles = styled.div(({ rounded, cursor }) => [
        tw`flex bg-widget-gold-light animate-pulse`,
        rounded === 'full' && tw`rounded-full`,
        rounded === 'md' && tw`rounded-sm`,
        { 'width': `${width}px`, 'height': `${height}px` },
        !loading && { 'display': 'none' },
        {
            'cursor': cursor
        }
    ]);

    const ImageStyles = styled.img(({ rounded, cursor }) => [
        tw`flex`,
        bgColor === true && tw`bg-widget-gold-light`,
        rounded === 'full' && tw`rounded-full`,
        rounded === 'md' && tw`rounded-sm`,
        loading && { 'object-position': '-99999px 99999px' },
        {
            'cursor': cursor
        }
    ]);

    return (
        <>
            <ImageLoadingStyles rounded={rounded} cursor={cursor} />
            {src && (
                <ImageStyles src={src} alt={alt} title={title} width={width} height={height} rounded={rounded} onLoad={setLoadingFalse} cursor={cursor} />
            )}
        </>
    );
};

export default Image;