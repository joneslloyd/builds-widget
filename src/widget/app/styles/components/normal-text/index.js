import { useMemo } from 'preact/hooks';
import { useStyled } from '../../../lib/context/goober';
import tw from 'twin.macro';
import StandardText from '../../utils/standard-text';
import LoadingText from '../../utils/loading-text';
import { parseStyles } from '../../../lib/helpers';

const NormalText = ({ children, ...rest }) => {

    const styled = useStyled();

    const NormalTextC = useMemo(() => {
        return styled('span')(({ loading }) => {
            return parseStyles([
                StandardText,
                loading ? LoadingText : tw``,
            ]);
        })
    }, [styled]);

    return (
        <NormalTextC {...rest}>{children}</NormalTextC>
    );
};

export default NormalText;