import { useReducer, useCallback } from 'react'
import { execFetch } from 'util/index.js'

const reducer = (state, { type, response } = {}) => {
  switch (type) {
      case 'fetching':
          return { status: 'fetching' };
      case 'success':
          return { ...state,
              status: 'success',
              response,
          };
      case 'error':
          return { ...state, status: 'error' };
      default:
          return state;
  };
};

export default function usePredictionManager() {
  const [state, dispatch] = useReducer(reducer, {});

  const createRequest = useCallback(async (body) => {
    dispatch({ type: 'fetching' });
    const response = await execFetch('/assets/create', body, 'POST');
    dispatch({ type: 'success', response });
  }, [])
  const getListRequest = useCallback(async () => {
    dispatch({ type: 'fetching' });
    console.log(execFetch)
    const response = await execFetch('/assets', null, 'GET');

    dispatch({ type: 'success', response });
  }, [])

  return [state, { createRequest, getListRequest }]
}
