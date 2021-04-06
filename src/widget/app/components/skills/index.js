import { useState, useEffect, useRef } from 'preact/hooks';
import { useContext } from 'preact/hooks';
import { BuildContext } from '../../lib/context';

const Skills = (props) => {

    const { layout = 'compact' } = useContext(BuildContext);
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

export default Skills;