import { memo } from 'preact/compat';
import { GooberProvider } from './goober';
import { StaticGlobalPropsProvider } from './static-global-props';
import { LoadingProvider } from './loading';
import { TooltipsProvider } from './tooltips';
import { DataApiProvider } from './data-api';
import { SquidexApiProvider } from './squidex-api';

const AppProvider = ({ children, ...rest }) => {
    return (
        <GooberProvider {...rest}>
            <StaticGlobalPropsProvider {...rest}>
                <LoadingProvider {...rest}>
                    <TooltipsProvider {...rest}>
                        <DataApiProvider {...rest}>
                            <SquidexApiProvider {...rest}>{children}</SquidexApiProvider>
                        </DataApiProvider>
                    </TooltipsProvider>
                </LoadingProvider>
            </StaticGlobalPropsProvider>
        </GooberProvider>
    );
};

export default memo(AppProvider);

