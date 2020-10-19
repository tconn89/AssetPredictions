import { useCallback } from 'react';
import { useAppDispatch } from '../stores/GlobalAppStore';
import * as actions from '../stores/GlobalAppStore/sidebar/actions';

export default function useGlobalSidebar() {
    const dispatch = useAppDispatch();

    const open = useCallback(function () {
        dispatch(actions.open());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const close = useCallback(function () {
        dispatch(actions.close());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggle = useCallback(function () {
        dispatch(actions.toggle());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        open,
        close,
        toggle
    };
}
