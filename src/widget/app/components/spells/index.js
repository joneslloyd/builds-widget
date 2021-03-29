import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallWhiteText from '../../styles/components/small-white-text';

const SpellsStyles = tw(FlexRow)``;
const SpellsSmallWhiteText = tw(SmallWhiteText)`uppercase`;

const Spells = () => {

    return (
        <SpellsStyles>
            <SpellsSmallWhiteText>Spells</SpellsSmallWhiteText>
        </SpellsStyles>
    );
};

export default Spells;