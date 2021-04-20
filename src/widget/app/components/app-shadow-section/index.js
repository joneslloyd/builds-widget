import register from 'preact-custom-element';
import { useEffect, useRef } from 'preact/hooks';
import LoadableAppWrapper from '../loadable-app-wrapper';
import AppProvider from '../../lib/context'
import * as goober from 'goober';
import tw, { styled } from 'twin.macro';

/* eslint-disable no-undef */
goober.setup(h);

const AppShadowSectionStyles = styled('div')(() => [
    tw`h-full w-full min-h-full max-w-screen-xl`,
]);

const AppShadowSection = (props) => {

    const appShadowSectionRef = useRef(null);

    useEffect(() => {

        const currentShadowSection = appShadowSectionRef.current;

        if (currentShadowSection) {

            goober.css.call({ target: currentShadowSection.base }, goober.extractCss());
        }
    }, [appShadowSectionRef]);

    return (
        <AppShadowSectionStyles ref={appShadowSectionRef}>
            <AppProvider {...props}>
                <LoadableAppWrapper />
            </AppProvider>
        </AppShadowSectionStyles>
    );
};

register(AppShadowSection, 'app-shadow-section', [], { shadow: true });

export default AppShadowSection;