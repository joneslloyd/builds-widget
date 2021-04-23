import tw from 'twin.macro';
import { useStyled } from '../../../lib/context/goober';
import SmallText from '../../utils/small-text';
import LoadingText from '../../utils/loading-text';

const SmallPurpleText = ({ children, ...rest }) => {

    const styled = useStyled();

    const SmallPurpleTextC = styled('span')(({ loading }) => [
        SmallText,
        tw`text-widget-purple-text`,
        (loading) && LoadingText,
    ]);

    return (
        <SmallPurpleTextC {...rest}>{children}</SmallPurpleTextC>
    );
};

export default SmallPurpleText;