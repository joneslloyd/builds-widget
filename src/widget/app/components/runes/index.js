import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallWhiteText from '../../styles/components/small-white-text';

const RunesStyles = tw(FlexRow)``;
const RunesSmallWhiteText = tw(SmallWhiteText)`uppercase`;

const Runes = () => {

    return (
        <RunesStyles>
            <RunesSmallWhiteText>Runes</RunesSmallWhiteText>
        </RunesStyles>
    );
};

export default Runes;