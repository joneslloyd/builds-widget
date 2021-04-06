import Rune from '../rune';
import FullRunesBodyRow from '../full-runes-body-row';
import { RunesSlotsMap } from '../../lib/helpers';
import tw, { styled } from 'twin.macro';
import SmallWhiteText from '../../styles/components/small-white-text';
import FullRunesDisplay from '../../styles/components/full-runes-display';

const FullRunesRuneGroupStyles = styled(FullRunesDisplay)(({ leftSpace = false }) => [
    tw`flex-col`,
    'normal' === leftSpace ? tw`mt-10 lg:(mt-0 ml-16)` : tw``,
]);
const FullRunesTitle = tw('div')`flex flex-row items-center justify-center`;
const FullRunesRuneTitle = tw(SmallWhiteText)`text-widget-purple-full-runes-text capitalize text-sm font-black ml-2`;
const FullRunesBody = tw('div')`flex flex-col items-center pt-5`;

const FullRunesRuneGroup = ({ mainId, iDs = [], type = 'primary', loading: isLoading = true }) => {


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
                <Rune id={mainId} wh={36} rounded={false} />
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