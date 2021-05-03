import { memo } from 'preact/compat';
import { useDataApi } from '../../lib/context/data-api';
import { useSquidexApi } from '../../lib/context/squidex-api';
import { useLoading } from '../../lib/context/loading';
import RoundedGoldBorder from '../rounded-gold-border';
import Image from '../image';
import { championImage, parseStyles } from '../../lib/helpers';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';

const Avatar = () => {

    const styled = useStyled();

    const AvatarStyles = styled('div')(() => {
        return parseStyles([
            tw`flex`,
        ]);
    });

    const { daData: { data: { lol: { champion: { build: { championSlug = '' } = {} } = {} } = {} } = {} } = {} } = useDataApi();
    const { sqData: { data: squidexData = {} } } = useSquidexApi();
    const { loading: isLoading = true } = useLoading();

    const { championCommonInfo = [] } = squidexData;
    const { flatData: { name = '', title = '' } = {} } = championCommonInfo[0] || {};

    const loading = isLoading || '' === name;

    //Avatar URL
    const avatarUrl = championImage(championSlug);

    //Avatar title and alt text
    const altTitle = `${name} – ${title}`;

    return (
        <AvatarStyles>
            <RoundedGoldBorder loading={loading}>
                <Image src={avatarUrl} rounded="full" width={36} height={36} title={altTitle} alt={altTitle} />
            </RoundedGoldBorder>
        </AvatarStyles>
    );
};

export default memo(Avatar);