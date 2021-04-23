import tw from 'twin.macro';
import { useStyled } from '../../../lib/context/goober';
import SmallText from '../../utils/small-text';
import LoadingText from '../../utils/loading-text';

const SmallWhiteText = ({ children, ...rest }) => {

    const styled = useStyled();

    const SmallWhiteTextC = styled('span')(({ loading }) => [
        SmallText,
        tw`text-white`,
        (loading) && LoadingText,
    ]);

    return (
        <SmallWhiteTextC {...rest}>{children}</SmallWhiteTextC>
    );
};

export default SmallWhiteText;