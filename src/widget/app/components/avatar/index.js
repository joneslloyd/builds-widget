import RoundedGoldBorder from '../rounded-gold-bounder';
import Image from '../image';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';
import { championImage } from '../../lib/helpers';
import tw from 'twin.macro';

const AvatarStyles = tw.div`flex`;

const Avatar = () => {

    const { dataApiBuildData: { data: { lol: { champion: { build: { championSlug = '' } = {} } = {} } = {} } = {} } = {}, squidexApiBuildData: { data: squidexData = {} } } = useContext(BuildContext);
    const { championCommonInfo = [] } = squidexData;
    const { flatData: { name = '', title = '' } = {} } = championCommonInfo[0] || {};

    //Avatar URL
    const avatarUrl = championImage(championSlug);

    //Avatar title and alt text
    const altTitle = `${name} – ${title}`;

    return (
        <AvatarStyles>
            <RoundedGoldBorder>
                <Image src={avatarUrl} rounded={true} width={36} height={36} title={altTitle} alt={altTitle} />
            </RoundedGoldBorder>
        </AvatarStyles>
    );
};

export default Avatar;