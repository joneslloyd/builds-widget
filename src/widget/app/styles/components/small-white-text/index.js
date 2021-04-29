import { useMemo } from 'preact/hooks';
import tw from 'twin.macro';
import { useStyled } from '../../../lib/context/goober';
import SmallText from '../../utils/small-text';
import LoadingText from '../../utils/loading-text';
import { parseStyles } from '../../../lib/helpers';

const SmallWhiteText = ({ children, ...rest }) => {

    const styled = useStyled();

    const SmallWhiteTextC = useMemo(() => {
        return styled('span')(({ loading }) => {
            return parseStyles([
                SmallText,
                tw`text-white`,
                loading ? LoadingText : tw``,
            ]);
        })
    }, [styled]);

    return (
        <SmallWhiteTextC {...rest}>{children}</SmallWhiteTextC>
    );
};

export default SmallWhiteText;