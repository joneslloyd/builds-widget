import { squidexApiClient } from '../graphql/client';
import { SQUIDEX_API_CHAMPION_QUERY, SPELL_BY_SLUG } from '../graphql/queries';
import { setTooltipsLoading } from '../tooltips';

export const getSquidexApiData = (champion, buildData, setBuildData, setLoading) => {

    //Set loading on the Squidex API context
    setBuildData({
        ...buildData,
        loading: true
    });

    //Set loading globally on the app
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

        //Set the response into the Squidex API context
        setBuildData({
            ...buildData,
            data,
            loading: false,
            error: error ? error : false
        });

        //Set loading globally on the app
        setLoading(false);
    });
};

export const getSquidexTooltipBySlug = (identifier, tooltips, setTooltips) => {

    //Set loading on the Tooltips context
    setTooltipsLoading(true, tooltips, setTooltips);

    //Get the data
    return squidexApiClient.query(SPELL_BY_SLUG, {
        filter: `data/slug/iv eq '${identifier}' `,
    }).toPromise().then(result => {

        return result;
    });
};