'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && line.includes(':'))
    .forEach((line) => {
      const [key, value] = line.split(':').map((part) => part.trim());

      if (key && value) {
        if (value.endsWith(';')) {
          // eslint-disable-next-line no-const-assign
          value = value.slice(0, -1);
        }
        stylesObject[key] = value;
      }
    });

  return stylesObject;
}

module.exports = convertToObject;
