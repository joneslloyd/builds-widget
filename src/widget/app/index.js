import Header from './components/header';
import Skills from './components/skills';
import Footer from './components/footer';
import tw from 'twin.macro';

const Container = tw.div`flex flex-col items-stretch justify-between min-h-full border-widget-purple-border bg-widget-purple-light text-white rounded-md font-sans`;

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