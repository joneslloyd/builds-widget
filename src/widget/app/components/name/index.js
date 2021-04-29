import { memo } from 'preact/compat';
import { useSquidexApi } from '../../lib/context/squidex-api';
import { useLoading } from '../../lib/context/loading';
import { useStaticGlobalProps } from '../../lib/context/static-global-props';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import NormalText from '../../styles/components/normal-text';
import { parseStyles } from '../../lib/helpers';

const Name = () => {

    const { champion } = useStaticGlobalProps();
    const styled = useStyled();

    const NameStyles = styled('div')(() => {
        return parseStyles([
            tw`flex`,
        ]);
    });

    const { sqData: { data: { championCommonInfo = [] } = {} } } = useSquidexApi();
    const { loading = true } = useLoading();

    const { flatData: { name = champion } = {} } = championCommonInfo[0] || {};

    const isLoading = loading;

    const nameTitle = `${name} build`;

    return (
        <NameStyles>
            <NormalText loading={isLoading}>{nameTitle}</NormalText>
        </NameStyles>
    );
};

export default memo(Name);