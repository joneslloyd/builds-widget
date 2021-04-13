import { createContext } from 'preact';
import { useContext, useState } from 'preact/hooks';

export const LoadingContext = createContext(true);

export const LoadingProvider = ({ children }) => {

    //Global loading state
    const [loading, setLoading] = useState(false);

    const store = {
        loading,
        setLoading
    };

    return (
        <LoadingContext.Provider value={store}>{children}</LoadingContext.Provider>
    );
};

export const useLoading = () => {

    const loadingState = useContext(LoadingContext);

    if (typeof loadingState === 'undefined') {
        throw new Error('useLoading must be used within a LoadingProvider')
    }

    return loadingState
};