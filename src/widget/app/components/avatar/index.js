import RoundedGoldBorder from '../rounded-gold-bounder';
import Image from '../image';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import { championImage } from '../../lib/helpers';
import tw from 'twin.macro';

const AvatarStyles = tw.div`flex`;

const Avatar = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { championSlug = '' } = {} } = {} } = {} } = {} } = {}, squidexApiBuildData = {} } = useContext(BuildContext);
    const avatarUrl = championImage(championSlug);
    console.log(squidexApiBuildData);
    return (
        <AvatarStyles>
            <RoundedGoldBorder>
                <Image src={avatarUrl} />
            </RoundedGoldBorder>
        </AvatarStyles>
    );
};

export default Avatar;