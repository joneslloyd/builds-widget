import { memo } from 'preact/compat';
import tw, { styled } from 'twin.macro';
import Markdown from 'preact-markdown';

export const RichText = memo(({ children, className, markdownText, ...rest }) => {
  return (
    <Wrapper className={className} {...rest}>
      {markdownText && <Markdown markdown={markdownText} type="html" />}
      {children}
    </Wrapper>
  );
});

const Wrapper = styled('div')(() => [
  tw`inline-block align-middle leading-8 font-normal`,
  {
    'font-size': '1.4rem',
    'color': '#8890b5',
    'letter-spacing': '0.25px',
    'strong': {
      'color': '#ccae70',
      'font-weight': '500'
    },
    'a': {
      'color': '#4496dd'
    },
    'b, i, u': {
      'color': '#ffffff'
    },
    'ul, ol': {
      'margin': '0.4rem 0',
      'padding-left': '2.8rem'
    },
  }
]);