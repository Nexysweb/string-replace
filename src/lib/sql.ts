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


// transpiled (to be deleted) from https://babeljs.io/en/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBBCOAbA8gVygFRAQQE64EMBPGAXhgApQwoBTGgLjilwEswBzASiYujc4wAPjDCoAtgCNauYaNSJEXANoBdNWQB8MAN4AoGDGrQYuEAHcITfuw4by1OjQB0EAA6JWUCgHoAOmA-3ADcegamtFCouGCmFhDO4gRuVCCIEmAAyiy2WrrhhsawoIhWzAJ2qmRGaRnZFa4eXr5-EABUfkKtbUFcoQURUTE1pQOGzgBmrIh0uFR5-oZLS7iR0bHAMACEpOQA5Huhy4YAvlxjMInJ86Tai8eGrBOUW6wQAHIE7xTvEtJzwC4QPyD2WqyGsV-UhkVD6F1OYVBMCelE2u327wAqgAZbF7LggpGDdbyRRHUEnRGg8Ek4Dk5ZncmMvQnYJAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Ctypescript&prettier=false&targets=&version=7.11.6&externalPlugins=
/*
"use strict";

var sqlOutToArray = function sqlOutToArray(content) {
  var rows = content.split(/\n/g);
  return rows.map(function (columnString) {
    var cols = columnString.split(/\s*\|\s*/g);
    return cols.filter(function (c) {
      return c !== '';
    }).map(function (c) {
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
*/
