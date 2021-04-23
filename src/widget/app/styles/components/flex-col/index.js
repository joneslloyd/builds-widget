import tw from 'twin.macro';
import { useStyled } from '../../../lib/context/goober';

const FlexCol = ({ children, ...rest }) => {

    const styled = useStyled();

    const FlexColC = styled('div')(() => [
        tw`flex flex-col items-start justify-between`,
    ]);

    return (
        <FlexColC {...rest}>{children}</FlexColC>
    );
};

export default FlexCol;