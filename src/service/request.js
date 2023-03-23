async function request(url, init = {}) {
  const requestParam = new Request(url, init);
  try {
    const response = await fetch(requestParam);
    return response.json();
  } catch (err) {
    console.error('biz error', err);
    return err;
  }
}

async function requestGet(url, init = {}) {
  const newInit = { ...init, method: 'GET' };
  return request(url, newInit);
}

export { request as default, requestGet };
