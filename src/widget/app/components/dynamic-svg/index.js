import loadable from '@loadable/component';

//Courtesy of: https://medium.com/@erickhoury/react-dynamically-importing-svgs-and-render-as-react-component-b764b6475896

const DynamicSvg = ({ name = 'mobalytics-logo', ...rest }) => {

    const DynamicSvgComponent = loadable(() => import(`../../images/${name}.svg`));

    return (
        <DynamicSvgComponent {...rest} />
    )
};

export default DynamicSvg;