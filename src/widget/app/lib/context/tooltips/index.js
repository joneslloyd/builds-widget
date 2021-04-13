import { createContext } from 'preact';
import { useContext, useState } from 'preact/hooks';

export const TooltipsContext = createContext(null);

export const TooltipsProvider = ({ children }) => {

    //Tooltips data
    const [ttData, setTtData] = useState({
        tooltips: [],
        loading: false,
        error: false,
    });

    const store = {
        ttData,
        setTtData
    };

    return (
        <TooltipsContext.Provider value={store}>{children}</TooltipsContext.Provider>
    );
};

export const useTooltips = () => {

    const tooltipsState = useContext(TooltipsContext);

    if (typeof tooltipsState === 'undefined') {
        throw new Error('useTooltips must be used within a TooltipsProvider')
    }

    return tooltipsState
};