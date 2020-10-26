export function getDomain(url) {
  const pIndex = url.indexOf('.');
  const sIndex = url.substring(pIndex).indexOf('/');
  return url.substring(8, pIndex + sIndex);
}
