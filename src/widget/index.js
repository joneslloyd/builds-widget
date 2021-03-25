import habitat from 'preact-habitat';
import GlobalStyles from './app/styles/global-styles';
import App from './app';
import Context from './app/lib/context'
import { setup } from 'goober';

/* eslint-disable no-undef */
setup(h);

const Widget = (props) => {

    return (
        <>
            <Context {...props}>
                <GlobalStyles />
                <App />
            </Context>
        </>
    );
};

const { render } = habitat(Widget);

render({
    selector: '[data-moba-widget="build"]',
    clean: true
});