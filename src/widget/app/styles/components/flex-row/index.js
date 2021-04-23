import tw from 'twin.macro';
import { useStyled } from '../../../lib/context/goober';

const FlexRow = ({ children, ...rest }) => {

    const styled = useStyled();

    const FlexRowC = styled('div')(() => [
        tw`flex flex-row items-center justify-start h-full`,
    ]);

    return (
        <FlexRowC {...rest}>{children}</FlexRowC>
    );
};

export default FlexRow;