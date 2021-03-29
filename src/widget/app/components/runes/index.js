import Rune from '../rune';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';
import RunesDisplay from '../../styles/components/runes-display';

const RunesStyles = tw(FlexCol)``;
const RunesSmallWhiteText = tw(SmallWhiteText)`uppercase`;
const RunesDisplayStyles = tw(RunesDisplay)`uppercase pt-4`;
const RuneGroup = tw(RunesDisplay)``;

const Runes = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { perks = {} } = {} } = {} } = {} } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);
    const { IDs: iDs = [], style: primaryId = false, subStyle: secondaryId = false } = perks;

    const loading = isLoading || !perks;

    return (
        <RunesStyles>
            <RunesSmallWhiteText>Runes</RunesSmallWhiteText>
            <RunesDisplayStyles>
                <RuneGroup>
                    <Rune id={primaryId} wh={36} rounded={false} />
                    <Rune id={iDs[0]} wh={36} rounded={false} />
                    <Rune id={iDs[1]} wh={32} rounded={true} gold={true} />
                    <Rune id={iDs[2]} wh={32} rounded={true} gold={true} />
                    <Rune id={iDs[3]} wh={32} rounded={true} gold={true} />
                </RuneGroup>
            </RunesDisplayStyles>
        </RunesStyles>
    );
};

export default Runes;