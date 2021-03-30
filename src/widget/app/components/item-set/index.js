import SpellItem from '../spell-item';
import tw, { styled } from 'twin.macro';
import FlexCol from '../../styles/components/flex-col';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';

const ItemSetStyles = styled(FlexCol)(({ leftSpace }) => [
    tw`w-auto`,
    'large' === leftSpace ? tw`md:(ml-8)` : tw``,
    'normal' === leftSpace ? tw`md:(ml-7)` : tw``,
    'small' === leftSpace ? tw`md:(ml-6)` : tw``,
    'very-small' === leftSpace ? tw`md:(ml-3)` : tw``,
]);
const ItemSetSmallPurpleText = tw(SmallPurpleText)`capitalize`;
const ItemSetDisplayStyles = tw(FlexRow)`uppercase pt-1.5`;

const ItemSet = ({ name, items, loading = true, leftSpace = false }) => {

    return (
        <ItemSetStyles leftSpace={leftSpace}>
            <ItemSetSmallPurpleText loading={loading}>{name}</ItemSetSmallPurpleText>
            <FlexRow>
                <ItemSetDisplayStyles>
                    <SpellItem slug={items[0]} />
                    {typeof items[1] !== 'undefined' && (
                        <SpellItem slug={items[1]} leftSpace="small" />
                    )}
                    {typeof items[2] !== 'undefined' && (
                        <SpellItem slug={items[2]} leftSpace="small" />
                    )}
                </ItemSetDisplayStyles>
            </FlexRow>
        </ItemSetStyles>
    );
};

export default ItemSet;