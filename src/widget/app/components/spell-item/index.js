import Image from '../image';
import { summonerSpellIcon, gameItemIcon, getSkillIcon } from '../../lib/helpers';
import tw, { styled } from 'twin.macro';

const SpellItemStyles = styled('div')(({ leftSpace = false, bottomSpace = false, topSpace = false, wh }) => [
    tw`relative`,
    'large' === leftSpace ? tw`ml-5!` : tw``,
    'normal' === leftSpace ? tw`ml-3.5!` : tw``,
    'small' === leftSpace ? tw`ml-2!` : tw``,
    'smaller' === leftSpace ? tw`ml-1!` : tw``,
    'smallest' === leftSpace ? tw`ml-0.5!` : tw``,
    'large' === bottomSpace ? tw`mb-5!` : tw``,
    'normal' === bottomSpace ? tw`mb-3.5!` : tw``,
    'small' === bottomSpace ? tw`mb-2!` : tw``,
    'smaller' === bottomSpace ? tw`mb-1!` : tw``,
    'smallest' === bottomSpace ? tw`mb-0.5!` : tw``,
    'large' === topSpace ? tw`mt-5!` : tw``,
    'normal' === topSpace ? tw`mt-3.5!` : tw``,
    'small' === topSpace ? tw`mt-2!` : tw``,
    'smaller' === topSpace ? tw`mt-1!` : tw``,
    'smallest' === topSpace ? tw`mt-0.5!` : tw``,
    { width: `${wh}px`, height: `${wh}px` }
]);

const SpellItem = ({ slug, wh = 36, type = 'item', leftSpace = false, bottomSpace = false, topSpace = false, overlay = false }) => {

    const src = 'spell' === type ? summonerSpellIcon(slug) : ('item' === type ? gameItemIcon(slug) : ('skill' === type ? getSkillIcon(slug) : false));

    return (
        <SpellItemStyles leftSpace={leftSpace} wh={wh} bottomSpace={bottomSpace} topSpace={topSpace}>
            <Image src={src} width={wh} height={wh} bgColor={false} rounded={'md'} />
            {overlay}
        </SpellItemStyles>
    );
};

export default SpellItem;