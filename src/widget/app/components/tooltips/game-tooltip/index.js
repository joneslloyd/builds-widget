import tw from 'twin.macro';
import { useMemo } from 'preact/hooks';
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

  const ItemWrapperC = useMemo(() => {
    return styled(BaseTooltipWrapper)(() => {
      return parseStyles([
        tw`flex flex-col w-100 normal-case!`,
        {
          'max-width': 'calc(100vw - 2rem)'
        }
      ]);
    })
  }, [styled]);

  return (
    <ItemWrapperC {...rest}>{children}</ItemWrapperC>
  );
};

const ItemHeader = ({ children, ...rest }) => {

  const styled = useStyled();

  const ItemHeaderC = useMemo(() => {
    return styled('div')(() => {
      return parseStyles([
        tw`flex items-center mb-2.5`
      ]);
    })
  }, [styled]);

  return (
    <ItemHeaderC {...rest}>{children}</ItemHeaderC>
  );
};

const ItemHeaderIcon = ({ children, ...rest }) => {

  const styled = useStyled();

  const ItemHeaderIconC = useMemo(() => {
    return styled('img')(() => {
      return parseStyles([
        tw`mr-2.5 w-10 h-10`
      ]);
    })
  }, [styled]);

  return (
    <ItemHeaderIconC {...rest}>{children}</ItemHeaderIconC>
  );
};

const ItemTitle = ({ children, ...rest }) => {

  const styled = useStyled();

  const ItemTitleC = useMemo(() => {
    return styled('div')(() => {
      return parseStyles([
        tw`font-normal text-lg text-widget-gold mb-1.5 mx-2`,
      ]);
    })
  }, [styled]);

  return (
    <ItemTitleC {...rest}>{children}</ItemTitleC>
  );
};

export const GameTooltipEmpty = ({ children, ...rest }) => {

  const styled = useStyled();

  const GameTooltipEmptyC = useMemo(() => {
    return styled(ItemWrapper)(() => {
      return parseStyles([
        tw`h-4 opacity-0`,
      ]);
    })
  }, [styled]);

  return (
    <GameTooltipEmptyC {...rest}>{children}</GameTooltipEmptyC>
  );
};
