import register from 'preact-custom-element';
import { useEffect, useRef, useState } from 'preact/hooks';
import LoadableAppWrapper from '../loadable-app-wrapper';
import AppProvider from '../../lib/context'
import * as goober from 'goober';
import tw, { styled } from 'twin.macro';
import { globalStylesExport } from '../../styles/global-styles/global-styles-export';


const AppShadowSectionStyles = styled('div')(() => [
    tw`h-full w-full min-h-full max-w-screen-xl`,
]);

const AppShadowSection = (props) => {

    const appShadowSectionRef = useRef(null);
    const [shadowCss, setShadowCss] = useState('');

    useEffect(() => {
        setTimeout(() => {
            const currentShadowSection = appShadowSectionRef.current;

            if (currentShadowSection) {

                goober.styled.bind({ target: currentShadowSection.base });
                goober.css.bind({ target: currentShadowSection.base });

                setShadowCss(goober.extractCss() + globalStylesExport);
            }
        }, 1500);
    }, [appShadowSectionRef]);

    return (
        <AppShadowSectionStyles ref={appShadowSectionRef}>
            <style id={'_goober'} dangerouslySetInnerHTML={{ __html: ' ' + shadowCss }} />
            <AppProvider {...props}>
                <LoadableAppWrapper />
            </AppProvider>
        </AppShadowSectionStyles>
    );
};

register(AppShadowSection, 'app-shadow-section', [], { shadow: true });

export default AppShadowSection;