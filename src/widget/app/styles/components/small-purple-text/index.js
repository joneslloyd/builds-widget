import { useMemo } from 'preact/hooks';
import tw from 'twin.macro';
import { useStyled } from '../../../lib/context/goober';
import SmallText from '../../utils/small-text';
import LoadingText from '../../utils/loading-text';
import { parseStyles } from '../../../lib/helpers';

const SmallPurpleText = ({ children, ...rest }) => {

    const styled = useStyled();

    const SmallPurpleTextC = useMemo(() => {
        return styled('span')(({ loading }) => {
            return parseStyles([
                SmallText,
                tw`text-widget-purple-text`,
                loading === true ? LoadingText : tw``,
            ]);
        })
    }, [styled]);

    return (
        <SmallPurpleTextC {...rest}>{children}</SmallPurpleTextC>
    );
};

export default SmallPurpleText;