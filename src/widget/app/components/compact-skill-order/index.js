import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';
import CompactSkillOrderDisplay from '../compact-skill-order-display';

const CompactSkillOrderStyles = tw(FlexCol)`hidden md:(flex pt-4) lg:(pt-5) xl:(pt-0)`;
const CompactSkillOrderSmallWhiteText = tw(SmallWhiteText)`uppercase`;
const CompactSkillOrderRow = tw(FlexRow)`pt-3`;

const CompactSkillOrder = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { skillOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] } = {} } = {} } = {} } = {} } = {}, squidexApiBuildData: { data: { championCommonInfo: [{ flatData: { abilities: abilitiesRaw = [] } = {} } = {}] = [] } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);

    const abilities = abilitiesRaw.filter(a => a.flatData.activationKey !== 'PASSIVE') || [];
    const skillMap = abilities.length > 0 ? abilities.reduce((a, i) => {
        a.push(i.flatData.activationKey);
        return a;
    }, []) : [];

    const loading = isLoading || (skillMap.length === 0);

    return (
        <CompactSkillOrderStyles>
            <CompactSkillOrderSmallWhiteText>Skill order</CompactSkillOrderSmallWhiteText>
            <CompactSkillOrderRow>
                <CompactSkillOrderDisplay skillMap={skillMap} skillOrder={skillOrder} loading={loading} />
            </CompactSkillOrderRow>
            {/** Add column version for desktop? */}
        </CompactSkillOrderStyles>
    );
};

export default CompactSkillOrder;