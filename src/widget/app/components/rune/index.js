import RoundedGoldBorder from '../rounded-gold-border';
import Image from '../image';
import { perkImage } from '../../lib/helpers';
import tw, { styled } from 'twin.macro';

const RoundedGoldBorderStyles = tw(RoundedGoldBorder)``;
const NoWrapStyles = tw.div``;

const Rune = ({ id, wh = 32, rounded = false, gold = false, leftSpace = false, borderWidth = false }) => {

    const wrapComponents = {
        gold: RoundedGoldBorderStyles,
        none: NoWrapStyles
    };
    const WrapComponent = gold ? wrapComponents.gold : wrapComponents.none;
    const WrapComponentStyles = styled(WrapComponent)(({ leftSpace }) => [
        tw`z-10`,
        'large' === leftSpace ? tw`ml-4!` : tw``,
        'normal' === leftSpace ? tw`ml-3!` : tw``,
        'small' === leftSpace ? tw`ml-2!` : tw``,
        'smaller' === leftSpace ? tw`ml-1!` : tw``,
        'smallest' === leftSpace ? tw`ml-0.5!` : tw``,
        { width: `${wh}px`, height: `${wh}px` }
    ]);

    const src = perkImage(id);

    return (
        <WrapComponentStyles leftSpace={leftSpace} borderWidth={borderWidth}>
            <Image src={src} rounded={rounded} width={wh} height={wh} bgColor={false} leftSpace={leftSpace} />
        </WrapComponentStyles>
    );
};

export default Rune;