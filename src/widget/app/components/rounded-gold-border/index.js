import tw from 'twin.macro';
import { useMemo } from 'preact/hooks';
import { useStyled } from '../../lib/context/goober';
import { parseStyles } from '../../lib/helpers';

const RoundedGoldBorder = ({ children, borderWidth = '2px', ...rest }) => {

    const styled = useStyled();

    const RoundedGoldBorderStyles = useMemo(() => {
        return styled('div')(({ borderWidth }) => {
            return parseStyles([
                tw`border-solid border-2 border-widget-gold rounded-full`,
                { 'border-width': borderWidth }
            ]);
        })
    }, [styled]);

    return (
        <RoundedGoldBorderStyles borderWidth={borderWidth} {...rest}>
            {children}
        </RoundedGoldBorderStyles>
    );
};

export default RoundedGoldBorder;