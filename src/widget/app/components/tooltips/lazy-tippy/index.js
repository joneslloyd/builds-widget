import { memo } from 'preact/compat';
import { useState, useCallback, useMemo } from 'preact/hooks';
import Tippy from '@tippyjs/react/headless';

export const LazyTippy = memo((props) => {

    const [mounted, setMounted] = useState(false);

    const onShow = useCallback(() => setMounted(true), []);
    const onHide = useCallback(() => setMounted(false), []);

    const lazyPlugin = useMemo(
        () => ({
            fn: () => ({
                onShow,
                onHide,
            }),
        }),
        [onShow, onHide]
    );

    const doRenderFunc = (d, parentRaw, ...rest) => {
        const parent = parentRaw ? parentRaw : props.appendTo;
        return (mounted && props.render) ? props.render(d, parent, ...rest) : null;
    };

    const renderFunc = useCallback((...args) => {
        doRenderFunc(...args);
    }, [props, mounted, lazyPlugin]);

    const computedProps = useMemo(
        () => ({
            ...props,
            plugins: [lazyPlugin, ...(props.plugins || [])],
            content: mounted ? props.content : '',
            ...((props.render && mounted) && renderFunc)
        }),
        [props, mounted, lazyPlugin]
    );

    return <Tippy {...computedProps} />;
});