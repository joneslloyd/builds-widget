import { memo } from 'preact/compat';
import { useMemo } from 'preact/hooks';
import { useDataApi } from '../../lib/context/data-api';
import { useSquidexApi } from '../../lib/context/squidex-api';
import { useLoading } from '../../lib/context/loading';
import SpellItem from '../spell-item';
import tw, { styled } from 'twin.macro';
import FlexCol from '../../styles/components/flex-col';
import FlexRow from '../../styles/components/flex-row';
import SmallWhiteText from '../../styles/components/small-white-text';
import SpellsDisplay from '../../styles/components/spells-display';
import SummonerSpellTooltipWrapper from '../tooltips/summoner-spell-tooltip-wrapper';

const SpellsStyles = styled(FlexCol)(() => [
    tw`w-full pt-4 lg:(pt-5) xl:(pt-0)`
]);
const SpellsSmallWhiteText = tw(SmallWhiteText)`uppercase`;
const SpellsDisplayStyles = tw(SpellsDisplay)`uppercase pt-3`;
const TooltippableSpellItem = tw(SpellItem)`cursor-help`;

const Spells = () => {

    const { daData: { data: { lol: { champion: { build: { spells = [] } = {} } = {} } = {} } = {} } } = useDataApi();
    const { sqData: { data: { querySummonersSpellsV1Contents: squidexSpells = [] } = {} } = {} } = useSquidexApi();
    const { loading: isLoading = true } = useLoading();

    const spellData = useMemo(() => {
        return (spells.length > 0 && squidexSpells.length > 0) ? squidexSpells.filter(i => spells.includes(parseInt(i.flatData.riotId))) : [
            {
                flatData: {
                    slug: false
                }
            },
            {
                flatData: {
                    slug: false
                }
            }
        ]
    }, [spells, squidexSpells]);

    const firstSlug = spellData[0].flatData.slug;
    const secondSlug = spellData[1].flatData.slug;

    const loading = isLoading || (0 === spells.length || 0 === squidexSpells.length);

    return (
        <SpellsStyles>
            <SpellsSmallWhiteText>Spells</SpellsSmallWhiteText>
            <FlexRow>
                <SpellsDisplayStyles>
                    <SummonerSpellTooltipWrapper slug={firstSlug}>
                        <TooltippableSpellItem slug={firstSlug} type="spell" />
                    </SummonerSpellTooltipWrapper>
                    <SummonerSpellTooltipWrapper slug={secondSlug}>
                        <TooltippableSpellItem slug={secondSlug} type="spell" leftSpace="small" />
                    </SummonerSpellTooltipWrapper>
                </SpellsDisplayStyles>
            </FlexRow>
        </SpellsStyles>
    );
};

export default memo(Spells);