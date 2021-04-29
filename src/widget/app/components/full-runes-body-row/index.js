import Rune from '../rune';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import PerkTooltipWrapper from '../tooltips/perk-tooltip-wrapper';
import { parseStyles } from '../../lib/helpers';

const FullRunesBodyRow = ({ index = 0, data = {}, type = 'primary', loading = true }) => {

    const styled = useStyled();

    const FullRunesBodyRowStyles = styled('div')(({ topSpace = false, justifyContentSpaceBetween = false }) => {
        return parseStyles([
            tw`flex flex-row w-full justify-center items-center`,
            'normal' === topSpace ? tw`pt-2.5` : tw``,
            'large' === topSpace ? tw`pt-5` : tw``,
            'x-large' === topSpace ? tw`pt-8` : tw``,
            true === justifyContentSpaceBetween ? tw`justify-between` : tw``
        ]);
    });
    const FullRunesBodyRowRune = styled('div')(({ leftSpace = false }) => {
        return parseStyles([
            tw`px-0`,
            'normal' === leftSpace ? tw`pl-2.5` : tw``,
            'large' === leftSpace ? tw`pl-5` : tw``,
            'x-large' === leftSpace ? tw`pl-8` : tw``,
        ]);
    });

    const { hasCircle, runes } = data;
    const runeSize = 'primary' === type ? (index === 0 ? 48 : 36) : (index > 2 ? 24 : 36);
    const topSpace = index === 0 ? false : ('secondary' === type && index > 2 ? 'x-large' : 'large');
    const justifyContentSpaceBetween = ('secondary' === type && index === 0) ? true : false;
    const runeBorderWidth = ('secondary' === type && index > 2) ? '1px' : '2px';

    return (
        <FullRunesBodyRowStyles topSpace={topSpace} justifyContentSpaceBetween={justifyContentSpaceBetween}>
            {runes && runes.map((runeData, runeIndex) => {

                const { rune = false, hasRune = false } = runeData;
                const leftSpace = runeIndex === 0 ? false : (index === 0 ? 'normal' : (('secondary' === type && index > 2) ? 'x-large' : 'large'));

                const key = `${rune ? rune : 'rune'}-${runeIndex}`;

                return (
                    <FullRunesBodyRowRune leftSpace={leftSpace}>
                        <PerkTooltipWrapper by="riotId" identifier={rune}>
                            <Rune loading={loading} cursor="help" greyed={!hasRune} key={key} id={rune} wh={runeSize} borderWidth={runeBorderWidth} rounded={hasCircle} gold={hasRune && hasCircle} />
                        </PerkTooltipWrapper>
                    </FullRunesBodyRowRune>
                );
            })}
        </FullRunesBodyRowStyles>
    );
};

export default FullRunesBodyRow;