import { memo } from 'preact/compat';
import { useDataApi } from '../../lib/context/data-api';
import { useLoading } from '../../lib/context/loading';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';
import SmallWhiteText from '../../styles/components/small-white-text';

const PatchStyles = tw(FlexRow)`pl-3.5`;
const PatchSmallPurpleText = tw(SmallPurpleText)`pr-1.5`;
const PatchSmallWhiteText = tw(SmallWhiteText)``;

const Patch = () => {

    const { daData: { data: { lol: { champion: { build: { patch = 'xx.x' } = {} } = {} } = {} } = {} } = {} } = useDataApi();
    const { loading: isLoading = true } = useLoading();

    const loading = isLoading || ('xx.x' === patch || !patch);

    return (
        <PatchStyles>
            <PatchSmallPurpleText loading={loading}>Patch</PatchSmallPurpleText>
            <PatchSmallWhiteText loading={loading}>{patch}</PatchSmallWhiteText>
        </PatchStyles>
    );
};

export default memo(Patch);