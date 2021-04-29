import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import * as goober from 'goober';

const documentHead = document.head;
const defaultGooberContext = {
    css: goober.css.bind({ target: documentHead }),
    styled: goober.styled.bind({ target: documentHead }),
    glob: goober.glob.bind({ target: documentHead }),
    customTarget: false,
};

export const GooberContext = createContext(defaultGooberContext);

export const GooberProvider = ({ children, target: targetRaw }) => {

    const target = targetRaw ? targetRaw.shadowRoot : false;

    const gooberContextValue = target ? {
        css: goober.css.bind({ target }),
        styled: goober.styled.bind({ target }),
        glob: goober.css.bind({ g: 1, target }),
        customTarget: true,
    } : defaultGooberContext;

    return (
        <>
            {target && (
                <GooberContext.Provider value={gooberContextValue}>{children}</GooberContext.Provider>
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