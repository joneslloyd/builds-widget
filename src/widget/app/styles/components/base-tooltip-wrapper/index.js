import { useMemo } from 'preact/hooks';
import tw from 'twin.macro';
import { useStyled } from '../../../lib/context/goober';
import { parseStyles } from '../../../lib/helpers';

export const BaseTooltipWrapper = ({ children, ...rest }) => {

    const styled = useStyled();

    const BaseTooltipWrapperC = useMemo(() => {
        return styled('div')(() => {
            return parseStyles([
                tw`p-2.5 bg-widget-purple border border-widget-purple-border shadow leading-8`
            ]);
        })
    }, [styled]);

    return (
        <BaseTooltipWrapperC {...rest}>
            {children}
        </BaseTooltipWrapperC>
    );
};