import FullSkillOrderSkillsMap from '../full-skills-skills-map';
import FullSkillOrderDisplay from '../full-skill-order-display';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw, { styled } from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';

const FullSkillOrderStyles = tw(FlexCol)`hidden md:(flex pt-4) lg:(pt-5) xl:(pt-0)`;
const FullSkillOrderSmallWhiteText = tw(SmallWhiteText)`uppercase`;
const FullSkillOrderRow = styled(FlexRow)(({ pt = false }) => [
    tw``,
    'normal' === pt ? tw`pt-3` : tw``,
]);

const FullSkills = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { skillOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] } = {} } = {} } = {} } = {} } = {}, squidexApiBuildData: { data: { championCommonInfo: [{ flatData: { abilities: abilitiesRaw = [] } = {} } = {}] = [] } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);

    const abilities = abilitiesRaw.filter(a => a.flatData.activationKey !== 'PASSIVE') || [];
    const skillMap = abilities.length > 0 ? abilities.reduce((a, i) => {
        a.push(i.flatData.activationKey);
        return a;
    }, []) : [];

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

export default FullSkills;