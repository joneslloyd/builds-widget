import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';

const BrandName = () => {

    const styled = useStyled();

    const BrandNameStyles = styled('a')(() => [
        tw`normal-case no-underline! text-white`,
    ]);

    return (
        <BrandNameStyles href="https://mobalytics.gg" target="_blank" title="Mobalytics" dangerouslySetInnerHTML={{ __html: '<strong>MOB</strong>ALYTICS.gg' }} />
    );
};

export default BrandName;