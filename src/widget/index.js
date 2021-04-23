import habitat from 'preact-habitat';
import { createRef } from 'preact';
import { memo } from 'preact/compat';
import * as goober from 'goober';
import './app/components/app-shadow-section';
import { useEffect, useState } from 'preact/hooks';

if (process.env.NODE_ENV === 'development') {
    // Must use require here as import statements are only allowed
    // to exist at top-level.
    require("preact/debug");
}

/* eslint-disable no-undef */
goober.setup(h);

const Widget = memo((props) => {

    const appShadowSectionRef = createRef();

    const [shadowNode, setShadowNode] = useState(false);

    useEffect(() => {
        const cr = appShadowSectionRef.current;
        if (cr !== shadowNode) {
            setShadowNode(cr);
        }
        return () => {
            if (shadowNode) {
                setShadowNode(false);
            }
        };
    }, [appShadowSectionRef]);

    return (
        <app-shadow-section ref={appShadowSectionRef} target={shadowNode} {...props} style="width: 100%; height: auto; max-width: 100%; max-height: 100%;" />
    );
});

const { render } = habitat(Widget);

render({
    selector: '[data-moba-widget="build"]',
    clean: true
});