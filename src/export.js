export const bitToBlob = (x, type) => new Blob([x], {type});

export const toUrl = content => {
  const b = bitToBlob(content, 'text/html');
  //window.URL.revokeObjectURL(url);
  return window.URL.createObjectURL(b);

  // change filename
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition
  // Content-Disposition: inline
  // Content-Disposition: attachment
  // Content-Disposition: attachment; filename="filename.jpg"
}