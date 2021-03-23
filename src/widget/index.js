import habitat from 'preact-habitat';
import GlobalStyles from './app/styles/global-styles';
import App from './app';
import { setup } from 'goober';

/* eslint-disable no-undef */
setup(h);

const Widget = (props) => {

    return (
        <>
            <GlobalStyles />
            <App {...props} />
        </>
    );
};

const { render } = habitat(Widget);

render({
    selector: '[data-moba-widget="build"]',
    clean: true
});