import Runes from '../runes';
import Spells from '../spells';
import Items from '../items';
import tw, { styled } from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';

const BodyStyles = tw.div`flex flex-col bg-transparent divide-y divide-widget-white-line`;

const Body = () => {

    const BodyRow = styled(FlexRow)(({ pt = false }) => [
        tw`p-5`,
        true === pt ? tw`pt-7` : tw``,
    ]);

    return (
        <BodyStyles>
            <BodyRow>
                <Runes />
                <Spells />
            </BodyRow>
            <BodyRow pt={true}>
                <Items />
            </BodyRow>
        </BodyStyles>
    );
};

export default Body;