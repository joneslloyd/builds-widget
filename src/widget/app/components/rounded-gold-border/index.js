import tw from 'twin.macro';

const RoundedGoldBorderStyles = tw.div`border-solid border-2 border-widget-gold rounded-full`;

const RoundedGoldBorder = ({ children }) => {

    return (
        <RoundedGoldBorderStyles>
            {children}
        </RoundedGoldBorderStyles>
    );
};

export default RoundedGoldBorder;