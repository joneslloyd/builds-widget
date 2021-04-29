import { memo } from 'preact/compat';
import { useCallback, useEffect, useState } from 'preact/hooks';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import { parseStyles } from '../../lib/helpers';

const Image = ({ src = false, alt, title, width, height, rounded = false, bgColor = true, cursor = 'default' }) => {

    const styled = useStyled();

    const [loading, setLoading] = useState(true);

    const doSetLoadingFalseFunc = () => {
        if (src && loading) {
            setLoading(false);
        }
    };

    const setLoadingFalseFunc = useCallback(() => {
        doSetLoadingFalseFunc();
    }, []);

    const blankFunc = () => {
        return;
    };

    const [setLoadingFalse, doSetLoadingFalse] = useState(blankFunc);

    useEffect(() => {
        doSetLoadingFalse(setLoadingFalseFunc);
        () => {
            doSetLoadingFalse(blankFunc);
        };
    }, []);


    const ImageLoadingStyles = styled('div')(({ rounded, cursor }) => {
        return parseStyles([
            tw`flex bg-widget-gold-light animate-pulse`,
            rounded === 'full' ? tw`rounded-full` : tw``,
            rounded === 'md' ? tw`rounded-sm` : tw``,
            { 'width': `${width}px`, 'height': `${height}px` },
            !loading ? { 'display': 'none' } : tw``,
            {
                'cursor': cursor
            }
        ]);
    });

    const ImageStyles = styled('img')(({ rounded, cursor }) => {
        return parseStyles([
            tw`flex`,
            bgColor === true ? tw`bg-widget-gold-light` : tw``,
            rounded === 'full' ? tw`rounded-full` : tw``,
            rounded === 'md' ? tw`rounded-sm` : tw``,
            loading ? { 'object-position': '-99999px 99999px' } : tw``,
            {
                'cursor': cursor
            }
        ]);
    });

    return (
        <>
            <ImageLoadingStyles rounded={rounded} cursor={cursor} />
            {src && (
                <ImageStyles src={src} alt={alt} title={title} width={width} height={height} rounded={rounded} onLoad={setLoadingFalse} cursor={cursor} />
            )}
        </>
    );
};

export default memo(Image);