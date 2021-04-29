import { useMemo } from 'preact/hooks';
import tw from 'twin.macro';
import { useStyled } from '../../../lib/context/goober';
import { parseStyles } from '../../../lib/helpers';

const FlexCol = ({ children, ...rest }) => {

    const styled = useStyled();

    const FlexColC = useMemo(() => {
        return styled('div')(() => {
            return parseStyles([
                tw`flex flex-col items-start justify-between`,
            ]);
        })
    }, [styled]);

    return (
        <FlexColC {...rest}>{children}</FlexColC>
    );
};

export default FlexCol;