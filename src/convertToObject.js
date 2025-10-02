'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const result = {};

  arr.forEach((element) => {
    const [key, value] = element.split(':');

    if (value !== undefined) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
