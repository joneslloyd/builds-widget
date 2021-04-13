import { StaticGlobalPropsProvider } from './static-global-props';
import { LoadingProvider } from './loading';
import { TooltipsProvider } from './tooltips';
import { DataApiProvider } from './data-api';
import { SquidexApiProvider } from './squidex-api';

const AppProvider = ({ children, champion, layout }) => {
    return (
        <StaticGlobalPropsProvider champion={champion} layout={layout}>
            <LoadingProvider>
                <TooltipsProvider>
                    <DataApiProvider>
                        <SquidexApiProvider>{children}</SquidexApiProvider>
                    </DataApiProvider>
                </TooltipsProvider>
            </LoadingProvider>
        </StaticGlobalPropsProvider>
    );
};

export default AppProvider;

