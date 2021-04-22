import register from 'preact-custom-element';
import { useStyled } from '../../lib/context/goober';
import { memo, forwardRef } from 'preact/compat';
import LoadableAppWrapper from '../loadable-app-wrapper';
import AppProvider from '../../lib/context'
import tw from 'twin.macro';

const AppShadowSection = memo(forwardRef((props, ref) => {

    const styled = useStyled();

    const AppShadowSectionStyles = styled('div')(() => [
        tw`h-full w-full min-h-full max-w-screen-xl`,
    ]);

    return (
        <AppShadowSectionStyles ref={ref}>
            <AppProvider {...props}>
                <LoadableAppWrapper />
            </AppProvider>
        </AppShadowSectionStyles>
    );
}));

register(AppShadowSection, 'app-shadow-section', ['target'], { shadow: true });

export default AppShadowSection;