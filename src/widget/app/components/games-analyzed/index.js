import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import { commaNumber } from '../../lib/helpers';
import PlatinumPlusIcon from '../platinum-plus-icon';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';

const GamesAnalyzedStyles = tw(FlexRow)``;
const GamesAnalyzedSmallLightestPurpleText = tw(SmallPurpleText)`text-widget-purple-lightest pr-1.5 lowercase`;
const GamesAnalyzedSmallPurpleText = tw(SmallPurpleText)`pl-1 normal-case`;

const GamesAnalyzed = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { stats: { matchCount: matchCountRaw } = {} } = {} } = {} } = {} } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);
    const matchCount = commaNumber(matchCountRaw);

    const loading = isLoading || !matchCount;

    return (
        <GamesAnalyzedStyles>
            <GamesAnalyzedSmallLightestPurpleText loading={loading}>2,031,593</GamesAnalyzedSmallLightestPurpleText>
            <FlexRow>
                <PlatinumPlusIcon />
                <GamesAnalyzedSmallPurpleText>Platinum+ games analyzed</GamesAnalyzedSmallPurpleText>
            </FlexRow>
        </GamesAnalyzedStyles>
    );
};

export default GamesAnalyzed;