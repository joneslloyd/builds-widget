import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';

const SkillPriorityStyles = tw(FlexCol)``;
const SkillPrioritySmallWhiteText = tw(SmallWhiteText)`uppercase`;

const SkillPriority = () => {

    const { dataApiBuildData: { data: { lol: { champion = {} } = {} } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);
    console.log(champion);
    const loading = isLoading || 1 === 1;

    return (
        <SkillPriorityStyles>
            <SkillPrioritySmallWhiteText>Skill priority</SkillPrioritySmallWhiteText>
            <FlexRow>
                <p>TEST</p>
            </FlexRow>
        </SkillPriorityStyles>
    );
};

export default SkillPriority;