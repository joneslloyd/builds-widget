import tw from 'twin.macro';
import { useStyled } from '../../../lib/context/goober';

import { ChampionAbilityKeySymbol } from '../champion-ability-key-symbol';
import { LolRichText } from '../../../components/tooltips/base-tooltip-rich-text';
import { parseStyles } from '../../../lib/helpers';

export const Wrapper = ({ children, ...rest }) => {

    const styled = useStyled();

    const WrapperC = styled('div')(() => {
        return parseStyles([
            tw`rounded-md`,
            {
                'width': '17.5rem',
                'background-color': '#19133d',
                'border': '0.0625rem solid #221843',
            },
        ]);
    });

    return (
        <WrapperC {...rest}>
            {children}
        </WrapperC>
    );
};

export const VideoStyled = ({ children, ...rest }) => {

    const styled = useStyled();

    const VideoStyledC = styled('video')(() => {
        return parseStyles([
            tw`max-w-full rounded-t-md`,
            {
                'min-height': '12rem',
            },
        ]);
    });

    return (
        <VideoStyledC {...rest}>
            {children}
        </VideoStyledC>
    );
};

export const Content = ({ children, ...rest }) => {

    const styled = useStyled();

    const ContentC = styled('div')(() => {
        return parseStyles([
            tw`relative py-2 px-3 `,
            {
                'margin-top': '-3.75rem',
                'background-image': 'linear-gradient(to bottom, rgba(25, 19, 61, 0), #19133d 3.75rem, #19133d 100%)',
                '> * + *': {
                    'margin-top': '0.25rem',
                },
            },
        ]);
    });

    return (
        <ContentC {...rest}>
            {children}
        </ContentC>
    );
};

export const Title = ({ children, ...rest }) => {

    const styled = useStyled();

    const TitleC = styled('div')(() => {
        return parseStyles([
            tw`flex items-center text-xs text-white font-medium`,
        ]);
    });

    return (
        <TitleC {...rest}>
            {children}
        </TitleC>
    );
};

export const ChampionAbilityKeySymbolStyled = ({ children, ...rest }) => {

    const styled = useStyled();

    const ChampionAbilityKeySymbolStyledC = styled(ChampionAbilityKeySymbol)(() => {
        return parseStyles([
            tw`bg-none`,
            {
                'margin-left': '0.4rem',
            },
        ]);
    });

    return (
        <ChampionAbilityKeySymbolStyledC {...rest}>
            {children}
        </ChampionAbilityKeySymbolStyledC>
    );
};

export const Description = (props) => {

    const styled = useStyled();

    const DescriptionC = styled(LolRichText)(() => {
        return parseStyles([
            tw`leading-6 text-xs`,
            {
                'color': '#aaabca',
                'line-height': '1.15rem',
                'p': {
                    'padding': '0',
                    'margin': '0',
                },
            },
        ]);
    });

    return (
        <DescriptionC {...props} />
    );
};

export const AbilityMetric = ({ children, ...rest }) => {

    const styled = useStyled();

    const AbilityMetricC = styled('p')(() => {
        return parseStyles([
            tw`text-xs font-normal leading-5 m-0 p-0`,
            {
                'color': '#8890b5',
                'margin-top': '0.25rem',
                'letter-spacing': '0.00625rem'
            },
        ]);
    });

    return (
        <AbilityMetricC {...rest}>
            {children}
        </AbilityMetricC>
    );
};

export const AbilityMetricValue = ({ children, ...rest }) => {

    const styled = useStyled();

    const AbilityMetricValueC = styled('span')(() => {
        return parseStyles([
            tw`text-xs font-normal leading-5 font-medium text-white`,
        ]);
    });

    return (
        <AbilityMetricValueC {...rest}>
            {children}
        </AbilityMetricValueC>
    );
};