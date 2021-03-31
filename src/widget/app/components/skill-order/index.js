import RightArrow from '../right-arrow';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';

const SkillOrderStyles = tw(FlexCol)``;
const SkillOrderSmallWhiteText = tw(SmallWhiteText)`uppercase`;

const SkillOrder = () => {

    const { dataApiBuildData: { data: { lol: { champion = {} } = {} } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);
    console.log(champion);
    const loading = isLoading || 1 === 1;

    return (
        <SkillOrderStyles>
            <SkillOrderSmallWhiteText>Skill order</SkillOrderSmallWhiteText>
            <FlexRow>
                <p>Test</p><RightArrow /><p>Test</p>
            </FlexRow>
        </SkillOrderStyles>
    );
};

export default SkillOrder;