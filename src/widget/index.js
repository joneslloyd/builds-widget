import habitat from 'preact-habitat';
import GlobalStyles from './styles/global-styles';
import App from './app';
import { setup } from 'goober';

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