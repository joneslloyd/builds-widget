import { memo } from 'preact/compat';
import { useSquidexApi } from '../../lib/context/squidex-api';
import { useLoading } from '../../lib/context/loading';
import tw from 'twin.macro';
import NormalText from '../../styles/components/normal-text';

const NameStyles = tw.div`flex`;

const Name = () => {

    const { sqData: { data: { championCommonInfo = [] } = {} } } = useSquidexApi();
    const { loading = true } = useLoading();

    const { flatData: { name = '' } = {} } = championCommonInfo[0] || {};

    const isLoading = loading || !name;

    const nameTitle = `${name} build`;

    return (
        <NameStyles>
            <NormalText loading={isLoading}>{nameTitle}</NormalText>
        </NameStyles>
    );
};

export default memo(Name);