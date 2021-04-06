import FullRunesRuneGroup from '../full-runes-rune-group';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';
import FullRunesDisplay from '../../styles/components/compact-runes-display';

const FullRunesStyles = tw(FlexCol)`mr-0 w-full xl:(mr-10 w-9/12)`;
const FullRunesSmallWhiteText = tw(SmallWhiteText)`uppercase`;
const FullRunesDisplayRow = tw(FlexRow)`w-full`;
const FullRunesDisplayStyles = tw(FullRunesDisplay)`flex uppercase pt-2.5 flex-col w-full items-center lg:(flex-row items-start)`;

const FullRunes = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { perks = {} } = {} } = {} } = {} } = {} } = {}, loading = true } = useContext(BuildContext);
    const { IDs: iDs = [], style: primaryId = false, subStyle: secondaryId = false } = perks;

    return (
        <FullRunesStyles>
            <FullRunesSmallWhiteText>Runes</FullRunesSmallWhiteText>
            <FullRunesDisplayRow>
                <FullRunesDisplayStyles>
                    <FullRunesRuneGroup mainId={primaryId} iDs={iDs} type="primary" loading={loading} />
                    <FullRunesRuneGroup mainId={secondaryId} iDs={iDs} type="secondary" loading={loading} />
                </FullRunesDisplayStyles>
            </FullRunesDisplayRow>
        </FullRunesStyles>
    );
};

export default FullRunes;