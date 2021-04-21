import habitat from 'preact-habitat';
import { createRef } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';
import * as goober from 'goober';
import { globalStylesExport } from './app/styles/global-styles/global-styles-export';
import './app/components/app-shadow-section';

if (process.env.NODE_ENV === 'development') {
    // Must use require here as import statements are only allowed
    // to exist at top-level.
    require("preact/debug");
}

/* eslint-disable no-undef */
goober.setup(h);

const Widget = (props) => {

    const headStyles = document.head.querySelector('#_goober')?.firstChild?.textContent || false;
    const appShadowSectionRef = createRef();
    const [shadowCss, setShadowCss] = useState(false);

    const doSetGoober = () => {

        const currentShadowSection = appShadowSectionRef.current;

        if (currentShadowSection) {

            goober.styled.bind({ target: currentShadowSection });
            goober.css.bind({ target: currentShadowSection });

            const stylesToAdd = headStyles ? headStyles + globalStylesExport : globalStylesExport;

            setShadowCss(stylesToAdd);

        }
    };

    const setGoober = useCallback(() => {
        doSetGoober();
    }, [appShadowSectionRef, headStyles]);

    useEffect(() => {
        setGoober();
    }, [appShadowSectionRef, headStyles]);

    return (
        <app-shadow-section ref={appShadowSectionRef} shadowCss={shadowCss} {...props} />
    );
};

const { render } = habitat(Widget);

render({
    selector: '[data-moba-widget="build"]',
    clean: true
});