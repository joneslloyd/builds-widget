import MoreBuildsIcon from '../more-builds-icon';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallWhiteText from '../../styles/components/small-white-text';

const MoreBuildsStyles = tw(FlexRow)``;
const MoreBuildsSmallGoldText = tw(SmallWhiteText)`pl-6 flex items-center text-xs! font-medium text-widget-gold normal-case transition-all hover:text-widget-gold-light all:(transition-all fill-widget-gold) hover:(all:(fill-widget-gold-light))`;
const MoreBuildsIconStyled = tw(MoreBuildsIcon)`ml-1`;


const MoreBuilds = () => {

    const { squidexApiBuildData: { data: { championCommonInfo = [] } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);
    const { flatData: { name = '', slug = '' } = {} } = championCommonInfo[0] || {};

    const moreBuildsLinkText = `See more ${name} builds`;
    const moreBuildsLinkHref = `https://app.mobalytics.gg/lol/champions/${slug}/build`;

    const loading = isLoading || (!name || !slug);

    return (
        <MoreBuildsStyles>
            <MoreBuildsSmallGoldText as={'a'} href={moreBuildsLinkHref} target="_blank" title={moreBuildsLinkText} loading={loading}>{moreBuildsLinkText}<MoreBuildsIconStyled /></MoreBuildsSmallGoldText>
        </MoreBuildsStyles>
    );
};

export default MoreBuilds;