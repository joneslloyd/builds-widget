import { useMemo } from 'preact/hooks';
import loadable from '@loadable/component';
import { useStyled, useCustomTarget } from '../../lib/context/goober';
import tw from 'twin.macro';
import { parseStyles } from '../../lib/helpers';

const LoadableAppWrapper = () => {

    const LoadableApp = loadable(() => import(`../../`));
    const LoadableGlobalStyles = loadable(() => import(`../../styles/global-styles`));

    const customTarget = useCustomTarget();
    const styled = useStyled();

    const LoadableAppWrapperStyles = customTarget ? useMemo(() => {
        return styled('div')(() => {
            return parseStyles([
                tw`flex justify-center`,
            ]);
        })
    }, [styled]) : 'div';

    return (
        <LoadableAppWrapperStyles>
            <LoadableApp />
            <LoadableGlobalStyles />
        </LoadableAppWrapperStyles>
    )
};

export default LoadableAppWrapper;