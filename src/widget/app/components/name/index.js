import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';
import NormalText from '../../styles/components/normal-text';

const NameStyles = tw.div`flex`;

const Name = () => {

    const { squidexApiBuildData: { data: { championCommonInfo = [] } = {} }, loading = true } = useContext(BuildContext);
    const { flatData: { name = '' } = {} } = championCommonInfo[0] || {};

    const isLoading = loading || !name;

    const nameTitle = `${name} build`;

    return (
        <NameStyles>
            <NormalText loading={isLoading}>{nameTitle}</NormalText>
        </NameStyles>
    );
};

export default Name;