import { styled } from 'twin.macro';
const reactStringReplace = require('react-string-replace');
const re = /\s*([0-9]+\.?[0-9]*)\s*/gi;

export const Wrapper = styled('span')(() => [
    {
        'font-size': '0.75rem',
        'font-weight': '400',
        'line-height': '1.25rem',
        'color': '#8890b5',
    },
]);

export const Value = styled('span')(() => [
    {
        'font-weight': '500',
        'color': '#ffffff',
    },
]);


export const SkillProgressionText = ({ text, className }) => {

    return (
        <Wrapper className={className}>
            {reactStringReplace(text, re, (match, index) => {
                return <Value key={index}>&nbsp;{match.trim()}&nbsp;</Value>;
            })}
        </Wrapper>
    );
};