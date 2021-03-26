import Avatar from '../avatar';
import tw from 'twin.macro';

const HeaderStyles = tw.div`flex flex-row items-center justify-start h-full bg-widget-purple rounded-t-md`;
const NamePatchStyles = tw.div`flex flex-col items-start justify-between`;

const Header = () => {
    return (
        <HeaderStyles>
            <Avatar />
            <NamePatchStyles>

            </NamePatchStyles>
        </HeaderStyles>
    );
};

export default Header;