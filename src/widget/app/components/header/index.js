import Avatar from '../avatar';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';

const HeaderStyles = tw.div`flex flex-row items-center justify-start h-full bg-widget rounded-t-md`;
const NamePatchStyles = tw.div`flex flex-col items-start justify-between`;

const Header = () => {

    const { buildData } = useContext(BuildContext);
    const { data } = buildData;
    const { championSlug } = data;

    return (
        <HeaderStyles>
            <Avatar />
            <NamePatchStyles>

            </NamePatchStyles>
        </HeaderStyles>
    );
};

export default Header;