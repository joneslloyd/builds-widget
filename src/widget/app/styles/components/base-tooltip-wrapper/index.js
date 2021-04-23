import tw from 'twin.macro';
import { useStyled } from '../../../lib/context/goober';

export const BaseTooltipWrapper = ({ children, ...rest }) => {

    const styled = useStyled();

    const BaseTooltipWrapperC = styled('div')(() => [
        tw`p-2.5 bg-widget-purple border border-widget-purple-border shadow leading-8`
    ]);

    return (
        <BaseTooltipWrapperC {...rest}>
            {children}
        </BaseTooltipWrapperC>
    );
};