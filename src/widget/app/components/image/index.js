import { useState } from 'preact/hooks';
import tw, { styled } from 'twin.macro';

const Image = ({ src, alt, title, width, height, rounded = false }) => {

    const [loading, setLoading] = useState(true);

    const setLoadingFalse = () => {
        if (src && loading) {
            setLoading(false);
        }
    };

    const ImageLoadingStyles = styled.div(({ rounded }) => [
        tw`flex bg-widget-gold-light animate-pulse`,
        rounded === true && tw`rounded-full`,
        { 'width': `${width}px`, 'height': `${height}px` },
        !loading && { 'display': 'none' },
    ]);

    const ImageStyles = styled.img(({ rounded }) => [
        tw`flex bg-widget-gold-light`,
        rounded === true && tw`rounded-full`,
        loading && { 'object-position': '-99999px 99999px' },
    ]);

    return (
        <>
            <ImageLoadingStyles rounded={rounded} />
            {src && (
                <ImageStyles src={src} alt={alt} title={title} width={width} height={height} rounded={rounded} onLoad={setLoadingFalse} />
            )}
        </>
    );
};

export default Image;