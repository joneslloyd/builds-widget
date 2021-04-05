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
const RunesDisplayStyles = tw(RunesDisplay)`flex flex-col uppercase pt-2.5 md:(flex-row)`;
const RuneGroup = styled(RunesDisplay)(({ leftSpace, line = false, loading = true }) => [
    tw`items-center relative bg-transparent!`,
    'large' === leftSpace ? tw`ml-8` : tw``,
    'largeMd' === leftSpace ? tw`md:ml-8` : tw``,
    'normal' === leftSpace ? tw`ml-7` : tw``,
    'small' === leftSpace ? tw`ml-6` : tw``,
    'very-small' === leftSpace ? tw`ml-3` : tw``,
    (true === loading && 'gold' === line) ? tw`before:(absolute z-0 inset-53p left-6 content block w-9/12 h-0.5 bg-widget-gold-line outline-widget-gold-outer-line animate-pulse)` : tw``,
    (false === loading && 'gold' === line) ? tw`before:(absolute z-0 inset-53p left-6 content block w-9/12 h-0.5 bg-widget-gold-line outline-widget-gold-outer-line)` : tw``,
    (true === loading && 'blue' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-blue-line outline-widget-blue-outer-line animate-pulse)` : tw``,
    (false === loading && 'blue' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-blue-line outline-widget-blue-outer-line)` : tw``,
    (true === loading && 'red' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-red-line outline-widget-red-outer-line animate-pulse)` : tw``,
    (false === loading && 'red' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-red-line outline-widget-red-outer-line)` : tw``,
    (true === loading && 'green' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-green-line outline-widget-green-outer-line animate-pulse)` : tw``,
    (false === loading && 'green' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-green-line outline-widget-green-outer-line)` : tw``,
    (true === loading && 'purple' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-purple-line outline-widget-purple-outer-line animate-pulse)` : tw``,
    (false === loading && 'purple' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-purple-line outline-widget-purple-outer-line)` : tw``,
]);

const FirstRuneGroup = tw(RuneGroup)`before:(w-8/12) md:(before:(w-9/12))`;
const LastRuneGroups = tw.div`flex pt-2.5 md:(pt-0)`;

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
                    <FirstRuneGroup line={primaryLine} loading={loading}>
                        <Rune id={primaryId} wh={36} rounded={false} />
                        <Rune id={iDs[0]} wh={48} rounded={false} leftSpace="smallest" />
                        <Rune id={iDs[1]} wh={32} rounded="full" gold={true} leftSpace="small" />
                        <Rune id={iDs[2]} wh={32} rounded="full" gold={true} leftSpace="large" />
                        <Rune id={iDs[3]} wh={32} rounded="full" gold={true} leftSpace="large" />
                    </FirstRuneGroup>
                    <LastRuneGroups>
                        <RuneGroup leftSpace="largeMd" line={secondaryLine} loading={loading}>
                            <Rune id={secondaryId} wh={36} rounded={false} />
                            <Rune id={iDs[4]} wh={32} rounded="full" gold={true} leftSpace="normal" />
                            <Rune id={iDs[5]} wh={32} rounded="full" gold={true} leftSpace="large" />
                        </RuneGroup>
                        <RuneGroup leftSpace="small" loading={loading}>
                            <Rune id={iDs[6]} wh={24} rounded="full" gold={true} borderWidth="1px" />
                            <Rune id={iDs[7]} wh={24} rounded="full" gold={true} leftSpace="large" borderWidth="1px" />
                            <Rune id={iDs[8]} wh={24} rounded="full" gold={true} leftSpace="large" borderWidth="1px" />
                        </RuneGroup>
                    </LastRuneGroups>
                </RunesDisplayStyles>
            </FlexRow>
        </RunesStyles>
    );
};

export default Runes;