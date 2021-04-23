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

    const computedProps = useMemo(
        () => ({
            ...props,
            plugins: [lazyPlugin, ...(props.plugins || [])],
            content: mounted ? props.content : '',
            render: props.render
                ? (...args) => {
                    return mounted && props.render ? props.render(...args) : null;
                }
                : undefined,
        }),
        [props, mounted, lazyPlugin]
    );

    return <Tippy {...props} />;
});