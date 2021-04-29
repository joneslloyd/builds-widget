import { memo } from 'preact/compat';
import { useMemo } from 'preact/hooks';
import { useDataApi } from '../../lib/context/data-api';
import { useSquidexApi } from '../../lib/context/squidex-api';
import { useLoading } from '../../lib/context/loading';
import FullSkillOrderSkillsMap from '../full-skills-skills-map';
import FullSkillOrderDisplay from '../full-skill-order-display';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';
import { parseStyles } from '../../lib/helpers';

const FullSkills = () => {

    const styled = useStyled();

    const FullSkillOrderStyles = useMemo(() => {
        return styled(FlexCol)(() => {
            return parseStyles([
                tw`hidden md:(flex pt-4) lg:(pt-5) xl:(pt-0)`,
            ]);
        })
    }, [styled]);

    const FullSkillOrderSmallWhiteText = useMemo(() => {
        return styled(SmallWhiteText)(() => {
            return parseStyles([
                tw`uppercase`,
            ]);
        })
    }, [styled]);

    const FullSkillOrderRow = useMemo(() => {
        return styled(FlexRow)(({ pt = false }) => {
            return parseStyles([
                tw``,
                'normal' === pt ? tw`pt-3` : tw``,
            ]);
        })
    }, [styled]);

    const { daData: { data: { lol: { champion: { build: { skillOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] } = {} } = {} } = {} } = {} } = {} } = useDataApi();
    const { sqData: { data: { championCommonInfo: [{ flatData: { abilities: abilitiesRaw = [] } = {} } = {}] = [] } = {} } = {} } = useSquidexApi();
    const { loading: isLoading = true } = useLoading();

    const abilities = useMemo(() => {
        return abilitiesRaw.filter(a => a.flatData.activationKey !== 'PASSIVE') || [];
    }, [abilitiesRaw]);

    const skillMap = useMemo(() => {
        return abilities.length > 0 ? abilities.reduce((a, i) => {
            a.push(i.flatData.activationKey);
            return a;
        }, []) : []
    }, [abilities]);

    const loading = isLoading || (skillMap.length === 0);

    return (
        <FullSkillOrderStyles>
            <FullSkillOrderRow>
                <FullSkillOrderSmallWhiteText>Skill order</FullSkillOrderSmallWhiteText>
                <FullSkillOrderSkillsMap skillMap={skillMap} loading={loading} />
            </FullSkillOrderRow>
            <FullSkillOrderRow pt="normal">
                <FullSkillOrderDisplay abilities={abilities} skillOrder={skillOrder} skillMap={skillMap} loading={loading} />
            </FullSkillOrderRow>
        </FullSkillOrderStyles>
    );
};

export default memo(FullSkills);