import loadable from '@loadable/component';

const LoadableAppWrapper = (props) => {

    const LoadableApp = loadable(() => import(`../../`));
    const LoadableGlobalStyles = loadable(() => import(`../../styles/global-styles`));

    return (
        <>
            <LoadableGlobalStyles />
            <LoadableApp />
        </>
    )
};

export default LoadableAppWrapper;