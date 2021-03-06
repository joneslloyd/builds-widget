import { memo } from 'preact/compat';
import { useDataApi } from '../../lib/context/data-api';
import { useLoading } from '../../lib/context/loading';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';
import SmallWhiteText from '../../styles/components/small-white-text';
import { parseStyles } from '../../lib/helpers';

const Patch = () => {

    const styled = useStyled();

    const PatchStyles = styled(FlexRow)(() => {
        return parseStyles([
            tw`pl-3.5`,
        ]);
    });
    const PatchSmallPurpleText = styled(SmallPurpleText)(() => {
        return parseStyles([
            tw`pr-1.5`,
        ]);
    });
    const PatchSmallWhiteText = styled(SmallWhiteText)(() => {
        return parseStyles([
            tw``,
        ]);
    });

    const { daData: { data: { lol: { champion: { build: { patch = 'xx.x' } = {} } = {} } = {} } = {} } = {} } = useDataApi();
    const { loading: isLoading = true } = useLoading();

    const loading = isLoading || ('xx.x' === patch || !patch);

    return (
        <>
            {!loading && (
                <PatchStyles>
                    <PatchSmallPurpleText loading={loading}>Patch</PatchSmallPurpleText>
                    <PatchSmallWhiteText loading={loading}>{patch}</PatchSmallWhiteText>
                </PatchStyles>
            )}
        </>
    );
};

export default memo(Patch);