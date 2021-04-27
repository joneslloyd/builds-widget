import { useStyled } from '../../../lib/context/goober';
import { parseStyles } from '../../../lib/helpers';

export const TooltipWrapper = ({ children, ...rest }) => {

    const styled = useStyled();

    const TooltipWrapperC = styled('div')(() => {
        return parseStyles([
            tw`relative block font-medium leading-relaxed text-white before:(block absolute)`,
            {
                'font-size': '1.2rem',
                'margin-top': '0.4rem',
                'box-shadow': '0 6px 20px 4px rgba(26, 18, 62, 0.8)',
                'border': 'solid 1px #352e53',
                'background-color': '#1a123e',
                'padding': '0.8rem 1.2rem',
                'border-radius': '3px',
                'transition': 'all ease 0.15s',
                'before': {
                    'content': '""',
                    'width': '8px',
                    'height': '8px',
                    'background-color': '#1a123e',
                    'border': 'solid 1px #352e53',
                    'border-right-color': 'transparent',
                    'border-bottom-color': 'transparent',
                    'top': '0',
                    'left': '50%',
                    'transform': 'translate(-50%, -50%) rotate(45deg)',
                },
            },
        ]);
    });

    return (
        <TooltipWrapperC {...rest}>
            {children}
        </TooltipWrapperC>
    );
};