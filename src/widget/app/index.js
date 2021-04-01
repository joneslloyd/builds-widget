import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import tw from 'twin.macro';

const Container = tw.div`flex flex-col items-stretch justify-between h-full w-full min-h-full border border-widget-purple-border bg-widget-purple-light text-white rounded-md font-sans max-w-screen-xl`;

const App = () => {

  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
};

export default App;