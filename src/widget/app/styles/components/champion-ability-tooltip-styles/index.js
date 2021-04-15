import { styled } from 'twin.macro';

import { ChampionAbilityKeySymbol } from '../champion-ability-key-symbol';
import { LolRichText } from '../../../components/tooltips/base-tooltip-rich-text';

export const Wrapper = styled('div')(() => [
    {
        'width': '28rem',
        'background-color': '#19133d',
        'border': '1px solid #221843',
        'border-radius': '5px',
    },
]);

export const VideoStyled = styled('video')(() => [
    {
        'max-width': '100%',
        'min-height': '19.2rem',
        'border-radius': '5px 5px 0 0',
    },
]);

export const Content = styled('div')(() => [
    {
        'position': 'relative',
        'margin-top': '-6rem',
        'padding': '0.8rem 1.2rem',
        'background-image': 'linear-gradient(to bottom, rgba(25, 19, 61, 0), #19133d 6rem, #19133d 100%)',
        '> * + *': {
            'margin-top': '0.4rem',
        },
    },
]);

export const Title = styled('div')(() => [
    {
        'font-size': '1.2rem',
        'font-weight': '500',
        'line-height': '1.6rem',
        'display': 'flex',
        'align-items': 'center',
        'color': '#ffffff',
    },
]);

export const ChampionAbilityKeySymbolStyled = styled(ChampionAbilityKeySymbol)(() => [
    {
        'background': 'none',
        'margin-left': '0.4rem',
    },
]);

export const Description = styled(LolRichText)(() => [
    {
        'color': '#aaabca',
        'line-height': '1.5',
        'font-size': '1.2rem',
    },
]);

export const AbilityMetric = styled('p')(() => [
    {
        'font-size': '1.2rem',
        'font-weight': '400',
        'line-height': '2rem',
        'color': '#8890b5',
    },
]);

export const AbilityMetricValue = styled('span')(() => [
    {
        'font-size': '1.2rem',
        'font-weight': '400',
        'line-height': '2rem',
        'font-weight': '500',
        'color': '#ffffff',
    },
]);
