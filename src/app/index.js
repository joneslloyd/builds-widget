import habitat from 'preact-habitat';
import App from './components/App.jsx';

const { render } = habitat(App);

render({
  selector: '[data-moba-widget="build"]',
  clean: true
});
