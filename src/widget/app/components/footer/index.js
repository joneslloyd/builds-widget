import GamesAnalyzed from '../games-analyzed';
import MoreBuilds from '../more-builds';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';

const FooterStyles = tw(FlexRow)`bg-widget-purple rounded-b-md p-3.5`;

const Footer = () => {

    return (
        <FooterStyles>
            <GamesAnalyzed />
            <MoreBuilds />
        </FooterStyles>
    );
};

export default Footer;