import { memo } from 'preact/compat';
import { useSquidexApi } from '../../lib/context/squidex-api';
import { useLoading } from '../../lib/context/loading';
import MoreBuildsIcon from '../more-builds-icon';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import SmallWhiteText from '../../styles/components/small-white-text';
import { parseStyles } from '../../lib/helpers';

const MoreBuilds = () => {

    const styled = useStyled();

    const MoreBuildsStyles = styled(FlexRow)(() => {
        return parseStyles([
            tw`pt-2.5 md:(pt-0)`,
        ]);
    });
    const MoreBuildsLoading = styled(SmallWhiteText)(({ loading = true }) => {
        return parseStyles([
            false === loading ? tw`ml-6 no-underline lg:(ml-6)` : tw`ml-2.5`,
        ]);
    });
    const MoreBuildsSmallGoldText = styled(SmallWhiteText)(() => {
        return parseStyles([
            tw`flex items-center text-xs! font-medium text-widget-gold normal-case transition-all no-underline hover:text-widget-gold-light svg:all:(transition-all fill-widget-gold) hover:(svg:all:(fill-widget-gold-light)) md:(pl-6)`,
        ]);
    });
    const MoreBuildsIconStyled = styled(MoreBuildsIcon)(() => {
        return parseStyles([
            tw`ml-1.5 fill-widget-gold`,
            {
                'margin-top': '0.125rem'
            }
        ]);
    });

    const { sqData: { data: { championCommonInfo = [] } = {} } = {} } = useSquidexApi();
    const { loading: isLoading = true } = useLoading();

    const { flatData: { name = 'xxxx', slug = '' } = {} } = championCommonInfo[0] || {};

    const moreBuildsLinkText = `See more ${name} builds`;
    const moreBuildsLinkHref = `https://app.mobalytics.gg/lol/champions/${slug}/build`;

    const loading = isLoading || (!name || 'xxxx' === name);

    return (
        <MoreBuildsStyles>
            {loading && (
                <MoreBuildsLoading loading={true}>See more xxxxxxxxxxxxx builds...</MoreBuildsLoading>
            )}
            {!loading && (
                <MoreBuildsSmallGoldText as={'a'} href={moreBuildsLinkHref} target="_blank" title={moreBuildsLinkText} loading={loading}>{moreBuildsLinkText}<MoreBuildsIconStyled /></MoreBuildsSmallGoldText>
            )}
        </MoreBuildsStyles>
    );
};

export default memo(MoreBuilds);