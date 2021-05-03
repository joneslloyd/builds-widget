import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import { validateStrEnumValue, Rolename } from '../../../lib/helpers';

export const StaticGlobalProps = createContext(true);

export const StaticGlobalPropsProvider = ({ layout = 'full', champion = 'amumu', role: roleRaw = 'UNKNOWN', children }) => {

    const role = roleRaw.toUpperCase();
    const validRole = validateStrEnumValue(Rolename, role);

    const store = {
        layout,
        champion,
        role,
        validRole
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