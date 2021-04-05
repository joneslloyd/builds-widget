import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import { commaNumber } from '../../lib/helpers';
import PlatinumPlusIcon from '../platinum-plus-icon';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';

const GamesAnalyzedStyles = tw(FlexRow)``;
const GamesAnalyzedSmallLightestPurpleText = tw(SmallPurpleText)`text-widget-purple-lightest lowercase pr-0.5 lg:(pr-1.5)`;
const GamesAnalyzedSmallPurpleTextSmaller = tw(SmallPurpleText)`flex normal-case pl-0.5 lg:(hidden) lg:(pl-1)`;
const GamesAnalyzedSmallPurpleTextLarger = tw(SmallPurpleText)`hidden normal-case pl-0.5 lg:(flex) lg:(pl-1)`;

const GamesAnalyzed = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { stats: { matchCount: matchCountRaw } = {} } = {} } = {} } = {} } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);
    const matchCount = commaNumber(matchCountRaw);

    const loading = isLoading || !matchCount;

    return (
        <GamesAnalyzedStyles>
            <GamesAnalyzedSmallLightestPurpleText loading={loading}>2,031,593</GamesAnalyzedSmallLightestPurpleText>
            <FlexRow>
                <PlatinumPlusIcon />
                <GamesAnalyzedSmallPurpleTextSmaller>games analyzed</GamesAnalyzedSmallPurpleTextSmaller>
                <GamesAnalyzedSmallPurpleTextLarger>Platinum+ games analyzed</GamesAnalyzedSmallPurpleTextLarger>
            </FlexRow>
        </GamesAnalyzedStyles>
    );
};

export default GamesAnalyzed;