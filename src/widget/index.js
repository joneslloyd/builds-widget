import habitat from 'preact-habitat';
import LoadableAppWrapper from './app/components/loadable-app-wrapper';
import AppProvider from './app/lib/context'
import { setup } from 'goober';
import tw, { styled } from 'twin.macro';
import './app/components/app-shadow-section';

if (process.env.NODE_ENV === 'development') {
    // Must use require here as import statements are only allowed
    // to exist at top-level.
    require("preact/debug");
}

/* eslint-disable no-undef */
setup(h);

const AppShadowSectionStyles = styled('app-shadow-section')(() => [
    tw`h-full w-full min-h-full max-w-screen-xl`,
]);

const Widget = (props) => {

    return (
        <AppShadowSectionStyles>
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