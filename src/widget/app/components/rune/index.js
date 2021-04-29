import { useMemo } from 'preact/hooks';
import RoundedGoldBorder from '../rounded-gold-border';
import Image from '../image';
import { parseStyles, perkImage } from '../../lib/helpers';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';

const Rune = ({ id, wh = 32, rounded = false, gold = false, leftSpace = false, borderWidth = false, greyed = false, cursor = 'default' }) => {

    const styled = useStyled();

    const RoundedGoldBorderStyles = useMemo(() => {
        return styled(RoundedGoldBorder)(() => {
            return parseStyles([
                tw``,
            ]);
        })
    }, [styled]);

    const NoWrapStyles = useMemo(() => {
        return styled('div')(() => {
            return parseStyles([
                tw``,
            ]);
        })
    }, [styled]);

    const wrapComponents = {
        gold: RoundedGoldBorderStyles,
        none: NoWrapStyles
    };
    const WrapComponent = gold ? wrapComponents.gold : wrapComponents.none;
    const WrapComponentStyles = useMemo(() => {
        return styled(WrapComponent)(({ leftSpace }) => {
            return parseStyles([
                tw`z-10`,
                'large' === leftSpace ? tw`ml-4!` : tw``,
                'normal' === leftSpace ? tw`ml-3!` : tw``,
                'small' === leftSpace ? tw`ml-2!` : tw``,
                'smaller' === leftSpace ? tw`ml-1!` : tw``,
                'smallest' === leftSpace ? tw`ml-0.5!` : tw``,
                { width: `${wh}px`, height: `${wh}px` },
                true === greyed ? {
                    'opacity': '0.5',
                    'mix-blend-mode': 'luminosity'
                } : tw``,
            ]);
        })
    }, [styled]);

    const src = perkImage(id);

    return (
        <WrapComponentStyles leftSpace={leftSpace} borderWidth={borderWidth} greyed={greyed}>
            <Image src={src} rounded={rounded} width={wh} height={wh} bgColor={false} leftSpace={leftSpace} cursor={cursor} />
        </WrapComponentStyles>
    );
};

export default Rune;