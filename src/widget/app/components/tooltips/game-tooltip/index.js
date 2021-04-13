import tw, { styled } from 'twin.macro';

import { GameItemTooltipRichText } from '../base-tooltip-rich-text';
import { BaseTooltipWrapper } from '../../../styles/components/base-tooltip-wrapper';

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

const ItemWrapper = styled(BaseTooltipWrapper)(() => [
  tw`flex flex-col`,
  {
    'width': '40rem',
    'max-width': 'calc(100vw - 2rem)'
  }
]);

const ItemHeader = styled('div')(() => [
  tw`flex items-center mb-4`
]);

const ItemHeaderIcon = styled('img')(() => [
  tw`mr-4 w-20 h-20`
]);

const ItemTitle = styled('div')(() => [
  tw`font-normal text-widget-gold mb-2`,
  {
    'font-size': '1.8rem',
    'margin-left': '0.8rem',
    'margin-right': '0.8rem'
  }
]);

export const GameTooltipEmpty = tw(ItemWrapper)`h-4 opacity-0`;
