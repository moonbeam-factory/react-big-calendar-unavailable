'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.accessor = accessor
exports.wrapAccessor = void 0

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj
    }
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj
    }
  }
  return _typeof(obj)
}

/**
 * Retrieve via an accessor-like property
 *
 *    accessor(obj, 'name')   // => retrieves obj['name']
 *    accessor(data, func)    // => retrieves func(data)
 *    ... otherwise null
 */
function accessor(data, field) {
  var value = null
  if (typeof field === 'function') value = field(data)
  else if (
    typeof field === 'string' &&
    _typeof(data) === 'object' &&
    data != null &&
    field in data
  )
    value = data[field]
  return value
}

var wrapAccessor = function wrapAccessor(acc) {
  return function(data) {
    return accessor(data, acc)
  }
}

exports.wrapAccessor = wrapAccessor
