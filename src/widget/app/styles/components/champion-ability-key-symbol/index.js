import { useMemo } from 'preact/hooks';
import { useStyled } from '../../../lib/context/goober';
import { parseStyles } from '../../../lib/helpers';

export const ChampionAbilityKeySymbol = ({ children, ...rest }) => {

    const styled = useStyled();

    const ChampionAbilityKeySymbolC = useMemo(() => {
        return styled('div')(() => {
            return parseStyles([
                {
                    'font-size': '0.75rem',
                    'font-weight': '500',
                    'line-height': '1.25rem',
                    'width': '1.25rem',
                    'height': '1.25rem',
                    'border-radius': '0.3rem',
                    'background-color': 'rgba(76, 66, 120, 0.4)',
                    'cursor': 'default',
                    'text-transform': 'uppercase',
                    'text-align': 'center',
                    'color': '#ffc306',
                },
            ]);
        })
    }, [styled]);

    return (
        <ChampionAbilityKeySymbolC {...rest}>
            {children}
        </ChampionAbilityKeySymbolC>
    );
};