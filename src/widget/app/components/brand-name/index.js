import { useMemo } from 'preact/hooks';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import { parseStyles } from '../../lib/helpers';

const BrandName = () => {

    const styled = useStyled();

    const BrandNameStyles = useMemo(() => {
        return styled('a')(() => {
            return parseStyles([
                tw`normal-case no-underline! text-white`,
            ]);
        });
    }, [styled]);

    return (
        <BrandNameStyles href="https://mobalytics.gg" target="_blank" title="Mobalytics" dangerouslySetInnerHTML={{ __html: '<strong>MOB</strong>ALYTICS.gg' }} />
    );
};

export default BrandName;