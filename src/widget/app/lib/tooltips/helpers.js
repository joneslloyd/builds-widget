import { SkillKey, SkillKeyColor, SkillKeyLetter, validateStrEnumValue } from '../helpers';
import { colors } from '../legacy/colors';

const verticalPlacements = [
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'auto',
    'auto-start',
    'auto-end',
];

export const isVerticalPlacement = (placement) => {
    return verticalPlacements.includes(placement);
};

export const isConnectedChampionCommonAbility = (value) => {
    return !!(value && value.name && value.slug && value.activationKey);
}

export const getChampionAbilityLabelAndColor = (keyOrLabel) => {
    const key = validateStrEnumValue(SkillKey, keyOrLabel);

    return key
        ? [SkillKeyColor[key], SkillKeyLetter[key]]
        : [keyOrLabel ? colors.skillLetterColor[keyOrLabel] || colors.text.purple : colors.text.purple, keyOrLabel];
}
