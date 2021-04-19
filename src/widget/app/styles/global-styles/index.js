import { createGlobalStyles } from 'goober/global';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

/* Webfonts from: https://google-webfonts-helper.herokuapp.com/fonts/roboto?subsets=latin,latin-ext */
/* We can grab more from here as & when they're needed, for example when we support non-Latin languages */
import RobotoLatinItalicWoff2 from './fonts/roboto-v20-latin-ext_latin-italic.woff2'
import RobotoLatinItalicWoff from './fonts/roboto-v20-latin-ext_latin-italic.woff';
import RobotoLatinRegularWoff2 from './fonts/roboto-v20-latin-ext_latin-regular.woff2';
import RobotoLatinRegularWoff from './fonts/roboto-v20-latin-ext_latin-regular.woff';
import RobotoLatin500Woff2 from './fonts/roboto-v20-latin-ext_latin-500.woff2';
import RobotoLatin500Woff from './fonts/roboto-v20-latin-ext_latin-500.woff';
import RobotoLatin500ItalicWoff2 from './fonts/roboto-v20-latin-ext_latin-500italic.woff2';
import RobotoLatin500ItalicWoff from './fonts/roboto-v20-latin-ext_latin-500italic.woff';
import RobotoLatin700Woff2 from './fonts/roboto-v20-latin-ext_latin-700.woff2';
import RobotoLatin700Woff from './fonts/roboto-v20-latin-ext_latin-700.woff';
import RobotoLatin700ItalicWoff2 from './fonts/roboto-v20-latin-ext_latin-700italic.woff2';
import RobotoLatin700ItalicWoff from './fonts/roboto-v20-latin-ext_latin-700italic.woff';

const CustomStyles = createGlobalStyles`
  :host {
    all: initial;
  }
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};

    /* roboto-700italic - latin-ext_latin */
    @font-face {
      font-family: 'RobotoMoba';
      font-style: italic;
      font-weight: 700;
      src: local(''),
          url('${RobotoLatin700ItalicWoff2}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('${RobotoLatin700ItalicWoff}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* roboto-700 - latin-ext_latin */
    @font-face {
      font-family: 'RobotoMoba';
      font-style: normal;
      font-weight: 700;
      src: local(''),
          url('${RobotoLatin700Woff2}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('${RobotoLatin700Woff}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* roboto-500italic - latin-ext_latin */
    @font-face {
      font-family: 'RobotoMoba';
      font-style: italic;
      font-weight: 500;
      src: local(''),
          url('${RobotoLatin500ItalicWoff2}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('${RobotoLatin500ItalicWoff}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* roboto-500 - latin-ext_latin */
    @font-face {
      font-family: 'RobotoMoba';
      font-style: normal;
      font-weight: 500;
      src: local(''),
          url('${RobotoLatin500Woff2}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('${RobotoLatin500Woff}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* roboto-italic - latin-ext_latin */
    @font-face {
      font-family: 'RobotoMoba';
      font-style: italic;
      font-weight: 400;
      src: local(''),
          url('${RobotoLatinItalicWoff2}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('${RobotoLatinItalicWoff}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* roboto-regular - latin-ext_latin */
    @font-face {
      font-family: 'RobotoMoba';
      font-style: normal;
      font-weight: 400;
      src: local(''),
          url('${RobotoLatinRegularWoff2}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('${RobotoLatinRegularWoff}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    ${tw`antialiased`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;