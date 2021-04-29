import { memo } from 'preact/compat';
import { useCallback, useMemo } from 'preact/hooks';
import { useDataApi } from '../../lib/context/data-api';
import { useLoading } from '../../lib/context/loading';
import { parseStyles, roundWinRate } from '../../lib/helpers';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';

const WinRate = () => {

    const styled = useStyled();

    const WinRateStyles = useMemo(() => {
        return styled(FlexRow)(() => {
            return parseStyles([
                tw`pl-3.5`,
            ]);
        })
    }, [styled]);

    const WinRateSmallPurpleText = useMemo(() => {
        return styled(SmallPurpleText)(() => {
            return parseStyles([
                tw`pr-1`,
            ]);
        })
    }, [styled]);

    const WinRateSmallGreenText = useMemo(() => {
        return styled(SmallPurpleText)(() => {
            return parseStyles([
                tw`text-widget-green`,
            ]);
        })
    }, [styled]);

    const { daData: { data: { lol: { champion: { stats: { winRateHistory = [] } = {} } = {} } = {} } = {} } = {} } = useDataApi();
    const latestWinRateHistoryItem = winRateHistory ? winRateHistory[0] : {};
    const { value: winRateRaw = 'XX.X' } = latestWinRateHistoryItem || {};

    const { loading: isLoading = true } = useLoading();


    const winRateFunction = useCallback(() => {
        return roundWinRate(winRateRaw);
    }, [winRateRaw]);

    const winRate = `${'XX.X' !== winRateRaw ? winRateFunction() : 'XX.X'}%`;

    const loading = isLoading || ('XX.X%' === winRate || !winRate);

    return (
        <WinRateStyles>
            <WinRateSmallPurpleText loading={loading}>Win rate</WinRateSmallPurpleText>
            <WinRateSmallGreenText loading={loading}>{winRate}</WinRateSmallGreenText>
        </WinRateStyles>
    );
};

export default memo(WinRate);