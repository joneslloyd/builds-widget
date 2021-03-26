import { createClient } from '@urql/preact';
import { getEnvVar } from '../../helpers'

const apiData = getEnvVar('DATA_API');
const apiDataToken = getEnvVar('DATA_API_TOKEN');
const apiSquidex = getEnvVar('SQUIDEX_API');
const apiSquidexToken = getEnvVar('SQUIDEX_API_TOKEN');

export const dataApiClient = createClient({
    url: apiData,
    fetchOptions: () => {
        return {
            headers: { authorization: apiDataToken ? `Bearer ${apiDataToken}` : '' },
        };
    },
});

export const squidexApiClient = createClient({
    url: apiSquidex,
    fetchOptions: () => {
        return {
            headers: { authorization: apiSquidexToken ? `Bearer ${apiSquidexToken}` : '' },
        };
    },
});

export default dataApiClient;