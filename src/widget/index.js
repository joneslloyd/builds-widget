import habitat from 'preact-habitat';
import { useEffect, useRef } from 'preact/hooks';
import LoadableAppWrapper from './app/components/loadable-app-wrapper';
import AppProvider from './app/lib/context'
import * as goober from 'goober';
import tw, { styled } from 'twin.macro';
import './app/components/app-shadow-section';

if (process.env.NODE_ENV === 'development') {
    // Must use require here as import statements are only allowed
    // to exist at top-level.
    require("preact/debug");
}

/* eslint-disable no-undef */
goober.setup(h);

const AppShadowSectionStyles = styled('app-shadow-section')(() => [
    tw`h-full w-full min-h-full max-w-screen-xl`,
]);

const Widget = (props) => {

    const appShadowSectionRef = useRef(null);

    useEffect(() => {

        const currentShadowSection = appShadowSectionRef.current;

        if (currentShadowSection) {

            console.log(currentShadowSection.base)

            //Get style content from <head> style tag
            const headStyleTag = document.querySelectorAll('head style#_goober')[0];

            if (headStyleTag) {
                const headStyles = headStyleTag.textContent;

                //Remove <head> style tag
                headStyleTag.parentNode.removeChild(headStyleTag);

                //Create new <style> tag in shadow dom
                const newStyle = document.createElement('style');
                newStyle.id = '_goober';
                newStyle.textContent = headStyles;
                currentShadowSection.base.appendChild(newStyle);
                //goober.css.call({ target: currentShadowSection }, headStyles);
            }
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

const { render } = habitat(Widget);

render({
    selector: '[data-moba-widget="build"]',
    clean: true
});