import tw from 'twin.macro';

const RoundedGoldBorderStyles = tw.div`border-solid border-4 border-widget-gold`;

const RoundedGoldBorder = ({ children }) => {

    return (
        <RoundedGoldBorderStyles>
            {children}
        </RoundedGoldBorderStyles>
    );
};

export default RoundedGoldBorder;