import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import tw from 'twin.macro';

const FooterStyles = tw.div`flex flex-row items-center justify-start h-full bg-widget rounded-b-md`;

const Footer = () => {

    const { buildData } = useContext(BuildContext);
    const { data } = buildData;

    return (
        <FooterStyles>
            {JSON.stringify(data)}
        </FooterStyles>
    );
};

export default Footer;