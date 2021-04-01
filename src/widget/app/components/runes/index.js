import Rune from '../rune';
import { getLineColorFromIcon } from '../../lib/helpers';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw, { styled } from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';
import RunesDisplay from '../../styles/components/runes-display';

const RunesStyles = tw(FlexCol)`mr-0 xl:(mr-10 w-9/12)`;
const RunesSmallWhiteText = tw(SmallWhiteText)`uppercase`;
const RunesDisplayStyles = tw(RunesDisplay)`uppercase pt-3`;
const RuneGroup = styled(RunesDisplay)(({ leftSpace, line = false, loading = true }) => [
    tw`items-center relative bg-transparent!`,
    'large' === leftSpace ? tw`xl:(ml-8)` : tw``,
    'normal' === leftSpace ? tw`xl:(ml-7)` : tw``,
    'small' === leftSpace ? tw`xl:(ml-6)` : tw``,
    'very-small' === leftSpace ? tw`xl:(ml-3)` : tw``,
    (true === loading && 'gold' === line) ? tw`before:(absolute z-0 left-6 content block w-9/12 h-0.5 bg-widget-gold-line outline-widget-gold-outer-line animate-pulse)` : tw``,
    (false === loading && 'gold' === line) ? tw`before:(absolute z-0 left-6 content block w-9/12 h-0.5 bg-widget-gold-line outline-widget-gold-outer-line)` : tw``,
    (true === loading && 'blue' === line) ? tw`before:(absolute z-0 left-7 content block w-9/12 h-0.5 bg-widget-blue-line outline-widget-blue-outer-line animate-pulse)` : tw``,
    (false === loading && 'blue' === line) ? tw`before:(absolute z-0 left-7 content block w-9/12 h-0.5 bg-widget-blue-line outline-widget-blue-outer-line)` : tw``,
    (true === loading && 'red' === line) ? tw`before:(absolute z-0 left-7 content block w-9/12 h-0.5 bg-widget-red-line outline-widget-red-outer-line animate-pulse)` : tw``,
    (false === loading && 'red' === line) ? tw`before:(absolute z-0 left-7 content block w-9/12 h-0.5 bg-widget-red-line outline-widget-red-outer-line)` : tw``,
    (true === loading && 'green' === line) ? tw`before:(absolute z-0 left-7 content block w-9/12 h-0.5 bg-widget-green-line outline-widget-green-outer-line animate-pulse)` : tw``,
    (false === loading && 'green' === line) ? tw`before:(absolute z-0 left-7 content block w-9/12 h-0.5 bg-widget-green-line outline-widget-green-outer-line)` : tw``,
    (true === loading && 'purple' === line) ? tw`before:(absolute z-0 left-7 content block w-9/12 h-0.5 bg-widget-purple-line outline-widget-purple-outer-line animate-pulse)` : tw``,
    (false === loading && 'purple' === line) ? tw`before:(absolute z-0 left-7 content block w-9/12 h-0.5 bg-widget-purple-line outline-widget-purple-outer-line)` : tw``,
]);

const Runes = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { perks = {} } = {} } = {} } = {} } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);
    const { IDs: iDs = [], style: primaryId = false, subStyle: secondaryId = false } = perks;

    const primaryLine = getLineColorFromIcon(primaryId);
    const secondaryLine = getLineColorFromIcon(secondaryId);

    const loading = isLoading || (!primaryId);

    return (
        <RunesStyles>
            <RunesSmallWhiteText>Runes</RunesSmallWhiteText>
            <FlexRow>
                <RunesDisplayStyles>
                    <RuneGroup line={primaryLine} loading={loading}>
                        <Rune id={primaryId} wh={36} rounded={false} />
                        <Rune id={iDs[0]} wh={48} rounded={false} leftSpace="smallest" />
                        <Rune id={iDs[1]} wh={32} rounded={true} gold={true} leftSpace="small" />
                        <Rune id={iDs[2]} wh={32} rounded={true} gold={true} leftSpace="normal" />
                        <Rune id={iDs[3]} wh={32} rounded={true} gold={true} leftSpace="normal" />
                    </RuneGroup>
                    <RuneGroup leftSpace="large" line={secondaryLine} loading={loading}>
                        <Rune id={secondaryId} wh={36} rounded={false} />
                        <Rune id={iDs[4]} wh={32} rounded={true} gold={true} leftSpace="normal" />
                        <Rune id={iDs[5]} wh={32} rounded={true} gold={true} leftSpace="normal" />
                    </RuneGroup>
                    <RuneGroup leftSpace="small" loading={loading}>
                        <Rune id={iDs[6]} wh={24} rounded={true} gold={true} borderWidth="1px" />
                        <Rune id={iDs[7]} wh={24} rounded={true} gold={true} leftSpace="large" borderWidth="1px" />
                        <Rune id={iDs[8]} wh={24} rounded={true} gold={true} leftSpace="large" borderWidth="1px" />
                    </RuneGroup>
                </RunesDisplayStyles>
            </FlexRow>
        </RunesStyles>
    );
};

export default Runes;