import { useState, useEffect } from 'preact/hooks';
import { useStyled } from './lib/context/goober';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import tw from 'twin.macro';

const App = () => {

  const [loaded, setLoaded] = useState(false);
  const styled = useStyled();

  const Container = styled('div')(({ loaded = false }) => [
    tw`hidden flex-col items-stretch justify-between h-full w-full min-h-full border border-widget-purple-border bg-widget-purple-light text-white rounded-md font-sans max-w-screen-xl sm:(flex)`,
    false === loaded ? tw`lg:(min-h-914) xl:(min-h-808)` : tw``,
  ]);

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
    }
    return () => {
      setLoaded(false);
    };
  }, []);

  return (
    <Container loaded={loaded}>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
};

export default App;