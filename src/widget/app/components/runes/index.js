import CompactRunes from '../compact-runes';
import FullRunes from '../full-runes';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';

const Runes = () => {

    const { layout = 'compact' } = useContext(BuildContext);

    const RunesComponent = 'compact' === layout ? (<CompactRunes />) : (<FullRunes />);

    return RunesComponent;
};

export default Runes;