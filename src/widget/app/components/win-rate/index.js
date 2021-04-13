import { memo } from 'preact/compat';
import { useCallback } from 'preact/hooks';
import { useDataApi } from '../../lib/context/data-api';
import { useLoading } from '../../lib/context/loading';
import { roundWinRate } from '../../lib/helpers';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';

const WinRateStyles = tw(FlexRow)`pl-3.5`;
const WinRateSmallPurpleText = tw(SmallPurpleText)`pr-1`;
const WinRateSmallGreenText = tw(SmallPurpleText)`text-widget-green`;

const WinRate = () => {

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