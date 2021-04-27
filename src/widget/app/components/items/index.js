import { memo } from 'preact/compat';
import { useDataApi } from '../../lib/context/data-api';
import { useLoading } from '../../lib/context/loading';
import ItemSet from '../item-set';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';
import ItemsDisplay from '../../styles/components/items-display';
import { parseStyles } from '../../lib/helpers';

const Items = () => {

    const styled = useStyled();

    const ItemsStyles = styled(FlexCol)(() => {
        return parseStyles([
            tw`w-full`,
        ]);
    });
    const ItemsStylesRow = styled(FlexRow)(() => {
        return parseStyles([
            tw`w-full`,
        ]);
    });
    const ItemsSmallWhiteText = styled(SmallWhiteText)(() => {
        return parseStyles([
            tw`uppercase`,
        ]);
    });
    const ItemsDisplayStyles = styled(ItemsDisplay)(() => {
        return parseStyles([
            tw`flex flex-col w-full capitalize pt-2.5 pb-1 md:(flex-row)`,
        ]);
    });
    const ItemSetGroup = styled('div')(({ paddingTop = false }) => {
        return parseStyles([
            tw`flex flex-row w-full md:(w-auto)`,
            'small' === paddingTop ? tw`pt-2.5 md:(pt-0)` : tw`pt-0`,
        ]);
    });


    const dummyData = {
        type: 'items',
        items: []
    };

    const { daData: { data: { lol: { champion: { build: { items = [
        dummyData,
        dummyData,
        dummyData,
        dummyData,
    ] } = {} } = {} } = {} } = {} } = {} } = useDataApi();
    const { loading: isLoading = true } = useLoading();

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
                    <ItemSetGroup paddingTop="small">
                        <ItemSet name={`${items[2].type} items`} items={items[2].items} loading={loading} leftSpace="baseNoneMdSmall" />
                        <ItemSet name={`${items[3].type} items`} items={items[3].items} loading={loading} leftSpace="small" />
                    </ItemSetGroup>
                </ItemsDisplayStyles>
            </ItemsStylesRow>
        </ItemsStyles>
    );
};

export default memo(Items);