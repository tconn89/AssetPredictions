
export async function execFetch(url, body, method = 'GET') {
  const baseURL = url.startsWith('/finn') ? '/dev' + url : '/dev/api/v1' + url;
  try {
    let params = {
        method,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : null
    };

    const result = await fetch(baseURL, params);
    const payload = await result.json();
    if (!result.ok) {
        throw payload;
    }
    return payload;
  } catch (err) {
      const skippedCodes = [404];
      const statusCode = parseInt(err && err.statusCode);
      if (statusCode && !skippedCodes.includes(statusCode)) {
          console.error('[ASYNC] fetch failed', {
              status: (err && err.statusCode) || null,
              message: (err && err.message) || null
          });
      }
      throw err;
  }
};

export function asyncDispatch(dispatch) {
    return function(action) {
        if (typeof action === 'function') {
            action(dispatch);
        } else {
            dispatch(action);
        }
    }
}
