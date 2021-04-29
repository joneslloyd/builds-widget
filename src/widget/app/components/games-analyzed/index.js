import { memo } from 'preact/compat';
import { useCallback, useMemo } from 'preact/hooks';
import { useDataApi } from '../../lib/context/data-api';
import { useLoading } from '../../lib/context/loading';
import { commaNumber, parseStyles } from '../../lib/helpers';
import PlatinumPlusIcon from '../platinum-plus-icon';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';

const GamesAnalyzed = () => {

    const styled = useStyled();

    const GamesAnalyzedStyles = useMemo(() => {
        return styled(FlexRow)(() => {
            return parseStyles([
                tw``,
            ]);
        })
    }, [styled]);

    const GamesAnalyzedSmallLightestPurpleText = useMemo(() => {
        return styled(SmallPurpleText)(() => {
            return parseStyles([
                tw`text-widget-purple-lightest lowercase pr-0.5 lg:(pr-1.5)`,
            ]);
        })
    }, [styled]);

    const GamesAnalyzedSmallPurpleTextSmaller = useMemo(() => {
        return styled(SmallPurpleText)(() => {
            return parseStyles([
                tw`flex normal-case pl-0.5 lg:(hidden) lg:(pl-1)`,
            ]);
        })
    }, [styled]);

    const GamesAnalyzedSmallPurpleTextLarger = useMemo(() => {
        return styled(SmallPurpleText)(() => {
            return parseStyles([
                tw`hidden normal-case pl-0.5 lg:(flex) lg:(pl-1)`,
            ]);
        })
    }, [styled]);

    const { daData: { data: { lol: { champion: { build: { stats: { matchCount: matchCountRaw } = {} } = {} } = {} } = {} } = {} } = {} } = useDataApi();
    const { loading: isLoading = true } = useLoading();

    const getMatchCount = useCallback(() => {
        return commaNumber(matchCountRaw);
    }, [matchCountRaw]);

    const matchCount = getMatchCount();

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

export default memo(GamesAnalyzed);