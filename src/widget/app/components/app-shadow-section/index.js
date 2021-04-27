import register from 'preact-custom-element';
import { memo, forwardRef } from 'preact/compat';
import LoadableAppWrapper from '../loadable-app-wrapper';
import AppProvider from '../../lib/context'

const AppShadowSection = memo(forwardRef((props, ref) => {

    return (
        <div ref={ref}>
            <AppProvider {...props}>
                <LoadableAppWrapper />
            </AppProvider>
        </div>
    );
}));

register(AppShadowSection, 'app-shadow-section', ['target'], { shadow: true });

export default AppShadowSection;