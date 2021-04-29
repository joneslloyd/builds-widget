import { memo } from 'preact/compat';
import GamesAnalyzed from '../games-analyzed';
import MoreBuilds from '../more-builds';
import PoweredBy from '../powered-by';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import { parseStyles } from '../../lib/helpers';

const Footer = () => {

    const styled = useStyled();

    const FooterStyles = styled(FlexRow)(() => {
        return parseStyles([
            tw`w-auto flex flex-col bg-widget-purple rounded-b-md p-3.5 border-t border-widget-purple-border md:(flex-row)`,
        ]);
    });

    return (
        <FooterStyles>
            <GamesAnalyzed />
            <MoreBuilds />
            <PoweredBy />
        </FooterStyles>
    );
};

export default memo(Footer);