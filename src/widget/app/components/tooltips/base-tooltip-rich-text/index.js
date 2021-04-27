import { memo } from 'preact/compat';
import { RichText } from '../rich-text';
import { parseStyles, processCustomHtmlTags } from '../../../lib/helpers';
import tw from 'twin.macro';
import { useStyled } from '../../../lib/context/goober';

export const LolRichText = props => {
    return <RichText {...props} />;
};

export const GameItemTooltipRichText = memo(props => {
    const { markdownText, ...rest } = props;
    const processedMarkdown = markdownText ? processCustomHtmlTags(markdownText) : undefined;
    return <StyledLolRichText markdownText={processedMarkdown} {...rest} />;
});

export const StyledLolRichText = ({ children, ...rest }) => {

    const styled = useStyled();

    const StyledLolRichTextC = styled(LolRichText)(() => {
        return parseStyles([
            tw`relative text-sm leading-5`,
            {
                'color': '#b3b4d0',
                '.custom': {
                    'display': 'inline'
                },
                '.stats': {
                    'display': 'block',
                    'color': '#6b6889',
                },
                '.attention': {
                    'font-weight': '500',
                    'color': '#ffffff',
                },
                'i, .unique, .active, .aura, .passive, .rarityMythic': {
                    'font-weight': '700',
                    'color': '#ffffff'
                },
                '.rarityMythic': {
                    'color': '#fec205'
                },
                '.magicDamage': {
                    'color': '#84d0fe'
                },
                'li': {
                    'list-style-type': 'none',
                },
                'li + li': {
                    'margin-top': '0.8rem'
                },
            },
        ]);
    });

    return (
        <StyledLolRichTextC {...rest}>{children}</StyledLolRichTextC>
    );
};