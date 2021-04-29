import { memo } from 'preact/compat';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import { parseStyles } from '../../lib/helpers';

const RoundedGoldBorder = ({ children, borderWidth = '2px', loading = true, ...rest }) => {

    const styled = useStyled();

    const RoundedGoldBorderStyles = styled('div')(({ borderWidth, loading }) => {
        return parseStyles([
            false === loading ? tw`border-solid border-2 border-widget-gold rounded-full` : tw``,
            { 'border-width': borderWidth }
        ]);
    });

    return (
        <RoundedGoldBorderStyles borderWidth={borderWidth} loading={loading} {...rest}>
            {children}
        </RoundedGoldBorderStyles>
    );
};

export default memo(RoundedGoldBorder);