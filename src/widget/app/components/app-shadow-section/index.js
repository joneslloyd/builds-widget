import register from 'preact-custom-element';
import LoadableAppWrapper from '../loadable-app-wrapper';
import AppProvider from '../../lib/context'
import tw, { styled } from 'twin.macro';

const AppShadowSectionStyles = styled('div')(() => [
    tw`h-full w-full min-h-full max-w-screen-xl`,
]);

const AppShadowSection = (props) => {

    return (
        <AppShadowSectionStyles>
            <AppProvider {...props}>
                <LoadableAppWrapper />
            </AppProvider>
        </AppShadowSectionStyles>
    );
};

register(AppShadowSection, 'app-shadow-section', ['shadowCss'], { shadow: true });

export default AppShadowSection;