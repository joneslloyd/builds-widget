import { useGlob } from '../../lib/context/goober';
import tw, { theme } from 'twin.macro';

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

const resetData = `
   *,*::before,*::after{box-sizing:border-box;}:root{-moz-tab-size:4;tab-size:4;}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:RobotoMoba, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";}body{margin:0;font-family:inherit;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr[title]{text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0;color:inherit;}button,select{text-transform:none;}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;}::-moz-focus-inner{border-style:none;padding:0;}:-moz-focusring{outline:1px dotted ButtonText;}:-moz-ui-invalid{box-shadow:none;}legend{padding:0;}progress{vertical-align:baseline;}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto;}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item;}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0;}button{background-color:transparent;background-image:none;}button:focus{outline:5px auto -webkit-focus-ring-color;}fieldset{margin:0;padding:0;}ol,ul{list-style:none;margin:0;padding:0;}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}img{border-style:solid;}textarea{resize:vertical;}input::placeholder,textarea::placeholder{color:#9ca3af;}button,[role="button"]{cursor:pointer;}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;}a{color:inherit;text-decoration:inherit;}pre,code,kbd,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto;}@keyframes spin{to{transform:rotate(360deg);}}@keyframes ping{75%, 100%{transform:scale(2);opacity:0;}}@keyframes pulse{50%{opacity:.5;}}@keyframes bounce{0%, 100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1);}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1);}}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;
`;

const customStylesData = `
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

const GlobalStyles = () => {

  const global = useGlob();

  const CustomStyles = global(`:host{ all: initial !important; }` + customStylesData + resetData);

  return (
    <>
      <CustomStyles />
    </>
  );
};

export default GlobalStyles;