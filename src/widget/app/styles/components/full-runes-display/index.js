import { memo } from 'preact/compat';
import { useStyled } from '../../../lib/context/goober';
import tw from 'twin.macro';
import { parseStyles } from '../../../lib/helpers';
import FullRunesDisplayU from '../../utils/full-runes-display';
import LoadingText from '../../utils/loading-text';

const FullRunesDisplay = ({ children, ...rest }) => {

    const styled = useStyled();

    const FullRunesDisplayC = styled('div')(({ loading }) => {
        return parseStyles([
            FullRunesDisplayU,
            loading ? LoadingText : tw``,
        ]);
    });

    return (
        <FullRunesDisplayC {...rest}>{children}</FullRunesDisplayC>
    );
};

export default memo(FullRunesDisplay);