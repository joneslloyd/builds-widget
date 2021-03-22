import GlobalStyles from './styles/global-styles'
import App from './app'

// Setup should be called just once in your app entry file
import { setup } from 'goober'
setup(h)

const Widget = (props) => {

  return (
    <>
      <GlobalStyles />
      <App {...props} />
    </>
  );
}

export default Widget