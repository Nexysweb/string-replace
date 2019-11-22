export const replaceUnit = (r, k, val) => {
  const rg = new RegExp(`i18n\\(("|'|&quot;|&#x27;)${k}("|'|&quot;|&#x27;)\\)`, 'g');

  return r.replace(rg, val);
}

export const replaceInFileArray = (r, jDict, jArr = []) => {
  if (jArr.length === 0 ) {
    return r;
  }

  const [head, ...tail] = jArr;

  const t = replaceUnit(r, head, jDict[head]);

  return replaceInFileArray(t, jDict, tail);
}

export const replaceInFile = (r, jDict = {}) => {
  const jArr = Object.keys(jDict);

  return replaceInFileArray(r, jDict, jArr);
}