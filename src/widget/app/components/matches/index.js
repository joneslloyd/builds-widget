import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';
import SmallWhiteText from '../../styles/components/small-white-text';

const MatchesStyles = tw(FlexRow)`pl-1.5`;
const MatchesSmallPurpleText = tw(SmallPurpleText)`pr-1.5 lowercase`;
const MatchesSmallWhiteText = tw(SmallWhiteText)``;

const Matches = () => {

    const { dataApiBuildData: { data } = {}, loading: isLoading = true } = useContext(BuildContext);
    console.log(data);

    const loading = isLoading || !data;

    return (
        <MatchesStyles>
            <MatchesSmallPurpleText loading={loading}>Based on <MatchesSmallWhiteText>X</MatchesSmallWhiteText> matches</MatchesSmallPurpleText>
        </MatchesStyles>
    );
};

export default Matches;