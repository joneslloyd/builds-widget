import { memo } from 'preact/compat';
import { useStaticGlobalProps } from '../../lib/context/static-global-props';
import { useState, useEffect, useRef } from 'preact/hooks';

const Runes = (props) => {

    const { layout } = useStaticGlobalProps();
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

export default memo(Runes);