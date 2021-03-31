import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';

const SkillOrderStyles = tw(FlexCol)``;
const SkillOrderSmallWhiteText = tw(SmallWhiteText)`uppercase`;
const SkillOrderRow = tw(FlexRow)`pt-3`;

const SkillOrder = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { skillOrder = [] } = {} } = {} } = {} } = {} } = {}, squidexApiBuildData: { data: { championCommonInfo: [{ flatData: { abilities: abilitiesRaw = [] } = {} } = {}] = [] } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);

    const abilities = abilitiesRaw.filter(a => a.flatData.activationKey !== 'PASSIVE') || [];
    const skillsMap = abilities.length > 0 ? abilities.reduce((a, i) => {
        a.push(i.flatData.activationKey);
        return a;
    }, []) : false;

    const loading = isLoading || 1 === 1;

    return (
        <SkillOrderStyles>
            <SkillOrderSmallWhiteText>Skill order</SkillOrderSmallWhiteText>
            <SkillOrderRow>
                {/* <p>DEV – Skills map: {JSON.stringify(skillsMap)}</p>
                <p>DEV - Skills order: {JSON.stringify(abilities)}</p> */}
                ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
            </SkillOrderRow>
        </SkillOrderStyles>
    );
};

export default SkillOrder;