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

    const currentShadowSection = appShadowSectionRef.current;

    if (currentShadowSection) {

        goober.css.call({ target: currentShadowSection.base }, goober.extractCss() + globalStylesExport);

        const gooberStyled = goober.styled.bind({ target: currentShadowSection.base });
        const gooberCss = goober.css.bind({ target: currentShadowSection.base });
    }

    // useEffect(() => {
    //     const currentShadowSection = appShadowSectionRef.current;

    //     if (currentShadowSection) {

    //         const gooberStyled = goober.styled.bind({ target: currentShadowSection.base });
    //         const gooberCss = goober.css.bind({ target: currentShadowSection.base });


    //         //goober.css.call({ target: currentShadowSection.base }, globalStylesExport);

    //         setShadowCss(goober.extractCss() + globalStylesExport);


    //         //goober.styled.call({ g: 1 }, 'div').call(null, globalStylesExport);

    //         //goober.css.bind({ g: 1 })`${globalStylesExport}`;
    //     }
    // }, [appShadowSectionRef]);

    return (
        <AppShadowSectionStyles ref={appShadowSectionRef}>
            {/* <style id={'_goober'} dangerouslySetInnerHTML={{ __html: ' ' + shadowCss }} /> */}
            <AppProvider {...props}>
                <LoadableAppWrapper />
            </AppProvider>
        </AppShadowSectionStyles>
    );
};

register(AppShadowSection, 'app-shadow-section', [], { shadow: true });

export default AppShadowSection;