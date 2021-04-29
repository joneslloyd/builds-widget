import { useMemo } from 'preact/hooks';
import { useStyled } from '../../../lib/context/goober';
import tw from 'twin.macro';
import { parseStyles } from '../../../lib/helpers';
import FullRunesDisplayU from '../../utils/full-runes-display';
import LoadingText from '../../utils/loading-text';

const FullRunesDisplay = ({ children, ...rest }) => {

    const styled = useStyled();

    const FullRunesDisplayC = useMemo(() => {
        return styled('div')(({ loading }) => {
            return parseStyles([
                FullRunesDisplayU,
                loading ? LoadingText : tw``,
            ]);
        })
    }, [styled]);

    return (
        <FullRunesDisplayC {...rest}>{children}</FullRunesDisplayC>
    );
};

export default FullRunesDisplay;