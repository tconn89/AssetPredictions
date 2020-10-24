
export const TYPES = {
  loading: 'loading',
  success: 'success',
  error: 'error',
};

export function loading() {
  return {
      type: TYPES.loading,
  };
}

export function success(payload) {
  return {
      type: TYPES.success,
      payload,
  };
}

export function error(err) {
  return {
      type: TYPES.error,
      error: err,
  }
}
