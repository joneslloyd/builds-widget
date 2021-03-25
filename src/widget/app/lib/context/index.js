import { createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import client from '../graphql/client';
import { CHAMPION_QUERY } from '../graphql/queries';

export const BuildContext = createContext(null);

const Context = ({ children, champion = '' }) => {

    const [buildData, setBuildData] = useState({
        data: {},
        loading: false,
        error: false
    });

    const store = {
        buildData,
        setBuildData
    };

    useEffect(() => {

        setBuildData({
            ...buildData,
            loading: true
        });

        client.query(CHAMPION_QUERY, {
            champion
        }).toPromise().then(result => {

            const { data, error } = result;

            setBuildData({
                data,
                loading: false,
                error: error ? error : false
            });
        });
    }, []);

    return (
        <BuildContext.Provider value={store}>{children}</BuildContext.Provider>
    );
};

export default Context;