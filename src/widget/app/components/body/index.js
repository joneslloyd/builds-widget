import Runes from '../runes';
import Spells from '../spells';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';

const BodyStyles = tw.div`flex flex-col bg-transparent divide-y divide-widget-white-line`;
const BodyRow = tw(FlexRow)`p-5`;

const Body = () => {

    return (
        <BodyStyles>
            <BodyRow>
                <Runes />
                <Spells />
            </BodyRow>
            <BodyRow>
                <p>Test second row</p>
            </BodyRow>
        </BodyStyles>
    );
};

export default Body;