import { memo } from 'preact/compat';
import Image from '../image';
import { summonerSpellIcon, gameItemIcon, getSkillIcon, parseStyles } from '../../lib/helpers';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';

const SpellItem = ({ slug, wh = 36, type = 'item', leftSpace = false, bottomSpace = false, topSpace = false, overlay = false, cursor = 'default', ...rest }) => {

    const styled = useStyled();

    const SpellItemStyles = styled('div')(({ leftSpace = false, bottomSpace = false, topSpace = false, wh }) => {
        return parseStyles([
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
    });

    const src = 'spell' === type ? summonerSpellIcon(slug) : ('item' === type ? gameItemIcon(slug) : ('skill' === type ? getSkillIcon(slug) : false));

    return (
        <SpellItemStyles leftSpace={leftSpace} wh={wh} bottomSpace={bottomSpace} topSpace={topSpace} {...rest}>
            <Image src={src} width={wh} height={wh} bgColor={false} rounded={'md'} cursor={cursor} />
            {overlay}
        </SpellItemStyles>
    );
};

export default memo(SpellItem);