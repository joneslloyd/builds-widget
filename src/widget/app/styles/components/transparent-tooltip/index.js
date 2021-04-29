import { useMemo } from 'preact/hooks';
import tw from 'twin.macro';
import TooltipWrapper from '../../../components/tooltips/tooltip-wrapper';
import { useStyled } from '../../../lib/context/goober';
import { parseStyles } from '../../../lib/helpers';

export const TransparentTooltip = ({ children, ...rest }) => {

    const styled = useStyled();

    //Have to explicitly add 'font-sans' to the tooltip here because it's now rendered onto the shadow dom root node, which is outside of the existing declarations
    const TransparentTooltipC = useMemo(() => {
        return styled(TooltipWrapper)(() => {
            return parseStyles([
                tw`font-sans`,
                {
                    'background-color': 'transparent',
                    'border': 'solid 1px transparent',
                },
            ]);
        })
    }, [styled]);

    return (
        <TransparentTooltipC {...rest}>
            {children}
        </TransparentTooltipC>
    );
};