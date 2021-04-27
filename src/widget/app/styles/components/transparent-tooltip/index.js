import TooltipWrapper from '../../../components/tooltips/tooltip-wrapper';
import { useStyled } from '../../../lib/context/goober';
import { parseStyles } from '../../../lib/helpers';

export const TransparentTooltip = ({ children, ...rest }) => {

    const styled = useStyled();

    const TransparentTooltipC = styled(TooltipWrapper)(() => {
        return parseStyles([
            {
                'background-color': 'transparent',
                'border': 'solid 1px transparent',
            },
        ]);
    });

    return (
        <TransparentTooltipC {...rest}>
            {children}
        </TransparentTooltipC>
    );
};