import tw, { styled } from 'twin.macro';

import { ChampionAbilityKeySymbol } from '../champion-ability-key-symbol';
import { LolRichText } from '../../../components/tooltips/base-tooltip-rich-text';

export const Wrapper = styled('div')(() => [
    tw`rounded-md`,
    {
        'width': '17.5rem',
        'background-color': '#19133d',
        'border': '1px solid #221843',
    },
]);

export const VideoStyled = styled('video')(() => [
    tw`max-w-full rounded-t-md`,
    {
        'min-height': '12rem',
    },
]);

export const Content = styled('div')(() => [
    tw`relative py-2 px-3 `,
    {
        'margin-top': '-3.75rem',
        'background-image': 'linear-gradient(to bottom, rgba(25, 19, 61, 0), #19133d 6rem, #19133d 100%)',
        '> * + *': {
            'margin-top': '0.25rem',
        },
    },
]);

export const Title = styled('div')(() => [
    tw`flex items-center text-xs text-white font-medium`,
]);

export const ChampionAbilityKeySymbolStyled = styled(ChampionAbilityKeySymbol)(() => [
    tw`bg-none`,
    {
        'margin-left': '0.4rem',
    },
]);

export const Description = styled(LolRichText)(() => [
    tw`leading-6 text-xs`,
    {
        'color': '#aaabca',
        'line-height': '1.15rem',
    },
]);

export const AbilityMetric = styled('p')(() => [
    tw`text-xs font-normal leading-5`,
    {
        'color': '#8890b5',
    },
]);

export const AbilityMetricValue = styled('span')(() => [
    tw`text-xs font-normal leading-5 font-medium text-white`,
]);
