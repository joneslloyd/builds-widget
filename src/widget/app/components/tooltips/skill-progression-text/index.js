import { useMemo } from 'preact/hooks';
import { useStyled } from '../../../lib/context/goober';
import { parseStyles } from '../../../lib/helpers';
const reactStringReplace = require('react-string-replace');
const re = /\s*([0-9]+\.?[0-9]*)\s*/gi;

export const Wrapper = ({ children, ...rest }) => {

    const styled = useStyled();

    const WrapperC = useMemo(() => {
        return styled('span')(() => {
            return parseStyles([
                {
                    'font-size': '0.75rem',
                    'font-weight': '400',
                    'line-height': '1.25rem',
                    'color': '#8890b5',
                },
            ]);
        })
    }, [styled]);

    return (
        <WrapperC {...rest}>{children}</WrapperC>
    );
};

export const Value = ({ children, ...rest }) => {

    const styled = useStyled();

    const ValueC = useMemo(() => {
        return styled('span')(() => {
            return parseStyles([
                {
                    'font-weight': '500',
                    'color': '#ffffff',
                },
            ]);
        })
    }, [styled]);

    return (
        <ValueC {...rest}>{children}</ValueC>
    );
};


export const SkillProgressionText = ({ text, className }) => {

    return (
        <Wrapper className={className}>
            {reactStringReplace(text, re, (match, index) => {
                return <Value key={index}>&nbsp;{match.trim()}&nbsp;</Value>;
            })}
        </Wrapper>
    );
};