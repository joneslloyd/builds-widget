import TooltipWrapper from '../../../components/tooltips/tooltip-wrapper';
import { styled } from 'twin.macro';

export const TransparentTooltip = styled(TooltipWrapper)(() => [
    {
        'background-color': 'transparent',
        'border': 'solid 1px transparent',
    },
]);