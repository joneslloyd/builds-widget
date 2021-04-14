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
  tw`flex flex-col w-100`,
  {
    'max-width': 'calc(100vw - 2rem)'
  }
]);

const ItemHeader = styled('div')(() => [
  tw`flex items-center mb-2.5`
]);

const ItemHeaderIcon = styled('img')(() => [
  tw`mr-2.5 w-10 h-10`
]);

const ItemTitle = styled('div')(() => [
  tw`font-normal text-lg text-widget-gold mb-1.5 mx-2`,
]);

export const GameTooltipEmpty = tw(ItemWrapper)`h-4 opacity-0`;
