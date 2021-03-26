import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';

const NameStyles = tw.div`flex`;
const NameTextStyles = tw.span`text-white font-normal text-xs uppercase`;

const Name = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { championSlug = '' } = {} } = {} } = {} } = {} } = {}, squidexApiBuildData: { data: squidexData = {} } } = useContext(BuildContext);
    const { championCommonInfo = [] } = squidexData;
    const { flatData: { name = '', title = '' } = {} } = championCommonInfo[0] || {};

    const nameTitle = `${name} build`;

    return (
        <NameStyles>
            <NameTextStyles>{nameTitle}</NameTextStyles>
        </NameStyles>
    );
};

export default Name;