import { memo } from 'preact/compat';
import { useSquidexApi } from '../../lib/context/squidex-api';
import { useLoading } from '../../lib/context/loading';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import NormalText from '../../styles/components/normal-text';

const Name = () => {

    const styled = useStyled();

    const NameStyles = styled('div')(() => [
        tw`flex`,
    ]);

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