import Rune from '../rune';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw, { styled } from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';
import RunesDisplay from '../../styles/components/runes-display';

const RunesStyles = tw(FlexCol)`pr-0 md:(pr-10 w-9/12)`;
const RunesSmallWhiteText = tw(SmallWhiteText)`uppercase`;
const RunesDisplayStyles = tw(RunesDisplay)`uppercase pt-3`;
const RuneGroup = styled(RunesDisplay)(({ leftSpace, goldLine = false, blueLine = false }) => [
    tw`items-center relative`,
    'large' === leftSpace ? tw`md:(ml-8)` : tw``,
    'small' === leftSpace ? tw`md:(ml-6)` : tw``,
    true === goldLine ? tw`before:(absolute z-0 left-6 content block w-9/12 h-1 bg-widget-gold)` : tw``,
    true === blueLine ? tw`before:(absolute z-0 left-6 content block w-9/12 h-1 bg-widget-blue)` : tw``
]);

const Runes = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { perks = {} } = {} } = {} } = {} } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);
    const { IDs: iDs = [], style: primaryId = false, subStyle: secondaryId = false } = perks;

    const loading = isLoading || !perks;

    return (
        <RunesStyles>
            <RunesSmallWhiteText>Runes</RunesSmallWhiteText>
            <FlexRow>
                <RunesDisplayStyles>
                    <RuneGroup goldLine={true}>
                        <Rune id={primaryId} wh={36} rounded={false} />
                        <Rune id={iDs[0]} wh={48} rounded={false} leftSpace="normal" />
                        <Rune id={iDs[1]} wh={32} rounded={true} gold={true} leftSpace="normal" />
                        <Rune id={iDs[2]} wh={32} rounded={true} gold={true} leftSpace="normal" />
                        <Rune id={iDs[3]} wh={32} rounded={true} gold={true} leftSpace="normal" />
                    </RuneGroup>
                    <RuneGroup leftSpace="large" blueLine={true}>
                        <Rune id={secondaryId} wh={36} rounded={false} />
                        <Rune id={iDs[4]} wh={32} rounded={true} gold={true} leftSpace="normal" />
                        <Rune id={iDs[5]} wh={32} rounded={true} gold={true} leftSpace="normal" />
                    </RuneGroup>
                    <RuneGroup leftSpace="small">
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