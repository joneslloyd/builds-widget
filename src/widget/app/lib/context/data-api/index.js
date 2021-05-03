import { createContext } from 'preact';
import { useCallback, useContext, useState } from 'preact/hooks';
import useAsync from '../../hooks/use-async';
import { useLoading } from '../loading';
import { useStaticGlobalProps } from '../static-global-props';
import { dataApiClient } from '../../graphql/client';
import { DATA_API_CHAMPION_QUERY } from '../../graphql/queries';

export const DataApiContext = createContext(null);

export const DataApiProvider = ({ children }) => {

    const { champion, role } = useStaticGlobalProps();
    const { _, setLoading } = useLoading();

    //Data API data
    const [daData, setDaData] = useState({
        data: {},
        loading: false,
        error: false
    });

    const store = {
        daData,
        setDaData
    };

    const processApiData = useCallback((result) => {

        if (result) {

            //Set loading globally on the app
            setLoading(false);

            const { data, error } = result;

            //Set the response into the Data API context
            setDaData({
                data,
                loading: false,
                error: error ? error : false
            });
        }

    }, []);

    const getApiData = useCallback(async () => {

        //Set loading on the Data API context
        setDaData({
            ...daData,
            loading: true
        });

        //Set loading globally on the app
        setLoading(true);

        //Get the data
        const result = await dataApiClient.query(DATA_API_CHAMPION_QUERY, {
            champion,
            role
        }).toPromise();

        return result;
    }, []);

    useAsync(getApiData, processApiData);

    return (
        <DataApiContext.Provider value={store}>{children}</DataApiContext.Provider>
    );
};

export const useDataApi = () => {

    const dataApiState = useContext(DataApiContext);

    if (typeof dataApiState === 'undefined') {
        throw new Error('useDataApi must be used within a DataApiProvider')
    }

    return dataApiState
};