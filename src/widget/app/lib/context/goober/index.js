import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import * as goober from 'goober';

export const GooberContext = createContext({
    css: goober.css,
    styled: goober.styled,
    glob: goober.glob,
    customTarget: false,
});

export const GooberProvider = ({ children, target: targetRaw }) => {

    const target = targetRaw ? targetRaw.shadowRoot : false;

    return (
        <>
            {target && (
                <GooberContext.Provider value={{
                    css: goober.css.bind({ target }),
                    styled: goober.styled.bind({ target }),
                    glob: goober.css.bind({ g: 1, target }),
                    customTarget: true,
                }}>{children}</GooberContext.Provider>
            )}
            {!target && (
                <>{children}</>
            )}
        </>
    );
};

export const useGoober = () => {

    const gooberState = useContext(GooberContext);

    if (typeof gooberState === 'undefined') {
        throw new Error('useGoober must be used within a GooberProvider')
    }

    return gooberState;
};

export const useCss = () => {

    const { css } = useGoober();

    return css;
};

export const useStyled = () => {

    const { styled } = useGoober();

    return styled;
};

export const useGlob = () => {

    const { glob } = useGoober();

    return glob;
};

export const useCustomTarget = () => {

    const { customTarget } = useGoober();

    return customTarget;
};