import Avatar from '../avatar';
import Name from '../name';
import Role from '../role';
import Patch from '../patch';
import WinRate from '../win-rate';
import Matches from '../matches';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';

const HeaderStyles = tw(FlexRow)`bg-widget-purple rounded-t-md px-3 py-2.5 border-b border-widget-purple-border`;
const NamePatchStyles = tw(FlexCol)`md:pl-2`;

const Header = () => {
    return (
        <HeaderStyles>
            <Avatar />
            <NamePatchStyles>
                <Name />
                <FlexRow>
                    <Role />
                    <Patch />
                    <WinRate />
                    <Matches />
                </FlexRow>
            </NamePatchStyles>
        </HeaderStyles>
    );
};

export default Header;