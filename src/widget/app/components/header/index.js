import Avatar from '../avatar';
import Name from '../name';
import tw from 'twin.macro';

const HeaderStyles = tw.div`flex flex-row items-center justify-start h-full bg-widget-purple rounded-t-md px-3 py-2.5`;
const NamePatchStyles = tw.div`flex flex-col items-start justify-between md:pl-2`;

const Header = () => {
    return (
        <HeaderStyles>
            <Avatar />
            <NamePatchStyles>
                <Name />
            </NamePatchStyles>
        </HeaderStyles>
    );
};

export default Header;