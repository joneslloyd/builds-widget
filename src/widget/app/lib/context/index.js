import { createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { getDataApiData, getSquidexApiData } from '../data';
import { addTooltip, getTooltip, setTooltipsLoading, setTooltipsError } from '../tooltips';

export const BuildContext = createContext(null);

const Context = ({ children, champion = 'amumu', layout = 'full' }) => {

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

    //Tooltips
    const [tooltips, setTooltips] = useState({
        tooltips: [],
        loading: false,
        error: false,
    });

    const store = {
        layout,
        dataApiBuildData,
        setDataApiBuildData,
        squidexApiBuildData,
        setSquidexApiBuildData,
        loading,
        setLoading,
        tooltips,
        setTooltips,
        addTooltip,
        getTooltip,
        setTooltipsLoading,
        setTooltipsError
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