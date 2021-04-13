import { createContext } from 'preact';
import { useContext } from 'preact/hooks';

export const StaticGlobalProps = createContext(true);

export const StaticGlobalPropsProvider = ({ layout = 'full', champion = 'amumu', children }) => {

    const store = {
        layout,
        champion
    };

    return (
        <StaticGlobalProps.Provider value={store}>{children}</StaticGlobalProps.Provider>
    );
};

export const useStaticGlobalProps = () => {

    const staticGlobalProps = useContext(StaticGlobalProps);

    if (typeof staticGlobalProps === 'undefined') {
        throw new Error('useStaticGlobalProps must be used within a StaticGlobalPropsProvider')
    }

    return staticGlobalProps
};