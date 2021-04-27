import tw from 'twin.macro';
import { useStyled } from '../../../lib/context/goober';
import { parseStyles } from '../../../lib/helpers';

export const BaseTooltipWrapper = ({ children, ...rest }) => {

    const styled = useStyled();

    const BaseTooltipWrapperC = styled('div')(() => {
        return parseStyles([
            tw`p-2.5 bg-widget-purple border border-widget-purple-border shadow leading-8`
        ]);
    });

    return (
        <BaseTooltipWrapperC {...rest}>
            {children}
        </BaseTooltipWrapperC>
    );
};