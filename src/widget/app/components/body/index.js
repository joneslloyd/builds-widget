import Runes from '../runes';
import Spells from '../spells';
import Items from '../items';
import SkillPriority from '../skill-priority';
import SkillOrder from '../skill-order';
import tw, { styled } from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';

const BodyStyles = tw.div`flex flex-col bg-transparent divide-y divide-widget-white-line`;
const BodyRowCol = styled(FlexRow)(({ pt = false }) => [
    true === pt ? tw`md:(pt-5) lg:(pt-7)` : tw``,
    tw`p-3 flex-col items-start lg:(p-5) xl:(flex-row)`,
]);

const Body = () => {

    return (
        <BodyStyles>
            <BodyRowCol>
                <Runes />
                <Spells />
            </BodyRowCol>
            <BodyRowCol pt={true}>
                <Items />
            </BodyRowCol>
            <BodyRowCol pt={true}>
                <SkillPriority />
                <SkillOrder />
            </BodyRowCol>
        </BodyStyles>
    );
};

export default Body;