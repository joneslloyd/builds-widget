import { memo } from 'preact/compat';
import { useDataApi } from '../../lib/context/data-api';
import { useLoading } from '../../lib/context/loading';
import FullRunesRuneGroup from '../full-runes-rune-group';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';
import FullRunesDisplay from '../../styles/components/full-runes-display';
import { parseStyles } from '../../lib/helpers';

const FullRunes = () => {

    const styled = useStyled();

    const FullRunesStyles = styled(FlexCol)(() => {
        return parseStyles([
            tw`mr-0 w-full xl:(mr-10 w-9/12)`,
        ]);
    });
    const FullRunesSmallWhiteText = styled(SmallWhiteText)(() => {
        return parseStyles([
            tw`uppercase`,
        ]);
    });
    const FullRunesDisplayRow = styled(FlexRow)(() => {
        return parseStyles([
            tw`w-full xl:min-w-32`,
        ]);
    });
    const FullRunesDisplayStyles = styled(FullRunesDisplay)(() => {
        return parseStyles([
            tw`flex uppercase pt-2.5 flex-col w-full items-center lg:(flex-row items-start)`,
        ]);
    });

    const { daData: { data: { lol: { champion: { build: { perks = {} } = {} } = {} } = {} } = {} } = {} } = useDataApi();
    const { loading = true } = useLoading();
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

export default memo(FullRunes);