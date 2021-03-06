import { useStyled } from '../../../lib/context/goober';
import tw from 'twin.macro';
import SpellsDisplayU from '../../utils/spells-display';
import LoadingText from '../../utils/loading-text';
import { parseStyles } from '../../../lib/helpers';

const SpellsDisplay = ({ children, ...rest }) => {

    const styled = useStyled();

    const SpellsDisplayC = styled('div')(({ loading }) => {
        return parseStyles([
            SpellsDisplayU,
            loading ? LoadingText : tw``,
        ]);
    });

    return (
        <SpellsDisplayC {...rest}>{children}</SpellsDisplayC>
    );
};

export default SpellsDisplay;