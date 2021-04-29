import { useRef, useState } from 'preact/hooks';

const useSingleDataLoader = (loadingFn, params) => {

    const mountedRef = useRef(true);
    const paramsRef = useRef({ loadingFn, params });
    const [state, setState] = useState({});

    useEffect(() => {
        const { loadingFn, params } = paramsRef.current;
        setState({ isLoading: true });
        loadingFn(params)
            .then(response => {
                mountedRef.current && setState({ isLoading: false, isLoaded: true, response, error: null });
            })
            .catch(error => {
                mountedRef.current && setState({ isLoading: false, isLoaded: true, error, response: null });
            });
    }, [setState]);

    useEffect(
        () => () => {
            mountedRef.current = false;
        },
        []
    );

    return state;
};

export default useSingleDataLoader;
