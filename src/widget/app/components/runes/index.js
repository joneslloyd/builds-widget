import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallWhiteText from '../../styles/components/small-white-text';

const RunesStyles = tw(FlexRow)``;
const RunesSmallWhiteText = tw(SmallWhiteText)`uppercase`;

const Runes = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { perks: { IDs: iDs = [], style = false, subStyle = false } = {} } = {} } = {} } = {} } = {} } = {}, squidexApiBuildData: { data: { perks = [] } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);

    // console.log(iDs, style, subStyle);
    // console.log(perks);

    const parent = perks.filter(i => i.flatData.riotId === style)[0];
    const primaryRunes = {
        parent,
        children: perks.filter(i => iDs.includes(i.flatData.riotId))
    };

    console.log(iDs);
    console.log(primaryRunes);

    /* ❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️UPDATE ME */
    const runes = true;
    const loading = isLoading || !runes;

    return (
        <RunesStyles>
            <RunesSmallWhiteText>Runes</RunesSmallWhiteText>
        </RunesStyles>
    );
};

export default Runes;