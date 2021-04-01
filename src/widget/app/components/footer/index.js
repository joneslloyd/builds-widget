import GamesAnalyzed from '../games-analyzed';
import MoreBuilds from '../more-builds';
import PoweredBy from '../powered-by';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';

const FooterStyles = tw(FlexRow)`bg-widget-purple rounded-b-md p-3.5 border-t border-widget-purple-border`;

const Footer = () => {

    return (
        <FooterStyles>
            <GamesAnalyzed />
            <MoreBuilds />
            <PoweredBy />
        </FooterStyles>
    );
};

export default Footer;