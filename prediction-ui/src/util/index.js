
export async function execFetch(url, body, method) {
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

    const result = await fetch('/dev/api/v1' + url, params);
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
