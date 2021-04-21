import register from 'preact-custom-element';
import { forwardRef } from 'preact/compat';
import LoadableAppWrapper from '../loadable-app-wrapper';
import AppProvider from '../../lib/context'
import tw, { styled, GlobalStyles } from 'twin.macro';

const AppShadowSectionStyles = styled('div')(() => [
    tw`h-full w-full min-h-full max-w-screen-xl`,
]);

const AppShadowSection = forwardRef((props, ref) => {

    const { shadowCss } = props;

    return (
        <AppShadowSectionStyles ref={ref}>
            <style id={'_goober'} dangerouslySetInnerHTML={{ __html: ' ' + shadowCss }} />
            <AppProvider {...props}>
                <LoadableAppWrapper />
            </AppProvider>
        </AppShadowSectionStyles>
    );
});

register(AppShadowSection, 'app-shadow-section', ['shadowCss'], { shadow: true });

export default AppShadowSection;