import MoreBuildsIcon from '../more-builds-icon';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallWhiteText from '../../styles/components/small-white-text';

const MoreBuildsStyles = tw(FlexRow)`pt-2.5 md:(pt-0)`;
const MoreBuildsLoading = tw(SmallWhiteText)`ml-6 lg:(ml-6)`;
const MoreBuildsSmallGoldText = tw(SmallWhiteText)`flex items-center text-xs! font-medium text-widget-gold normal-case transition-all hover:text-widget-gold-light svg:all:(transition-all fill-widget-gold) hover:(svg:all:(fill-widget-gold-light)) pl-6 lg:(pl-6)`;
const MoreBuildsIconStyled = tw(MoreBuildsIcon)`ml-1.5 fill-widget-gold`;


const MoreBuilds = () => {

    const { squidexApiBuildData: { data: { championCommonInfo = [] } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);
    const { flatData: { name = 'xxxx', slug = '' } = {} } = championCommonInfo[0] || {};

    const moreBuildsLinkText = `See more ${name} builds`;
    const moreBuildsLinkHref = `https://app.mobalytics.gg/lol/champions/${slug}/build`;

    const loading = isLoading || (!name || 'xxxx' === name);

    return (
        <MoreBuildsStyles>
            {loading && (
                <MoreBuildsLoading loading={true}>See more xxxxx builds...</MoreBuildsLoading>
            )}
            {!loading && (
                <MoreBuildsSmallGoldText as={'a'} href={moreBuildsLinkHref} target="_blank" title={moreBuildsLinkText} loading={loading}>{moreBuildsLinkText}<MoreBuildsIconStyled /></MoreBuildsSmallGoldText>
            )}
        </MoreBuildsStyles>
    );
};

export default MoreBuilds;