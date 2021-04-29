import { useMemo } from 'preact/hooks';
import Rune from '../rune';
import FullRunesBodyRow from '../full-runes-body-row';
import { parseStyles, RunesSlotsMap } from '../../lib/helpers';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import SmallWhiteText from '../../styles/components/small-white-text';
import FullRunesDisplay from '../../styles/components/full-runes-display';
import PerkTooltipWrapper from '../tooltips/perk-tooltip-wrapper';

const FullRunesRuneGroup = ({ mainId, iDs = [], type = 'primary', loading: isLoading = true }) => {

    const styled = useStyled();

    const FullRunesRuneGroupStyles = useMemo(() => {
        return styled(FullRunesDisplay)(({ leftSpace = false }) => {
            return parseStyles([
                tw`flex-col`,
                'normal' === leftSpace ? tw`mt-10 lg:(mt-0 ml-16)` : tw``,
            ]);
        })
    }, [styled]);

    const FullRunesTitle = useMemo(() => {
        return styled('div')(() => {
            return parseStyles([
                tw`flex flex-row items-center justify-center`,
            ]);

        })
    }, [styled]);

    const FullRunesRuneTitle = useMemo(() => {
        return styled(SmallWhiteText)(() => {
            return parseStyles([
                tw`text-widget-purple-full-runes-text capitalize text-sm font-bold ml-2`,
            ]);
        })
    }, [styled]);

    const FullRunesBody = useMemo(() => {
        return styled('div')(() => {
            return parseStyles([
                tw`flex flex-col items-center pt-5`,
            ]);
        })
    }, [styled]);

    //Rune data
    const thisRuneSlot = RunesSlotsMap.filter(r => {
        const { title: { icon = 0 } = {} } = r;
        return icon === mainId;
    })[0];

    //Rune title
    const { title: { label: theTitle = 'xxxxxxx' } = {}, slots: theSlots } = thisRuneSlot || {};

    //Rune slots
    const theRunes = theSlots ? theSlots.map((s, i) => {
        const hasCircle = i !== 0 ? 'full' : false;
        const runes = s.map(r => {
            const hasRune = iDs.includes(r);
            return {
                rune: r,
                hasRune
            };
        });
        return {
            hasCircle,
            runes
        }
    }) : [
        {
            runes: [
                { rune: false },
                { rune: false },
                { rune: false },
                { rune: false },
            ],
            hasCircle: 'primary' === type ? false : 'full'
        },
        {
            runes: [
                { rune: false },
                { rune: false },
                { rune: false },
                { rune: false },
            ],
            hasCircle: 'full'
        },
        {
            runes: [
                { rune: false },
                { rune: false },
                { rune: false },
                { rune: false },
            ],
            hasCircle: 'full'
        },
        {
            runes: [
                { rune: false },
                { rune: false },
                { rune: false },
                { rune: false },
            ],
            hasCircle: 'full'
        },
    ];

    const outerLeftSpace = 'secondary' === type ? 'normal' : false;
    const loading = isLoading || (theTitle === 'xxxxxxx');

    return (
        <FullRunesRuneGroupStyles leftSpace={outerLeftSpace}>
            <FullRunesTitle>
                <PerkTooltipWrapper by="riotId" identifier={mainId}>
                    <Rune cursor="help" id={mainId} wh={36} rounded={false} />
                </PerkTooltipWrapper>
                <FullRunesRuneTitle loading={loading}>{theTitle}</FullRunesRuneTitle>
            </FullRunesTitle>
            <FullRunesBody>
                {theRunes && theRunes.map((row, rowIndex) => {
                    const totalItems = theRunes.length;
                    const key = `${rowIndex}-${totalItems}`;
                    return (
                        <FullRunesBodyRow key={key} index={rowIndex} totalItems={totalItems} data={row} type={type} />
                    );
                })}
            </FullRunesBody>
        </FullRunesRuneGroupStyles>

    );
};

export default FullRunesRuneGroup;