import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import { commaNumber } from '../../lib/helpers';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';
import SmallWhiteText from '../../styles/components/small-white-text';

const MatchesStyles = tw(FlexRow)`pl-1`;
const MatchesSmallPurpleText = tw(SmallPurpleText)`lowercase`;
const MatchesSmallWhiteText = tw(SmallWhiteText)``;

const Matches = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { stats: { matchCount: matchCountRaw = 'x,xxx' } = {} } = {} } = {} } = {} } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);
    const matchCount = 'x,xxx' !== matchCountRaw ? commaNumber(matchCountRaw) : matchCountRaw;

    const loading = isLoading || ('x,xxx' === matchCountRaw || !matchCount);

    return (
        <MatchesStyles>
            <MatchesSmallPurpleText loading={loading}>Based on <MatchesSmallWhiteText loading={loading}>{matchCount}</MatchesSmallWhiteText> matches</MatchesSmallPurpleText>
        </MatchesStyles>
    );
};

export default Matches;