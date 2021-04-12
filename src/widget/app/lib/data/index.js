import { dataApiClient, squidexApiClient } from '../graphql/client';
import { DATA_API_CHAMPION_QUERY, SQUIDEX_API_CHAMPION_QUERY, SPELL_BY_SLUG } from '../graphql/queries';
import { setTooltipsLoading, setTooltipsError, addTooltip } from '../tooltips';
import { firstItem } from '../helpers';

export const getDataApiData = (champion, buildData, setBuildData, loading, setLoading) => {

    //Set loading on 'dataApiData'
    setBuildData({
        ...buildData,
        loading: true
    });

    setLoading(true);

    //Get the data
    dataApiClient.query(DATA_API_CHAMPION_QUERY, {
        champion
    }).toPromise().then(result => {
        const { data, error } = result;
        setBuildData({
            ...buildData,
            data,
            loading: false,
            error: error ? error : false
        });
        setLoading(false);
    });
};

export const getSquidexApiData = (champion, buildData, setBuildData, loading, setLoading) => {

    //Set loading on 'squidexApiData'
    setBuildData({
        ...buildData,
        loading: true
    });

    setLoading(true);

    //Get the data
    squidexApiClient.query(SQUIDEX_API_CHAMPION_QUERY, {
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
    }).toPromise().then(result => {
        const { data, error } = result;
        setBuildData({
            ...buildData,
            data,
            loading: false,
            error: error ? error : false
        });
        setLoading(false);
    });
};

export const getSquidexTooltipBySlug = (identifier, tooltips, setTooltips) => {

    //Set loading
    setTooltipsLoading(true, tooltips, setTooltips);

    //Get the data
    return squidexApiClient.query(SPELL_BY_SLUG, {
        filter: `data/slug/iv eq '${identifier}' `,
    }).toPromise().then(result => {

        return result;
    });
};