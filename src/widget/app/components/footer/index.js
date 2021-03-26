import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';

const FooterStyles = tw.div`flex flex-row items-center justify-start h-full bg-widget-purple rounded-b-md`;

const Footer = () => {

    const { dataApiBuildData: { data = {} } = {} } = useContext(BuildContext);

    return (
        <FooterStyles>
            {JSON.stringify(data)}
        </FooterStyles>
    );
};

export default Footer;