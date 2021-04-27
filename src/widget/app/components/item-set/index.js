import SpellItem from '../spell-item';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexCol from '../../styles/components/flex-col';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';
import GameItemTooltipWrapper from '../tooltips/game-item-tooltip-wrapper';
import { parseStyles } from '../../lib/helpers';

const ItemSet = ({ name, items, loading = true, leftSpace = false }) => {

    const styled = useStyled();

    const ItemSetStyles = styled(FlexCol)(({ leftSpace }) => {
        return parseStyles([
            tw`w-auto`,
            'large' === leftSpace ? tw`ml-8` : tw``,
            'normal' === leftSpace ? tw`ml-7` : tw``,
            'small' === leftSpace ? tw`ml-5` : tw``,
            'baseNoneMdSmall' === leftSpace ? tw`ml-0 md:(ml-5)` : tw``,
            'very-small' === leftSpace ? tw`ml-3` : tw``,
        ]);
    });
    const ItemSetSmallPurpleText = styled(SmallPurpleText)(() => {
        return parseStyles([
            tw`capitalize`,
        ]);
    });
    const ItemSetDisplayStyles = styled(FlexRow)(() => {
        return parseStyles([
            tw`uppercase pt-1.5`,
        ]);
    });

    return (
        <ItemSetStyles leftSpace={leftSpace}>
            <ItemSetSmallPurpleText loading={loading}>{name}</ItemSetSmallPurpleText>
            <FlexRow>
                <ItemSetDisplayStyles>
                    {loading && (
                        <>
                            <SpellItem slug={false} />
                            <SpellItem slug={false} leftSpace="small" />
                            <SpellItem slug={false} leftSpace="small" />
                        </>
                    )}
                    {!loading && items.map((c, i) => {
                        const leftSpace = 0 === i ? false : 'small';
                        const key = `${c}-${i}`;
                        // ❗️We're intentionally only showing THREE here❗️
                        if (i < 3) {
                            return (
                                <GameItemTooltipWrapper by="riotId" identifier={c}>
                                    <SpellItem cursor="help" slug={c} key={key} leftSpace={leftSpace} />
                                </GameItemTooltipWrapper>
                            );
                        }
                    })}
                </ItemSetDisplayStyles>
            </FlexRow>
        </ItemSetStyles>
    );
};

export default ItemSet;