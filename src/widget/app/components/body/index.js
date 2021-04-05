import Runes from '../runes';
import Spells from '../spells';
import Items from '../items';
import SkillPriority from '../skill-priority';
import SkillOrder from '../skill-order';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw, { styled } from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';

const BodyStyles = styled('div')(({ layout = false }) => [
    tw`flex flex-col bg-transparent divide-y divide-widget-white-line`,
    'full' === layout ? tw`md:(bg-full-body bg-no-repeat bg-right-top bg-contain)` : tw``
]);

const BodyRowCol = styled(FlexRow)(({ pt = false }) => [
    true === pt ? tw`md:(pt-5) lg:(pt-7)` : tw``,
    tw`p-3 flex-col items-start lg:(p-5) xl:(flex-row)`,
]);

const Body = () => {

    const { layout = 'compact' } = useContext(BuildContext);

    return (
        <BodyStyles layout={layout}>
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