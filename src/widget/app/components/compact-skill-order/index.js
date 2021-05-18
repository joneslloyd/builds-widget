import { memo } from 'preact/compat';
import { useDataApi } from '../../lib/context/data-api';
import { useLoading } from '../../lib/context/loading';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import SmallWhiteText from '../../styles/components/small-white-text';
import CompactSkillOrderDisplay from '../compact-skill-order-display';
import { parseStyles } from '../../lib/helpers';

const CompactSkillOrder = () => {

    const styled = useStyled();

    const CompactSkillOrderStyles = styled(FlexCol)(() => {
        return parseStyles([
            tw`hidden md:(flex pt-4) lg:(pt-5) xl:(pt-0)`,
        ]);
    });
    const CompactSkillOrderSmallWhiteText = styled(SmallWhiteText)(() => {
        return parseStyles([
            tw`uppercase`,
        ]);
    });
    const CompactSkillOrderRow = styled(FlexRow)(() => {
        return parseStyles([
            tw`pt-3`,
        ]);
    });

    const { daData: { data: { lol: { champion: { build: { skillOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] } = {} } = {} } = {} } = {} } = {} } = useDataApi();
    const { loading = true } = useLoading();

    return (
        <CompactSkillOrderStyles>
            <CompactSkillOrderSmallWhiteText>Skill order</CompactSkillOrderSmallWhiteText>
            <CompactSkillOrderRow>
                <CompactSkillOrderDisplay skillOrder={skillOrder} loading={loading} />
            </CompactSkillOrderRow>
        </CompactSkillOrderStyles>
    );
};

export default memo(CompactSkillOrder);