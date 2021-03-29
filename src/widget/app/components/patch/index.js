import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';
import SmallWhiteText from '../../styles/components/small-white-text';

const PatchStyles = tw(FlexRow)`pl-3.5`;
const PatchSmallPurpleText = tw(SmallPurpleText)`pr-1.5`;
const PatchSmallWhiteText = tw(SmallWhiteText)``;

const Patch = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { patch = 'xx.x' } = {} } = {} } = {} } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);

    const loading = isLoading || ('xx.x' === patch || !patch);

    return (
        <PatchStyles>
            <PatchSmallPurpleText loading={loading}>Patch</PatchSmallPurpleText>
            <PatchSmallWhiteText loading={loading}>{patch}</PatchSmallWhiteText>
        </PatchStyles>
    );
};

export default Patch;