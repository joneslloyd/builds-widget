import Image from '../image';
import { summonerSpellIcon, gameItemIcon, getSkillIcon } from '../../lib/helpers';
import tw, { styled } from 'twin.macro';

const SpellItemStyles = styled('div')(({ leftSpace, wh }) => [
    tw`relative`,
    'large' === leftSpace ? tw`ml-4!` : tw``,
    'normal' === leftSpace ? tw`ml-3.5!` : tw``,
    'small' === leftSpace ? tw`ml-2!` : tw``,
    'smaller' === leftSpace ? tw`ml-1!` : tw``,
    'smallest' === leftSpace ? tw`ml-0.5!` : tw``,
    { width: `${wh}px`, height: `${wh}px` }
]);

const SpellItem = ({ slug, wh = 36, type = 'item', leftSpace = false, overlay = false }) => {

    const src = 'spell' === type ? summonerSpellIcon(slug) : ('item' === type ? gameItemIcon(slug) : ('skill' === type ? getSkillIcon(slug) : false));

    return (
        <SpellItemStyles leftSpace={leftSpace} wh={wh}>
            <Image src={src} width={wh} height={wh} bgColor={false} rounded={'md'} />
            {overlay}
        </SpellItemStyles>
    );
};

export default SpellItem;