import { useCallback } from 'react';
import { useAppState, useAppDispatch } from '../stores/GlobalAppStore';
import * as actions from '../stores/GlobalAppStore/news/actions';
import { execFetch } from 'util/index'

export default function useGlobalNews() {
    const dispatch = useAppDispatch();
    const state = useAppState();

    const fetchNews = useCallback(async function (company) {
        try {
            dispatch(actions.loading());
            const res = await execFetch(`/finn/news/${company}`);
            dispatch(actions.success(res));
        } catch(err) {
            dispatch(actions.error(err));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [
        state,
        { fetchNews }
    ];
}
