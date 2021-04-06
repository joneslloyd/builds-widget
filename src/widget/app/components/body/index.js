import Runes from '../runes';
import Spells from '../spells';
import Items from '../items';
import SkillPriority from '../skill-priority';
import SkillOrder from '../skill-order';
import { championPosterImage } from '../../lib/helpers';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw, { styled, theme } from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';

const BodyStyles = styled('div')(({ layout = false, posterUrl = false }) => [
    tw`flex flex-col bg-transparent divide-y divide-widget-white-line`,
    ('full' === layout && posterUrl) && {
        [`@media (min-width: ${theme('screens.lg')})`]: {
            'background-repeat': 'no-repeat',
            'background-position': '183px -36px',
            'background-size': '100% 100%',
            'background-image': `radial-gradient(circle at 61% 153px, ${theme('colors.widget-purple.light-65')}, ${theme('colors.widget-purple.light')} 30%), url('${posterUrl}')`,
        },
    },
]);

const BodyRowCol = styled(FlexRow)(({ pt = false, layout = false }) => [
    true === pt ? tw`md:(pt-5) lg:(pt-7)` : tw``,
    'full' === layout ? tw`p-3 flex-col items-start lg:(p-5) xl:(flex-row items-end)` : tw`p-3 flex-col items-start lg:(p-5) xl:(flex-row)`
]);

const Body = () => {

    const { squidexApiBuildData: { data: { championCommonInfo = [] } = {} }, layout = 'compact', loading = true } = useContext(BuildContext);
    const { flatData: { name = '' } = {} } = championCommonInfo[0] || {};
    const posterUrl = championPosterImage(name);

    return (
        <BodyStyles layout={layout} posterUrl={posterUrl}>
            <BodyRowCol layout={layout}>
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