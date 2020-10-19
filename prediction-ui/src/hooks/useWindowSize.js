import { useState, useEffect, useCallback } from 'react';

function debounce(fn, ms) {
    let timer;
    return _ => {
        clearTimeout(timer);
        timer = setTimeout(_ => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    }
}

export default function useWindowSize() {
    const [ dimensions, dimensionsSet ] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    // debounce at one resize per second
    const debouncedHandleResize = useCallback(debounce(function handleResize() {
        dimensionsSet({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }, 500), []);

    useEffect(function () {
        window.addEventListener('resize', debouncedHandleResize);
        return _ => {
            window.removeEventListener('resize', debouncedHandleResize);
        };
    }, [debouncedHandleResize]);

    return dimensions;
}
