import MobalyticsLogo from '../mobalytics-logo';
import tw from 'twin.macro';
import FlexRow from '../../styles/components/flex-row';
import SmallPurpleText from '../../styles/components/small-purple-text';

const PoweredByStyles = tw(FlexRow)`ml-auto`;
const PoweredBySmallPurpleText = tw(SmallPurpleText)`flex items-center self-end normal-case`;
const PoweredByLogo = tw(MobalyticsLogo)`ml-2`;

const PoweredBy = () => {

    return (
        <PoweredByStyles>
            <PoweredBySmallPurpleText>Powered by <PoweredByLogo /></PoweredBySmallPurpleText>
        </PoweredByStyles>
    );
};

export default PoweredBy;