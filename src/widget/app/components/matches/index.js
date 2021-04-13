import { memo } from 'preact/compat';
import { useDataApi } from '../../lib/context/data-api';
import { useLoading } from '../../lib/context/loading';
import { commaNumber } from '../../lib/helpers';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';
import SmallWhiteText from '../../styles/components/small-white-text';

const MatchesStyles = tw(FlexRow)`hidden md:(flex pl-1)`;
const MatchesSmallPurpleText = tw(SmallPurpleText)`lowercase`;
const MatchesSmallWhiteText = tw(SmallWhiteText)``;

const Matches = () => {

    const { daData: { data: { lol: { champion: { build: { stats: { matchCount: matchCountRaw = 'x,xxx' } = {} } = {} } = {} } = {} } = {} } = {} } = useDataApi();
    const { loading: isLoading = true } = useLoading();

    const matchCount = 'x,xxx' !== matchCountRaw ? commaNumber(matchCountRaw) : matchCountRaw;

    const loading = isLoading || ('x,xxx' === matchCountRaw || !matchCount);

    return (
        <MatchesStyles>
            <MatchesSmallPurpleText loading={loading}>Based on <MatchesSmallWhiteText loading={loading}>{matchCount}</MatchesSmallWhiteText> matches</MatchesSmallPurpleText>
        </MatchesStyles>
    );
};

export default memo(Matches);