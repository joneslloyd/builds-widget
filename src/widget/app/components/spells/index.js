import SpellItem from '../spell-item';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';
import FlexCol from '../../styles/components/flex-col';
import FlexRow from '../../styles/components/flex-row';
import SmallWhiteText from '../../styles/components/small-white-text';
import SpellsDisplay from '../../styles/components/spells-display';

const SpellsStyles = tw(FlexCol)`w-full`;
const SpellsSmallWhiteText = tw(SmallWhiteText)`uppercase`;
const SpellsDisplayStyles = tw(SpellsDisplay)`uppercase pt-3`;

const Spells = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { spells = [] } = {} } = {} } = {} } = {} }, squidexApiBuildData: { data: { querySummonersSpellsV1Contents: squidexSpells = [] } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);

    const spellData = (spells.length > 0 && squidexSpells.length > 0) ? squidexSpells.filter(i => spells.includes(parseInt(i.flatData.riotId))) : [
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
    ];

    const loading = isLoading || (0 === spells.length || 0 === squidexSpells.length);

    return (
        <SpellsStyles>
            <SpellsSmallWhiteText>Spells</SpellsSmallWhiteText>
            <FlexRow>
                <SpellsDisplayStyles>
                    <SpellItem slug={spellData[0].flatData.slug} type="spell" />
                    <SpellItem slug={spellData[1].flatData.slug} type="spell" leftSpace="small" />
                </SpellsDisplayStyles>
            </FlexRow>
        </SpellsStyles>
    );
};

export default Spells;