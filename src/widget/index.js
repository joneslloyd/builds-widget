import habitat from 'preact-habitat';
import LoadableAppWrapper from './app/components/loadable-app-wrapper';
import AppProvider from './app/lib/context'
import { setup } from 'goober';

if (process.env.NODE_ENV === 'development') {
    // Must use require here as import statements are only allowed
    // to exist at top-level.
    require("preact/debug");
}

/* eslint-disable no-undef */
setup(h);

const Widget = (props) => {

    return (
        <>
            <AppProvider {...props}>
                <LoadableAppWrapper />
            </AppProvider>
        </>
    );
};

const { render } = habitat(Widget);

render({
    selector: '[data-moba-widget="build"]',
    clean: true
});