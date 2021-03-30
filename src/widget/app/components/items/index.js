import ItemSet from '../item-set';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw, { styled } from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';
import ItemsDisplay from '../../styles/components/items-display';

const ItemsStyles = tw(FlexCol)``;
const ItemsSmallWhiteText = tw(SmallWhiteText)`uppercase`;
const ItemsDisplayStyles = tw(ItemsDisplay)`capitalize pt-3`;

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

    const loading = isLoading || items.length === 0;

    return (
        <ItemsStyles>
            <ItemsSmallWhiteText>Items</ItemsSmallWhiteText>
            <FlexRow>
                <ItemsDisplayStyles>
                    <ItemSet name={items[0].type} items={items[0].items} loading={loading} />
                    <ItemSet name={`${items[1].type} items`} items={items[1].items} loading={loading} leftSpace="small" />
                    <ItemSet name={`${items[2].type} items`} items={items[2].items} loading={loading} leftSpace="small" />
                    <ItemSet name={`${items[3].type} items`} items={items[3].items} loading={loading} leftSpace="small" />
                </ItemsDisplayStyles>
            </FlexRow>
        </ItemsStyles>
    );
};

export default Items;