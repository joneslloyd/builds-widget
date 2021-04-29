import { memo } from 'preact/compat';
import { useMemo } from 'preact/hooks';
import { useDataApi } from '../../lib/context/data-api';
import { useLoading } from '../../lib/context/loading';
import { commaNumber, parseStyles } from '../../lib/helpers';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';
import SmallWhiteText from '../../styles/components/small-white-text';

const Matches = () => {

    const styled = useStyled();

    const MatchesStyles = useMemo(() => {
        return styled(FlexRow)(() => {
            return parseStyles([
                tw`hidden md:(flex pl-1)`,
            ]);
        })
    }, [styled]);

    const MatchesSmallPurpleText = useMemo(() => {
        return styled(SmallPurpleText)(() => {
            return parseStyles([
                tw`lowercase`,
            ]);
        })
    }, [styled]);

    const MatchesSmallWhiteText = useMemo(() => {
        return styled(SmallWhiteText)(() => {
            return parseStyles([
                tw``,
            ]);
        })
    }, [styled]);

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