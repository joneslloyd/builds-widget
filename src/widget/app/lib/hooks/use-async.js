import { useEffect } from 'preact/hooks';

export const useAsync = (asyncFn, onSuccess) => {

    useEffect(() => {

        let isMounted = true;

        asyncFn().then(data => {

            if (isMounted) {
                onSuccess(data);
            }
        });

        return () => { isMounted = false };

    }, [asyncFn, onSuccess]);
};

export default useAsync;