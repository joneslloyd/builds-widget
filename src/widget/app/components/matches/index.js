import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import { commaNumber } from '../../lib/helpers';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';
import SmallWhiteText from '../../styles/components/small-white-text';

const MatchesStyles = tw(FlexRow)`pl-1.5`;
const MatchesSmallPurpleText = tw(SmallPurpleText)`pr-1.5 lowercase`;
const MatchesSmallWhiteText = tw(SmallWhiteText)``;

const Matches = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { stats: { matchCount: matchCountRaw } = {} } = {} } = {} } = {} } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);
    const matchCount = commaNumber(matchCountRaw);

    const loading = isLoading || !matchCount;

    return (
        <MatchesStyles>
            <MatchesSmallPurpleText loading={loading}>Based on <MatchesSmallWhiteText>{matchCount}</MatchesSmallWhiteText> matches</MatchesSmallPurpleText>
        </MatchesStyles>
    );
};

export default Matches;