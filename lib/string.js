/*!
* string
* JavaScript string utilities library
* Copyright (c) 2011 Enrico Marino <enrico.marino@email.com>
* Modifications to remove namespacing and make work (!)
* Warning; not every method tested yet
* Copyright (c) Aaron Zinman 2012 Empirical Design LLC <aaron@empiric.al>
* MIT License
*/

/**
 * Test if 'this' is a string.
 *
 * @param {String} this string
 * @return {Boolean} true if 'this' is a string, false otherwise
 * @api public
 */

String.prototype.is = function () {
  return '[object String]' === ({}.toString).call(this);
};

/**
 * Test if 'this' is blank.
 *
 * @param {String} this string
 * @return {Boolean} true if 'this' is blank, false otherwise
 * @api public
 */

String.prototype.is.blank = function () {
  return !!this.match(/^\s*$/);
};

/**
 * Capitalize 'this'.
 *
 * @param {String} this string
 * @return {String} 'this' capitalized
 * @api public
 */

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase()
    + this.substring(1).toLowerCase();
};

/**
 * Chop 'this' by 'step'.
 *
 * @param {String} this string
 * @param {Number} step step
 * @return {Array} parts of 'this' chopped
 * @api public
 */

String.prototype.chop = function (step) {
  var result = []
    , len = this.length
    , i;

  step || (step = len);

  for (i = 0; i < len; i += step) {
    result.push(this.slice(i, i + step));
  }

  return result;
};

/**
 * Count 'substr' occurrencies in 'this'.
 *
 * @param {String} this string
 * @param {String} substr substring
 * @return {Number} number of occurrencies of 'substr' in 'this'
 * @api public
 */

String.prototype.count = function (substr) {
  var result = 0
    , len = this.length
    , step = substr.length
    , index = 0
    , i
    ;

  for (i = 0; i < len; i += index + step) {
    index = this.indexOf(substr, i);
    if (index < 0) {
      return result;
    }
    result += 1;
  }

  return result;
};

/**
 * Get chars of 'this'.
 *
 * @param {String} this string
 * @return {Array} chars of 'this'
 * @api public
 */

String.prototype.chars = function () {
  return this.split('');
};

/**
 * Escape html.
 *
 * @param {String} this string
 * @return {String} string escaped
 * @api public
 */

String.prototype.escapeHTML = function () {
  return this
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, "&apos;");
};

/**
 * Unescape html.
 *
 * @param {String} this string
 * @return {String} string unescaped
 * @api public
 */

String.prototype.unescapeHTML = function () {

  return this
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
};

/**
 * Escape regular expression.
 *
 * @param {String} this string
 * @return {String} string unescaped
 * @api public
 */

String.prototype.escapeRegExp = function () {
  return this.replace(/([-.*+?^${}()|[\]\/\\])/g, '\\$1');
};

/**
 * Insert 'substr' in 'this' from the 'i'-th char.
 *
 * @param {String} this string
 * @param {String} substr substring
 * @param {Number} [i = this.length]
 * @return {String} 'this' with 'substr' inserted from the 'i'-th char
 * @api public
 */

String.prototype.insert = function (substr, i) {
  i || (i = this.length);

  return this
    .split('')
    .splice(i, 0, substr)
    .join('');
};

/**
 * Test if 'this' includes 'substr'
 *
 * @param {String} this string
 * @param {String} substr substring
 * @return {Boolean} true if 'this' includes 'substr', false otherwise
 * @api public
 */

String.prototype.includes = function (substr) {
  return this.indexOf(substr) !== -1;
};

/**
 * Return lines.
 *
 * @param {String} this string
 * @return {Array} lines.
 * @api public
 */

String.prototype.lines = function () {
  return this.split('\n');
};

/**
 * Splice 'this'.
 *
 * @param {String} this string
 * @param {Number} i i
 * @param {Number} howmany how many
 * @param {String} substr sub string
 * @return {String} 'this' spliced
 * @api public
 */

String.prototype.splice = function (i, howmany, substr) {
  return this
    .split('')
    .splice(i, howmany, substr)
    .join('');
};

/**
 * Test if 'this' starts with 'start'.
 *
 * @param {String} this string
 * @param {String} start start
 * @return {Boolean} true if 'this' starts with 'start', false otherwise.
 * @api public
 */

String.prototype.startsWith = function (start) {
  return this.length >= start.length
    && this.substring(0, start.length) === start;
};

/**
 * Test if 'this' ends with 'end'.
 *
 * @param {String} this string
 * @param {String} end end
 * @return {Boolean} true if 'this' ends with 'end', false otherwise.
 * @api public
 */

String.prototype.endsWith = function (end) {
  return this.length >= end.length
    && this.substring(this.length - end.length) === end;
};

/**
 * Camelize 'this'.
 *
 * @param {String} this string
 * @return {String} 'this' camelized.
 * @api public
 */

String.prototype.camelize = function () {
  return this
    .trim()
    .replace(/(\-|_|\s)+(.)?/g, function (match, separator, chr) {
      return chr ? chr.toUpperCase() : '';
    });
};

/**
 * Undescorize 'this'.
 *
 * @param {String} this string
 * @return {String} 'this' underscored
 * @api public
 */

String.prototype.underscorize = function () {
  return this
    .trim()
    .replace(/([a-z\d])([A-Z]+)/g, '$1_$2')
    .replace(/\-|\s+/g, '_')
    .toLowerCase();
};

/**
 * Dasherize 'this'.
 *
 * @param {String} this string
 * @return {String} 'this' dasherized
 * @api public
 */

String.prototype.dasherize = function () {
  return this
    .trim()
    .replace(/([a-z\d])([A-Z]+)/g, '$1-$2')
    .replace(/^([A-Z]+)/, '-$1')
    .replace(/\_|\s+/g, '-')
    .toLowerCase();
};

/**
 * Truncate 'this'.
 *
 * @param {String} this string
 * @param {Number} length max length
 * @param {String} [truncation = '...'] truncation string
 * @return {String} 'this' truncated
 * @api public
 */

String.prototype.truncate = function (length, truncation) {
  truncation || (truncation = '...');
  return this.slice(0, length) + truncation;
};

/**
 * Get words in 'this' delimited by 'delimiter'.
 *
 * @param {String} this string
 * @param {String} [delimiter = ' '] delimiter
 * @return {Array} words in 'this' delimited by 'delimiter'
 * @api public
 */

String.prototype.words = function (delimiter) {
  delimiter || (delimiter = " ");
  return this.split(delimiter);
};
