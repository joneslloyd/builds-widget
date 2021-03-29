import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import { rolenameIcon } from '../../lib/helpers';
import Image from '../image';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';

const RoleStyles = tw(FlexRow)`items-center`;
const RoleSmallPurpleText = tw(SmallPurpleText)`pl-1.5`;

const Role = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { role: rawRole = 'XXX' } = {} } = {} } = {} } = {} } = {}, loading: isLoading = true } = useContext(BuildContext);

    const role = rawRole.toLowerCase();
    const roleIcon = rolenameIcon(rawRole);

    const loading = isLoading || ('xxx' === role || !role);

    return (
        <RoleStyles>
            <Image src={roleIcon} title={role} alt={role} width={11} height={11} />
            <RoleSmallPurpleText loading={loading}>{role}</RoleSmallPurpleText>
        </RoleStyles>
    );
};

export default Role;