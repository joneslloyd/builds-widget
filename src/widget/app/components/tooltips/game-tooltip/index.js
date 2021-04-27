import tw from 'twin.macro';
import { useStyled } from '../../../lib/context/goober';

import { GameItemTooltipRichText } from '../base-tooltip-rich-text';
import { BaseTooltipWrapper } from '../../../styles/components/base-tooltip-wrapper';
import { parseStyles } from '../../../lib/helpers';

export const GameTooltip = props => {

  const { iconUrl, name, description, className } = props;

  return (
    <ItemWrapper className={className}>
      <ItemHeader>
        {name && iconUrl ? <ItemHeaderIcon src={iconUrl} alt={name} /> : null}
        {name && <ItemTitle>{name}</ItemTitle>}
      </ItemHeader>
      {description && <GameItemTooltipRichText markdownText={description} />}
    </ItemWrapper>
  );
};

const ItemWrapper = ({ children, ...rest }) => {

  const styled = useStyled();

  const ItemWrapperC = styled(BaseTooltipWrapper)(() => {
    return parseStyles([
      tw`flex flex-col w-100 normal-case!`,
      {
        'max-width': 'calc(100vw - 2rem)'
      }
    ]);
  });

  return (
    <ItemWrapperC {...rest}>{children}</ItemWrapperC>
  );
};

const ItemHeader = ({ children, ...rest }) => {

  const styled = useStyled();

  const ItemHeaderC = styled('div')(() => {
    return parseStyles([
      tw`flex items-center mb-2.5`
    ]);
  });

  return (
    <ItemHeaderC {...rest}>{children}</ItemHeaderC>
  );
};

const ItemHeaderIcon = ({ children, ...rest }) => {

  const styled = useStyled();

  const ItemHeaderIconC = styled('img')(() => {
    return parseStyles([
      tw`mr-2.5 w-10 h-10`
    ]);
  });

  return (
    <ItemHeaderIconC {...rest}>{children}</ItemHeaderIconC>
  );
};

const ItemTitle = ({ children, ...rest }) => {

  const styled = useStyled();

  const ItemTitleC = styled('div')(() => {
    return parseStyles([
      tw`font-normal text-lg text-widget-gold mb-1.5 mx-2`,
    ]);
  });

  return (
    <ItemTitleC {...rest}>{children}</ItemTitleC>
  );
};

export const GameTooltipEmpty = ({ children, ...rest }) => {

  const styled = useStyled();

  const GameTooltipEmptyC = styled(ItemWrapper)(() => {
    return parseStyles([
      tw`h-4 opacity-0`,
    ]);
  });

  return (
    <GameTooltipEmptyC {...rest}>{children}</GameTooltipEmptyC>
  );
};
