import { memo } from 'preact/compat';
import Mark from '../mark';
import BrandName from '../brand-name';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';
import { parseStyles } from '../../lib/helpers';

const PoweredBy = () => {

    const styled = useStyled();

    const PoweredByStyles = styled(FlexRow)(() => {
        return parseStyles([
            tw`pt-5 pb-2.5 md:(pt-0 pb-0 ml-auto)`,
        ]);
    });

    const PoweredBySmallPurpleText = styled(SmallPurpleText)(() => {
        return parseStyles([
            tw`flex items-center self-end normal-case`,
        ]);
    });

    const PoweredByMark = styled(Mark)(() => {
        return parseStyles([
            tw`ml-1 mr-1 lg:(ml-2 mr-2)`,
        ]);
    });

    return (
        <PoweredByStyles>
            <PoweredBySmallPurpleText>Powered by <PoweredByMark /><BrandName /></PoweredBySmallPurpleText>
        </PoweredByStyles>
    );
};

export default memo(PoweredBy);