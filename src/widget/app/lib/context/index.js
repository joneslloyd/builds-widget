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

    const store = {
        dataApiBuildData,
        setDataApiBuildData,
        squidexApiBuildData,
        setSquidexApiBuildData
    };

    useEffect(() => {
        getDataApiData(champion, dataApiBuildData, setDataApiBuildData);
        getSquidexApiData(champion, squidexApiBuildData, setSquidexApiBuildData);
    }, []);

    return (
        <BuildContext.Provider value={store}>{children}</BuildContext.Provider>
    );
};

export default Context;