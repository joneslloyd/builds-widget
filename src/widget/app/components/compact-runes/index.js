import { memo } from 'preact/compat';
import { useDataApi } from '../../lib/context/data-api';
import { useLoading } from '../../lib/context/loading';
import { useCallback } from 'preact/hooks';
import Rune from '../rune';
import { getLineColorFromIcon } from '../../lib/helpers';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';
import CompactRunesDisplay from '../../styles/components/compact-runes-display';
import PerkTooltipWrapper from '../tooltips/perk-tooltip-wrapper';

const CompactRunes = () => {

    const styled = useStyled();

    const CompactRunesStyles = styled(FlexCol)(() => [
        tw`mr-0 xl:(mr-10 w-9/12)`,
    ]);
    const CompactRunesSmallWhiteText = styled(SmallWhiteText)(() => [
        tw`uppercase`,
    ]);
    const CompactRunesDisplayStyles = styled(CompactRunesDisplay)(() => [
        tw`flex flex-col uppercase pt-2.5 md:(flex-row)`,
    ]);
    const RuneGroup = styled(CompactRunesDisplay)(({ leftSpace, line = false, loading = true }) => [
        tw`items-center relative bg-transparent!`,
        'large' === leftSpace ? tw`ml-8` : tw``,
        'largeMd' === leftSpace ? tw`md:ml-8` : tw``,
        'normal' === leftSpace ? tw`ml-7` : tw``,
        'small' === leftSpace ? tw`ml-6` : tw``,
        'very-small' === leftSpace ? tw`ml-3` : tw``,
        (true === loading && 'gold' === line) ? tw`before:(absolute z-0 inset-53p left-6 content block w-9/12 h-0.5 bg-widget-gold-line outline-widget-gold-outer-line animate-pulse)` : tw``,
        (false === loading && 'gold' === line) ? tw`before:(absolute z-0 inset-53p left-6 content block w-9/12 h-0.5 bg-widget-gold-line outline-widget-gold-outer-line)` : tw``,
        (true === loading && 'blue' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-blue-line outline-widget-blue-outer-line animate-pulse)` : tw``,
        (false === loading && 'blue' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-blue-line outline-widget-blue-outer-line)` : tw``,
        (true === loading && 'red' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-red-line outline-widget-red-outer-line animate-pulse)` : tw``,
        (false === loading && 'red' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-red-line outline-widget-red-outer-line)` : tw``,
        (true === loading && 'green' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-green-line outline-widget-green-outer-line animate-pulse)` : tw``,
        (false === loading && 'green' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-green-line outline-widget-green-outer-line)` : tw``,
        (true === loading && 'purple' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-purple-line outline-widget-purple-outer-line animate-pulse)` : tw``,
        (false === loading && 'purple' === line) ? tw`before:(absolute z-0 inset-53p left-7 content block w-9/12 h-0.5 bg-widget-purple-line outline-widget-purple-outer-line)` : tw``,
    ]);

    const FirstRuneGroup = styled(RuneGroup)(() => [
        tw`before:(w-8/12) md:(before:(w-9/12))`,
    ]);
    const LastRuneGroups = styled('div')(() => [
        tw`flex pt-2.5 md:(pt-0)`,
    ]);

    const { daData: { data: { lol: { champion: { build: { perks = {} } = {} } = {} } = {} } = {} } = {} } = useDataApi();
    const { loading: isLoading = true } = useLoading();

    const { IDs: iDs = [], style: primaryId = false, subStyle: secondaryId = false } = perks;

    const getPrimaryLine = useCallback(() => {
        return getLineColorFromIcon(primaryId);
    }, [primaryId]);

    const primaryLine = getPrimaryLine();

    const getSecondaryLine = useCallback(() => {
        return getLineColorFromIcon(secondaryId);
    }, [secondaryId]);

    const secondaryLine = getSecondaryLine();

    const loading = isLoading || (!primaryId);

    return (
        <CompactRunesStyles>
            <CompactRunesSmallWhiteText>Runes</CompactRunesSmallWhiteText>
            <FlexRow>
                <CompactRunesDisplayStyles>
                    <FirstRuneGroup line={primaryLine} loading={loading}>
                        <PerkTooltipWrapper by="riotId" identifier={primaryId}>
                            <Rune cursor="help" id={primaryId} wh={36} rounded={false} />
                        </PerkTooltipWrapper>
                        <PerkTooltipWrapper by="riotId" identifier={iDs[0]}>
                            <Rune cursor="help" id={iDs[0]} wh={48} rounded={false} leftSpace="smallest" />
                        </PerkTooltipWrapper>
                        <PerkTooltipWrapper by="riotId" identifier={iDs[1]}>
                            <Rune cursor="help" id={iDs[1]} wh={32} rounded="full" gold={true} leftSpace="small" />
                        </PerkTooltipWrapper>
                        <PerkTooltipWrapper by="riotId" identifier={iDs[2]}>
                            <Rune cursor="help" id={iDs[2]} wh={32} rounded="full" gold={true} leftSpace="large" />
                        </PerkTooltipWrapper>
                        <PerkTooltipWrapper by="riotId" identifier={iDs[3]}>
                            <Rune cursor="help" id={iDs[3]} wh={32} rounded="full" gold={true} leftSpace="large" />
                        </PerkTooltipWrapper>
                    </FirstRuneGroup>
                    <LastRuneGroups>
                        <RuneGroup leftSpace="largeMd" line={secondaryLine} loading={loading}>
                            <PerkTooltipWrapper by="riotId" identifier={secondaryId}>
                                <Rune cursor="help" id={secondaryId} wh={36} rounded={false} />
                            </PerkTooltipWrapper>
                            <PerkTooltipWrapper by="riotId" identifier={iDs[4]}>
                                <Rune cursor="help" id={iDs[4]} wh={32} rounded="full" gold={true} leftSpace="normal" />
                            </PerkTooltipWrapper>
                            <PerkTooltipWrapper by="riotId" identifier={iDs[4]}>
                                <Rune cursor="help" id={iDs[4]} wh={32} rounded="full" gold={true} leftSpace="large" />
                            </PerkTooltipWrapper>
                        </RuneGroup>
                        <RuneGroup leftSpace="small" loading={loading}>
                            <PerkTooltipWrapper by="riotId" identifier={iDs[6]}>
                                <Rune cursor="help" id={iDs[6]} wh={24} rounded="full" gold={true} borderWidth="1px" />
                            </PerkTooltipWrapper>
                            <PerkTooltipWrapper by="riotId" identifier={iDs[7]}>
                                <Rune cursor="help" id={iDs[7]} wh={24} rounded="full" gold={true} leftSpace="large" borderWidth="1px" />
                            </PerkTooltipWrapper>
                            <PerkTooltipWrapper by="riotId" identifier={iDs[8]}>
                                <Rune cursor="help" id={iDs[8]} wh={24} rounded="full" gold={true} leftSpace="large" borderWidth="1px" />
                            </PerkTooltipWrapper>
                        </RuneGroup>
                    </LastRuneGroups>
                </CompactRunesDisplayStyles>
            </FlexRow>
        </CompactRunesStyles>
    );
};

export default memo(CompactRunes);