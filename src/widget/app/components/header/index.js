import { useMemo } from 'preact/hooks';
import Avatar from '../avatar';
import Name from '../name';
import Role from '../role';
import Patch from '../patch';
import WinRate from '../win-rate';
import Matches from '../matches';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import FlexCol from '../../styles/components/flex-col';
import { parseStyles } from '../../lib/helpers';

const Header = () => {

    const styled = useStyled();

    const HeaderStyles = useMemo(() => {
        return styled(FlexRow)(() => {
            return parseStyles([
                tw`bg-widget-purple rounded-t-md px-3 py-2.5 border-b border-widget-purple-border`,
            ]);
        })
    }, [styled]);

    const NamePatchStyles = useMemo(() => {
        return styled(FlexCol)(() => {
            return parseStyles([
                tw`pl-2`,
            ]);
        })
    }, [styled]);

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