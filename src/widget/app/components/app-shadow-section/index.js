import register from 'preact-custom-element';
import { memo, forwardRef } from 'preact/compat';
import LoadableAppWrapper from '../loadable-app-wrapper';
import AppProvider from '../../lib/context'
import { theme } from 'twin.macro';

const AppShadowSection = memo(forwardRef((props, ref) => {

    const shadowStyles = `justify-content: center; display: flex;`;

    return (
        <div ref={ref} style={shadowStyles}>
            <AppProvider {...props}>
                <LoadableAppWrapper />
            </AppProvider>
        </div>
    );
}));

register(AppShadowSection, 'app-shadow-section', ['target'], { shadow: true });

export default AppShadowSection;