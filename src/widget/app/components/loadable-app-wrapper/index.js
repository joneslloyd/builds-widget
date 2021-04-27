import loadable from '@loadable/component';
import { useStyled } from '../../lib/context/goober';
import tw from 'twin.macro';
import { parseStyles } from '../../lib/helpers';

const LoadableAppWrapper = () => {

    const LoadableApp = loadable(() => import(`../../`));
    const LoadableGlobalStyles = loadable(() => import(`../../styles/global-styles`));

    const styled = useStyled();

    const LoadableAppWrapperStyles = styled('div')(() => {
        return parseStyles([
            tw`flex justify-center`,
        ]);
    });

    return (
        <LoadableAppWrapperStyles>
            <LoadableGlobalStyles />
            <LoadableApp />
        </LoadableAppWrapperStyles>
    )
};

export default LoadableAppWrapper;