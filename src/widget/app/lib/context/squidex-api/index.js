import { createContext } from 'preact';
import { useCallback, useContext, useEffect, useState } from 'preact/hooks';
import { useLoading } from '../loading';
import { useStaticGlobalProps } from '../static-global-props';
import { squidexApiClient } from '../../graphql/client';
import { SQUIDEX_API_CHAMPION_QUERY } from '../../graphql/queries';

export const SquidexApiContext = createContext(null);

export const SquidexApiProvider = ({ children }) => {

    const { champion } = useStaticGlobalProps();
    const { _, setLoading } = useLoading();

    //Squidex API data
    const [sqData, setSqData] = useState({
        data: {},
        loading: false,
        error: false
    });

    const store = {
        sqData,
        setSqData
    };

    const getApiData = useCallback(async () => {

        //Set loading on the Squidex API context
        setSqData({
            ...sqData,
            loading: true
        });

        //Set loading globally on the app
        setLoading(true);

        //Get the data
        const result = await squidexApiClient.query(SQUIDEX_API_CHAMPION_QUERY, {
            championFilter: `data/slug/iv eq '${champion}' `,
            roleDataFilter: `data/championSlug/iv eq '${champion}' `,
            matchupsDataFilter: `data/enemyChampion/iv eq '${champion}' and data/matchupTips/en ne null `,
            buildDataFilter: `data/champion/iv eq '${champion}'`,
            comboFilter: `data/championSlug/iv eq '${champion}' and data/tags/iv in ('featured')`,
            combosListFilter: `data/championSlug/iv eq '${champion}'`,
            matchupSpecificDataFilter: `data/enemyChampion/iv eq '${champion}'  `,
            withCommonData: true,
            withBuildData: true,
            withCountersData: false,
            withCombosData: false,
            withMatchupSpecificCountersData: false,
            withProBuildsData: true
        }).toPromise();

        const { data, error } = result;

        //Set the response into the Squidex API context
        setSqData({
            data,
            loading: false,
            error: error ? error : false
        });

        //Set loading globally on the app
        setLoading(false);

    }, []);

    useEffect(async () => {
        await getApiData();
    }, []);

    return (
        <SquidexApiContext.Provider value={store}>{children}</SquidexApiContext.Provider>
    );
};

export const useSquidexApi = () => {

    const squidexApiState = useContext(SquidexApiContext);

    if (typeof squidexApiState === 'undefined') {
        throw new Error('useSquidexApi must be used within a SquidexApiProvider')
    }

    return squidexApiState
};