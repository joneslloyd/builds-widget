import { Placement } from 'tippy.js';
import { Rect } from '@popperjs/core/lib/types';

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