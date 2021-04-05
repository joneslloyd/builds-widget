import { Component } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';

//Courtesy of: https://medium.com/@erickhoury/react-dynamically-importing-svgs-and-render-as-react-component-b764b6475896

const DynamicSvg = ({ name = 'mobalytics-logo', ...rest }) => {

    const ImportedDynamicSvgRef = useRef(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        const importDynamicSvg = async () => {
            try {
                const { default: namedImport } = await import(`../../images/${name}.svg`);
                ImportedDynamicSvgRef.current = namedImport;
            } catch (err) {
                throw err;
            } finally {
                setLoading(false);
            }
        };

        importDynamicSvg();

    }, [name]);

    if (!loading && ImportedDynamicSvgRef.current) {
        const { current: ImportedDynamicSvg } = ImportedDynamicSvgRef;
        return <ImportedDynamicSvg {...rest} />;
    }
};

export default DynamicSvg;