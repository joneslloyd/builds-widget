import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import { parseStyles } from '../../lib/helpers';

const RoundedGoldBorder = ({ children, borderWidth = '2px', ...rest }) => {

    const styled = useStyled();

    const RoundedGoldBorderStyles = styled('div')(({ borderWidth }) => {
        return parseStyles([
            tw`border-solid border-2 border-widget-gold rounded-full`,
            { 'border-width': borderWidth }
        ]);
    });

    return (
        <RoundedGoldBorderStyles borderWidth={borderWidth} {...rest}>
            {children}
        </RoundedGoldBorderStyles>
    );
};

export default RoundedGoldBorder;