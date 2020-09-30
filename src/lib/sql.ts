/**
 * input: SQL output, returns array with values
 */
const sqlOutToArray = (content: string): (string | number | null)[][] => {
  const rows: string[] = content.split(/\n/g);

  return rows.map(columnString => {
    const cols: string[] = columnString.split(/\s*\|\s*/g);

    return cols
      .filter(c => {
        return c !== '';
      })
      .map(c => {
        if (!isNaN(Number(c))) {
          return Number(c);
        }

        if (c === 'NULL') {
          return null;
        }

        return c;
      });
  });
};
