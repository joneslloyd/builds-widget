import { memo } from 'preact/compat';
import { useStaticGlobalProps } from '../../lib/context/static-global-props';
import { useState, useEffect, useRef } from 'preact/hooks';

const Skills = (props) => {

    const { layout } = useStaticGlobalProps();
    const SkillsDisplayRef = useRef(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        const importSkillsDisplayComponent = async () => {
            try {
                const { default: skillsDisplay } = await import(`../${layout}-skills/index.js`);
                SkillsDisplayRef.current = skillsDisplay;
            } catch (err) {
                throw err;
            } finally {
                setLoading(false);
            }
        };

        importSkillsDisplayComponent();

    }, []);

    if (!loading && SkillsDisplayRef.current) {
        const { current: ImportedSkillsDisplayComponent } = SkillsDisplayRef;
        return <ImportedSkillsDisplayComponent {...props} />;
    }
};

export default memo(Skills);