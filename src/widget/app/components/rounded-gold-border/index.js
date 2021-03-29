import tw, { styled } from 'twin.macro';

const RoundedGoldBorder = ({ children, borderWidth = '2px', ...rest }) => {

    const RoundedGoldBorderStyles = styled('div')(({ borderWidth }) => [
        tw`border-solid border-2 border-widget-gold rounded-full`,
        { 'border-width': borderWidth }
    ]);

    return (
        <RoundedGoldBorderStyles borderWidth={borderWidth} {...rest}>
            {children}
        </RoundedGoldBorderStyles>
    );
};

export default RoundedGoldBorder;