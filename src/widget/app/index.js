import Header from './components/header';
import Skills from './components/skills';
import Footer from './components/footer';
import tw from 'twin.macro';

const Container = tw.div`flex flex-col items-stretch justify-between min-h-full bg-widget-purple-light text-white rounded-md`;

const App = () => {

  return (
    <Container>
      <Header />
      <Skills />
      <Footer />
    </Container>
  );
};

export default App;