import TooltipWrapper from '../../../components/tooltips/tooltip-wrapper';
import { useStyled } from '../../../lib/context/goober';

export const TransparentTooltip = ({ children, ...rest }) => {

    const styled = useStyled();

    const TransparentTooltipC = styled(TooltipWrapper)(() => [
        {
            'background-color': 'transparent',
            'border': 'solid 1px transparent',
        },
    ]);

    return (
        <TransparentTooltipC {...rest}>
            {children}
        </TransparentTooltipC>
    );
};