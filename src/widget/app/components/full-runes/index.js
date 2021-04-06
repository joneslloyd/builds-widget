import Rune from '../rune';
import { RunesSlotsMap } from '../../lib/helpers';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw, { styled } from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';
import FullRunesDisplay from '../../styles/components/compact-runes-display';

const FullRunesStyles = tw(FlexCol)`mr-0 w-full xl:(mr-10 w-9/12)`;
const FullRunesSmallWhiteText = tw(SmallWhiteText)`uppercase`;
const FullRunesDisplayRow = tw(FlexRow)`w-full`;
const FullRunesDisplayStyles = tw(FullRunesDisplay)`flex uppercase pt-2.5 flex-col w-full items-center lg:(flex-row items-start)`;
const FullRunesRuneGroup = styled(FullRunesDisplay)(({ leftSpace = false }) => [
    tw`flex-col`,
    'normal' === leftSpace ? tw`mt-10 lg:(mt-0 ml-16)` : tw``,
]);
const FullRunesTitle = tw('div')`flex flex-row items-center justify-center`;
const FullRunesRuneTitle = tw(SmallWhiteText)`text-widget-purple-full-runes-text capitalize text-sm font-black ml-2`;
const FullRunesBody = tw('div')`flex flex-col items-center pt-5`;
const FullRunesBodyRow = styled('div')(({ topSpace = false, justifyContentSpaceBetween = false }) => [
    tw`flex flex-row w-full justify-center`,
    'normal' === topSpace ? tw`pt-2.5` : tw``,
    'large' === topSpace ? tw`pt-5` : tw``,
    'x-large' === topSpace ? tw`pt-8` : tw``,
    true === justifyContentSpaceBetween ? tw`justify-between` : tw``
]);
const FullRunesBodyRowRune = styled('div')(({ leftSpace = false }) => [
    tw`px-0`,
    'normal' === leftSpace ? tw`pl-2.5` : tw``,
    'large' === leftSpace ? tw`pl-5` : tw``,
    'x-large' === leftSpace ? tw`pl-8` : tw``,
]);

const FullRunes = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { perks = {} } = {} } = {} } = {} } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);
    const { IDs: iDs = [], style: primaryId = false, subStyle: secondaryId = false } = perks;

    //Primary rune data
    const primaryRuneSlot = RunesSlotsMap.filter(r => {
        const { title: { icon = 0 } = {} } = r;
        return icon === primaryId;
    })[0];

    //Primary rune title
    const { title: { label: primaryTitle = 'xxxxxxx' } = {}, slots: primarySlots } = primaryRuneSlot || {};

    //Primary rune slots
    const primaryRunes = primarySlots ? primarySlots.map((s, i) => {
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
            hasCircle: false
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

    //Secondary rune data
    const secondaryRuneSlot = RunesSlotsMap.filter(r => {
        const { title: { icon = 0 } = {} } = r;
        return icon === secondaryId;
    })[0];

    //Secondary rune title
    const { title: { label: secondaryTitle = 'xxxxxxx' } = {}, slots: secondarySlots } = secondaryRuneSlot || {};

    //Secondary rune slots
    const secondaryRunes = secondarySlots ? secondarySlots.map((s, i) => {
        const hasCircle = i !== 0;
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
    ;

    const loading = isLoading || (primaryTitle === 'xxxxxxx');

    return (
        <FullRunesStyles>
            <FullRunesSmallWhiteText>Runes</FullRunesSmallWhiteText>
            <FullRunesDisplayRow>
                <FullRunesDisplayStyles>
                    <FullRunesRuneGroup>
                        <FullRunesTitle>
                            <Rune id={primaryId} wh={36} rounded={false} />
                            <FullRunesRuneTitle loading={loading}>{primaryTitle}</FullRunesRuneTitle>
                        </FullRunesTitle>
                        <FullRunesBody>
                            {primaryRunes && primaryRunes.map((row, rowIndex) => {

                                const { hasCircle, runes } = row;
                                const runeSize = rowIndex === 0 ? 48 : 36;
                                const topSpace = rowIndex === 0 ? false : 'large';

                                return (
                                    <FullRunesBodyRow key={rowIndex} topSpace={topSpace}>
                                        {runes && runes.map((runeData, runeIndex) => {

                                            const { rune, hasRune } = runeData;
                                            const leftSpace = runeIndex === 0 ? false : (rowIndex === 0 ? 'normal' : 'large');

                                            return (
                                                <FullRunesBodyRowRune leftSpace={leftSpace}>
                                                    <Rune greyed={!hasRune} key={rune} id={rune} wh={runeSize} rounded={hasCircle} gold={hasRune && hasCircle} />
                                                </FullRunesBodyRowRune>
                                            );
                                        })}
                                    </FullRunesBodyRow>
                                );
                            })}
                        </FullRunesBody>
                    </FullRunesRuneGroup>
                    <FullRunesRuneGroup leftSpace="normal">
                        <FullRunesTitle>
                            <Rune id={secondaryId} wh={36} rounded={false} />
                            <FullRunesRuneTitle loading={loading}>{secondaryTitle}</FullRunesRuneTitle>
                        </FullRunesTitle>
                        <FullRunesBody>
                            {secondaryRunes && secondaryRunes.map((row, rowIndex) => {

                                const { hasCircle, runes } = row;
                                const runeSize = rowIndex === secondaryRunes.length - 1 ? 24 : 36;
                                const topSpace = rowIndex === 0 ? false : (rowIndex === secondaryRunes.length - 1 ? 'x-large' : 'large');
                                const justifyContentSpaceBetween = rowIndex === 0 ? true : false;
                                const runeBorderWidth = rowIndex === secondaryRunes.length - 1 ? '1px' : '2px';

                                return (
                                    <FullRunesBodyRow key={rowIndex} topSpace={topSpace} justifyContentSpaceBetween={justifyContentSpaceBetween}>
                                        {runes && runes.map((runeData, runeIndex) => {

                                            const { rune, hasRune } = runeData;
                                            const leftSpace = runeIndex === 0 ? false : (rowIndex === 0 ? 'normal' : (rowIndex === secondaryRunes.length - 1 ? 'x-large' : 'large'));

                                            return (
                                                <FullRunesBodyRowRune leftSpace={leftSpace}>
                                                    <Rune greyed={!hasRune} key={rune} id={rune} wh={runeSize} borderWidth={runeBorderWidth} rounded={hasCircle} gold={hasRune && hasCircle} />
                                                </FullRunesBodyRowRune>
                                            );
                                        })}
                                    </FullRunesBodyRow>
                                );
                            })}
                        </FullRunesBody>
                    </FullRunesRuneGroup>
                </FullRunesDisplayStyles>
            </FullRunesDisplayRow>
        </FullRunesStyles>
    );
};

export default FullRunes;