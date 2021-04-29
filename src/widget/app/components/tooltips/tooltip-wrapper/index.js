import { memo } from 'preact/compat';
import { useCallback, useMemo } from 'preact/hooks';
/* eslint import/no-webpack-loader-syntax: off */
import * as tippyCss from '!!raw-loader?esModule=false!tippy.js/dist/tippy.css';
import * as reactPopperTooltipCss from '!!raw-loader?esModule=false!react-popper-tooltip/dist/styles.css';

import { LazyTippy } from '../lazy-tippy';
import { isVerticalPlacement } from '../../../lib/tooltips/helpers';
import { isDef } from '../../../lib/helpers';

import { useTooltips } from '../../../lib/context/tooltips';

const defaultOffset = [0, 10];

export const TooltipWrapper = props => {

    const { tooltipParent } = useTooltips();

    const doAppendToFunc = () => tooltipParent;
    const appendToFunc = useCallback(() => {
        return doAppendToFunc();
    }, [tooltipParent]);

    const {
        appendTo = appendToFunc,
        children,
        placement = 'top',
        tooltip,
        tooltipFn,
        trigger = 'mouseenter focus',
        isDisabled,
        interactive = false,
        offset,
        hideOnClick = true,
        visible,
        onTooltipShow,
        onTooltipHide,
        onClickOutside,
        className,
        scale = null,
    } = props;

    // choose legacy tooltip of tooltipFn, we will get rid of this function when all tooltip moved to tooltipFn
    const renderer = useCallback(
        (tooltipRenderingProps) => {
            const content = tooltipFn ? tooltipFn(tooltipRenderingProps) : tooltip;
            return content ? (
                <div {...tooltipRenderingProps} className={className}>
                    <style>{tippyCss}{reactPopperTooltipCss}</style>
                    {content}
                </div>
            ) : null;
        },
        [tooltip, tooltipFn, className]
    );

    // adds scale transformation to the popper style object
    const popperOptionsModifyCb = useCallback(
        ({ state }) => {
            isDef(scale) && (state.styles.popper.transform = `${state.styles.popper.transform} scale(${scale})`);
            return state;
        },
        [scale]
    );

    // default popper options base on scale fn
    const popperOptions = useMemo(
        () => ({
            strategy: 'fixed',
            modifiers: [
                {
                    name: 'scale',
                    enabled: true,
                    phase: 'beforeWrite',
                    fn: popperOptionsModifyCb,
                },
            ],
        }),
        [popperOptionsModifyCb]
    );

    // offset calculating function for case when scale is defined
    const offsetFn = useCallback(
        ({ placement, popper }) => {
            const { width, height } = popper;
            const offsetSrc = offset || defaultOffset;

            if (isDef(scale)) {
                const skidding = offsetSrc[0];
                const distance = offsetSrc[1];

                const isVertical = isVerticalPlacement(placement);
                const size = isVertical ? height : width;

                return [skidding, (-size / 2) * (1 - scale) + distance * scale];
            }
            return offsetSrc;
        },
        [scale, offset]
    );

    // tippy has a bug which crash the app if onShow or onHide is explicitly passed with undefined
    const onShow = useCallback(() => onTooltipShow && onTooltipShow(), [onTooltipShow]);
    const onHide = useCallback(() => onTooltipHide && onTooltipHide(), [onTooltipHide]);

    return (
        <LazyTippy
            appendTo={appendTo}
            render={renderer}
            placement={placement}
            popperOptions={popperOptions}
            trigger={trigger}
            disabled={isDisabled}
            interactive={interactive}
            offset={offsetFn}
            hideOnClick={hideOnClick}
            onClickOutside={onClickOutside}
            visible={visible}
            onShow={onShow}
            onHide={onHide}
        >
            {children}
        </LazyTippy>
    );
};

export default memo(TooltipWrapper);