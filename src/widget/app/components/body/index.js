import { memo } from 'preact/compat';
import { useMemo } from 'preact/hooks';
import { useSquidexApi } from '../../lib/context/squidex-api';
import Runes from '../runes';
import Spells from '../spells';
import Items from '../items';
import Skills from '../skills';
import { championPosterImage, parseStyles } from '../../lib/helpers';
import { useStyled } from '../../lib/context/goober';
import tw, { theme } from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import { useStaticGlobalProps } from '../../lib/context/static-global-props';

const Body = () => {

    const { sqData: { data: { championCommonInfo = [] } = {} } } = useSquidexApi();
    const { layout } = useStaticGlobalProps();

    const { flatData: { name = '' } = {} } = championCommonInfo[0] || {};

    const styled = useStyled();

    const BodyStyles = useMemo(() => {
        return styled('div')(({ layout = false, posterUrl = false }) => {
            return parseStyles([
                tw`flex flex-col bg-transparent divide-y divide-widget-white-line`,
                ('full' === layout && posterUrl) ? {
                    [`@media (min-width: ${theme('screens.lg')})`]: {
                        'background-repeat': 'no-repeat',
                        'background-position': '183px -36px',
                        'background-size': '100% auto',
                        'background-image': `radial-gradient(circle at 61% 153px, ${theme('colors.widget-purple.light-65')}, ${theme('colors.widget-purple.light')} 30%), url('${posterUrl}')`,
                    },
                } : tw``,
            ]);
        });
    }, [styled]);

    const BodyRowCol = useMemo(() => {
        return styled(FlexRow)(({ pt = false, layout = false, hiddenBelowMd = false }) => {
            return parseStyles([
                true === pt ? tw`md:(pt-5) lg:(pt-7)` : tw``,
                'full' === layout ? tw`p-3 flex-col items-start lg:(p-5) xl:(flex-row items-end)` : tw`p-3 flex-col items-start lg:(p-5) xl:(flex-row)`,
                true === hiddenBelowMd ? tw`hidden md:(flex)` : tw``,
            ]);
        });
    }, [styled]);

    const posterUrl = useMemo(() => {
        return championPosterImage(name);
    }, [name]);

    return (
        <BodyStyles layout={layout} posterUrl={posterUrl}>
            <BodyRowCol layout={layout}>
                <Runes />
                <Spells />
            </BodyRowCol>
            <BodyRowCol pt={true}>
                <Items />
            </BodyRowCol>
            <BodyRowCol pt={true} hiddenBelowMd={'full' === layout}>
                <Skills />
            </BodyRowCol>
        </BodyStyles>
    );
};

export default memo(Body);