import { useMemo } from 'preact/hooks';
import tw from 'twin.macro';
import { useStyled } from '../../../lib/context/goober';
import { parseStyles } from '../../../lib/helpers';

const FlexRow = ({ children, ...rest }) => {

    const styled = useStyled();

    const FlexRowC = useMemo(() => {
        return styled('div')(() => {
            return parseStyles([
                tw`flex flex-row items-center justify-start h-full`,
            ]);
        })
    }, [styled]);

    return (
        <FlexRowC {...rest}>{children}</FlexRowC>
    );
};

export default FlexRow;