import RoundedGoldBorder from '../rounded-gold-border';
import Image from '../image';
import { perkImage } from '../../lib/helpers';
import tw from 'twin.macro';

const NoWrap = tw.div``;

const Rune = ({ id, wh = 32, rounded = false, gold = false }) => {

    const wrapComponents = {
        gold: RoundedGoldBorder,
        none: NoWrap
    };
    const WrapComponent = gold ? wrapComponents.gold : wrapComponents.none;

    const src = perkImage(id);

    return (
        <WrapComponent>
            <Image src={src} rounded={rounded} width={wh} height={wh} bgColor={false} />
        </WrapComponent>
    );
};

export default Rune;