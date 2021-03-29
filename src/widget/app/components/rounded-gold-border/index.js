import tw from 'twin.macro';

const RoundedGoldBorderStyles = tw.div`border-solid border-2 border-widget-gold rounded-full`;

const RoundedGoldBorder = ({ children, ...rest }) => {

    return (
        <RoundedGoldBorderStyles {...rest}>
            {children}
        </RoundedGoldBorderStyles>
    );
};

export default RoundedGoldBorder;