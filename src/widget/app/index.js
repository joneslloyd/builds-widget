import tw from 'twin.macro';
import Button from './components/button';
import Logo from './components/logo';

const Container = tw.div`flex flex-col items-center justify-center h-screen
  bg-gradient-to-b from-electric to-ribbon`;

const ButtonList = tw.div`flex flex-col justify-center h-full gap-y-5`;

const App = (props) => {

  const { champion } = props;

  return (
    <Container>
      <ButtonList>
        <Button variant="primary">Submit</Button>
        <Button variant="secondary">Cancel</Button>
        <Button isSmall>Close</Button>
      </ButtonList>
      <Logo />
      <p>You've selected {champion}</p>
    </Container>
  );
};

export default App;