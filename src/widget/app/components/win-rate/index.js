import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import { roundWinRate } from '../../lib/helpers';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';

const WinRateStyles = tw(FlexRow)`pl-3.5`;
const WinRateSmallPurpleText = tw(SmallPurpleText)`pr-1`;
const WinRateSmallGreenText = tw(SmallPurpleText)`text-widget-green`;

const WinRate = () => {

    const { dataApiBuildData: { data, data: { lol: { champion: { stats: { winRateHistory = [] } = {} } = {} } = {} } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);
    const latestWinRateHistoryItem = winRateHistory ? winRateHistory[0] : {};
    const { value: winRateRaw = 'XX.X' } = latestWinRateHistoryItem || {};

    const winRate = `${'XX.X' !== winRateRaw ? roundWinRate(winRateRaw) : 'XX.X'}%`;

    const loading = isLoading || ('XX.X%' === winRate || !winRate);

    return (
        <WinRateStyles>
            <WinRateSmallPurpleText loading={loading}>Win rate</WinRateSmallPurpleText>
            <WinRateSmallGreenText loading={loading}>{winRate}</WinRateSmallGreenText>
        </WinRateStyles>
    );
};

export default WinRate;