import { useState, useEffect } from 'preact/hooks';
import { useDataApi } from './lib/context/data-api';
import { useStaticGlobalProps } from './lib/context/static-global-props';
import { useLoading } from './lib/context/loading';
import { useStyled } from './lib/context/goober';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import tw from 'twin.macro';
import { parseStyles, Rolename } from './lib/helpers';
import { memo } from 'preact/compat';

const App = () => {

  const [loaded, setLoaded] = useState(false);
  const styled = useStyled();

  const { loading = true } = useLoading();
  const { daData: { data: { lol: { champion: { build } = {} } = {} } = {} } } = useDataApi();
  const { champion, role, validRole } = useStaticGlobalProps();

  const hasBuild = build ? true : false;

  const Container = styled('div')(({ loaded = false }) => {
    return parseStyles([
      tw`hidden flex-col items-stretch justify-between h-full w-full min-h-full border border-widget-purple-border bg-widget-purple-light text-white rounded-md font-sans max-w-screen-xl sm:(flex)`,
      false === loaded ? tw`lg:(min-h-914) xl:(min-h-808)` : tw``,
    ]);
  });

  const NoBuild = styled('p')(() => {
    return parseStyles([
      tw`block bg-widget-purple rounded-md px-6 py-5 border border-solid border-red-500 text-widget-purple-lightest font-medium`
    ]);
  });

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
    }
    return () => {
      setLoaded(false);
    };
  }, []);

  return (
    <>
      {(hasBuild && validRole) && (
        <Container loaded={loaded}>
          <Header />
          <Body />
          <Footer />
        </Container>
      )}
      {(!validRole && !loading) && (
        <NoBuild>Role is not a valid, uppercased role name. Role should be one of: {Object.keys(Rolename).map(function (r) { return Rolename[r] }).join(', ')}.</NoBuild>
      )}
      {(validRole && !hasBuild && !loading) && (
        <NoBuild>No build information available for <span style="text-transform: capitalize;">{champion}</span> in the <span style="text-transform: capitalize;">{role.toLowerCase()}</span> role.</NoBuild>
      )}
    </>
  );
};

export default memo(App);