import { memo } from 'preact/compat';
import { useMemo } from 'preact/hooks';
import { useDataApi } from '../../lib/context/data-api';
import { useSquidexApi } from '../../lib/context/squidex-api';
import RoundedGoldBorder from '../rounded-gold-border';
import Image from '../image';
import { championImage, parseStyles } from '../../lib/helpers';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';

const Avatar = () => {

    const styled = useStyled();

    const AvatarStyles = useMemo(() => {
        return styled('div')(() => {
            return parseStyles([
                tw`flex`,
            ]);
        });
    }, [styled]);

    const { daData: { data: { lol: { champion: { build: { championSlug = '' } = {} } = {} } = {} } = {} } = {} } = useDataApi();
    const { sqData: { data: squidexData = {} } } = useSquidexApi();

    const { championCommonInfo = [] } = squidexData;
    const { flatData: { name = '', title = '' } = {} } = championCommonInfo[0] || {};

    //Avatar URL
    const avatarUrl = championImage(championSlug);

    //Avatar title and alt text
    const altTitle = `${name} – ${title}`;

    return (
        <AvatarStyles>
            <RoundedGoldBorder>
                <Image src={avatarUrl} rounded="full" width={36} height={36} title={altTitle} alt={altTitle} />
            </RoundedGoldBorder>
        </AvatarStyles>
    );
};

export default memo(Avatar);