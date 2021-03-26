import { createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { getDataApiData, getSquidexApiData } from '../data';

export const BuildContext = createContext(null);

const Context = ({ children, champion = '' }) => {

    //Data API data
    const [dataApiBuildData, setDataApiBuildData] = useState({
        data: {},
        loading: false,
        error: false
    });

    //Squidex API data
    const [squidexApiBuildData, setSquidexApiBuildData] = useState({
        data: {},
        loading: false,
        error: false
    });

    //General "loading" flag for both
    const [loading, setLoading] = useState(false);

    const store = {
        dataApiBuildData,
        setDataApiBuildData,
        squidexApiBuildData,
        setSquidexApiBuildData,
        loading,
        setLoading
    };

    useEffect(() => {
        getDataApiData(champion, dataApiBuildData, setDataApiBuildData, loading, setLoading);
        getSquidexApiData(champion, squidexApiBuildData, setSquidexApiBuildData, loading, setLoading);
    }, []);

    return (
        <BuildContext.Provider value={store}>{children}</BuildContext.Provider>
    );
};

export default Context;