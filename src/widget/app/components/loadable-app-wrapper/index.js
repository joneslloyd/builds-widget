import loadable from '@loadable/component';
import { useStyled } from '../../lib/context/goober';
import tw from 'twin.macro';
import { parseStyles } from '../../lib/helpers';
import { memo } from 'preact/compat';

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
            <LoadableApp />
            <LoadableGlobalStyles />
        </LoadableAppWrapperStyles>
    )
};

export default memo(LoadableAppWrapper);