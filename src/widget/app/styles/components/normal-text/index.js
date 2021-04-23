import { useStyled } from '../../../lib/context/goober';
import StandardText from '../../utils/standard-text';
import LoadingText from '../../utils/loading-text';

const NormalText = ({ children, ...rest }) => {

    const styled = useStyled();

    const NormalTextC = styled('span')(({ loading }) => [
        StandardText,
        (loading) && LoadingText,
    ]);

    return (
        <NormalTextC {...rest}>{children}</NormalTextC>
    );
};

export default NormalText;