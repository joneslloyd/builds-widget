import Image from '../image';
import { summonerSpellIcon, gameItemIcon } from '../../lib/helpers';
import tw, { styled } from 'twin.macro';

const SpellItemStyles = styled('div')(({ leftSpace, wh }) => [
    tw``,
    'large' === leftSpace ? tw`ml-4!` : tw``,
    'normal' === leftSpace ? tw`ml-3.5!` : tw``,
    'small' === leftSpace ? tw`ml-2!` : tw``,
    'smaller' === leftSpace ? tw`ml-1!` : tw``,
    'smallest' === leftSpace ? tw`ml-0.5!` : tw``,
    { width: `${wh}px`, height: `${wh}px` }
]);

const SpellItem = ({ slug, wh = 36, type = 'item', leftSpace = false }) => {

    const src = 'spell' === type ? summonerSpellIcon(slug) : ('item' === type ? gameItemIcon(slug) : false);

    return (
        <SpellItemStyles leftSpace={leftSpace} wh={wh}>
            <Image src={src} width={wh} height={wh} bgColor={false} />
        </SpellItemStyles>
    );
};

export default SpellItem;