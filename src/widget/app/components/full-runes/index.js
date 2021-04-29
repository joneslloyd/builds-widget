import { memo } from 'preact/compat';
import { useMemo } from 'preact/hooks';
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

    const FullRunesStyles = useMemo(() => {
        return styled(FlexCol)(() => {
            return parseStyles([
                tw`mr-0 w-full xl:(mr-10 w-9/12)`,
            ]);
        });
    }, [styled]);

    const FullRunesSmallWhiteText = useMemo(() => {
        return styled(SmallWhiteText)(() => {
            return parseStyles([
                tw`uppercase`,
            ]);
        });
    }, [styled]);

    const FullRunesDisplayRow = useMemo(() => {
        return styled(FlexRow)(() => {
            return parseStyles([
                tw`w-full`,
            ]);
        });
    }, [styled]);

    const FullRunesDisplayStyles = useMemo(() => {
        return styled(FullRunesDisplay)(() => {
            return parseStyles([
                tw`flex uppercase pt-2.5 flex-col w-full items-center lg:(flex-row items-start)`,
            ]);
        });
    }, [styled]);

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