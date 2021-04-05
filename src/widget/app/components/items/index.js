import ItemSet from '../item-set';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw, { styled } from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';
import ItemsDisplay from '../../styles/components/items-display';

const ItemsStyles = tw(FlexCol)`w-full`;
const ItemsStylesRow = tw(FlexRow)`w-full`;
const ItemsSmallWhiteText = tw(SmallWhiteText)`uppercase`;
const ItemsDisplayStyles = tw(ItemsDisplay)`flex flex-col w-full capitalize pt-2.5 pb-1 md:(flex-row)`;
const ItemSetGroup = styled('div')(({ leftSpace = false, paddingTop = false }) => [
    tw`flex flex-row w-full md:(w-auto)`,
    'largeMd' === leftSpace ? tw`md:(ml-8)` : tw``,
    'normalMd' === leftSpace ? tw`md:(ml-7)` : tw``,
    'smallMd' === leftSpace ? tw`md:(ml-5)` : tw``,
    'very-smallMd' === leftSpace ? tw`md:(ml-3)` : tw``,
    'smallMd' === paddingTop ? tw`pt-2.5 md:(pt-0)` : tw``
]);

const Items = () => {

    const dummyData = {
        type: 'items',
        items: []
    };
    const { dataApiBuildData: { data: { lol: { champion: { build: { items = [
        dummyData,
        dummyData,
        dummyData,
        dummyData,
    ] } = {} } = {} } = {} } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);

    const loading = isLoading || items[0].items.length === 0;

    return (
        <ItemsStyles>
            <ItemsSmallWhiteText>Items</ItemsSmallWhiteText>
            <ItemsStylesRow>
                <ItemsDisplayStyles>
                    <ItemSetGroup>
                        <ItemSet name={items[0].type} items={items[0].items} loading={loading} />
                        <ItemSet name={`${items[1].type} items`} items={items[1].items} loading={loading} leftSpace="small" />
                    </ItemSetGroup>
                    <ItemSetGroup leftSpace="smallMd" paddingTop="smallMd">
                        <ItemSet name={`${items[2].type} items`} items={items[2].items} loading={loading} />
                        <ItemSet name={`${items[3].type} items`} items={items[3].items} loading={loading} leftSpace="small" />
                    </ItemSetGroup>
                </ItemsDisplayStyles>
            </ItemsStylesRow>
        </ItemsStyles>
    );
};

export default Items;