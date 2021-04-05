import Mark from '../mark';
import BrandName from '../brand-name';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';

const PoweredByStyles = tw(FlexRow)`pt-5 pb-2.5 md:(pt-0 pb-0 ml-auto)`;
const PoweredBySmallPurpleText = tw(SmallPurpleText)`flex items-center self-end normal-case`;
const PoweredByMark = tw(Mark)`ml-1 mr-1 lg:(ml-2 mr-2)`;

const PoweredBy = () => {

    return (
        <PoweredByStyles>
            <PoweredBySmallPurpleText>Powered by <PoweredByMark /><BrandName /></PoweredBySmallPurpleText>
        </PoweredByStyles>
    );
};

export default PoweredBy;