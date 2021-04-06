import { useState, useEffect, useRef } from 'preact/hooks';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';

const Runes = (props) => {

    const { layout = 'compact' } = useContext(BuildContext);
    const RunesDisplayRef = useRef(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        const importRunesDisplayComponent = async () => {
            try {
                const { default: runesDisplay } = await import(`../${layout}-runes/index.js`);
                RunesDisplayRef.current = runesDisplay;
            } catch (err) {
                throw err;
            } finally {
                setLoading(false);
            }
        };

        importRunesDisplayComponent();

    }, []);

    if (!loading && RunesDisplayRef.current) {
        const { current: ImportedRunesDisplayComponent } = RunesDisplayRef;
        return <ImportedRunesDisplayComponent {...props} />;
    }
};

export default Runes;