import { memo } from 'preact/compat';
import { useDataApi } from '../../lib/context/data-api';
import { useLoading } from '../../lib/context/loading';
import { parseStyles, rolenameIcon } from '../../lib/helpers';
import Image from '../image';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';

const Role = () => {

    const styled = useStyled();

    const RoleStyles = styled(FlexRow)(() => {
        return parseStyles([
            tw`items-center`,
        ]);
    });
    const RoleSmallPurpleText = styled(SmallPurpleText)(() => {
        return parseStyles([
            tw`ml-1.5!`,
        ]);
    });

    const { daData: { data: { lol: { champion: { build: { role: rawRole = 'XXX' } = {} } = {} } = {} } = {} } = {} } = useDataApi();
    const { loading: isLoading = true } = useLoading();

    const role = 'ADC' === rawRole ? 'bot' : rawRole.toLowerCase();
    const roleIcon = rolenameIcon(rawRole);

    const loading = isLoading || ('xxx' === role || !role);

    return (
        <RoleStyles>
            <Image src={roleIcon} title={role} alt={role} width={11} height={11} bgColor={false} />
            <RoleSmallPurpleText loading={loading}>{role}</RoleSmallPurpleText>
        </RoleStyles>
    );
};

export default memo(Role);