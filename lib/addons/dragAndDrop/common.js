'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.mergeComponents = exports.nest = exports.dragAccessors = void 0

var _accessors = require('../../utils/accessors')

var _react = require('react')

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}
    var ownKeys = Object.keys(source)
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable
        })
      )
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key])
    })
  }
  return target
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }
  return obj
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {}
  var target = _objectWithoutPropertiesLoose(source, excluded)
  var key, i
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i]
      if (excluded.indexOf(key) >= 0) continue
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue
      target[key] = source[key]
    }
  }
  return target
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {}
  var target = {}
  var sourceKeys = Object.keys(source)
  var key, i
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i]
    if (excluded.indexOf(key) >= 0) continue
    target[key] = source[key]
  }
  return target
}

var dragAccessors = {
  start: (0, _accessors.wrapAccessor)(function(e) {
    return e.start
  }),
  end: (0, _accessors.wrapAccessor)(function(e) {
    return e.end
  }),
}
exports.dragAccessors = dragAccessors

var nest = function nest() {
  for (
    var _len = arguments.length, Components = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    Components[_key] = arguments[_key]
  }

  var factories = Components.filter(Boolean).map(_react.createFactory)

  var Nest = function Nest(_ref) {
    var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children'])

    return factories.reduceRight(function(child, factory) {
      return factory(props, child)
    }, children)
  }

  return Nest
}

exports.nest = nest

var mergeComponents = function mergeComponents() {
  var components =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  var addons = arguments.length > 1 ? arguments[1] : undefined
  var keys = Object.keys(addons)

  var result = _objectSpread({}, components)

  keys.forEach(function(key) {
    result[key] = components[key] ? nest(addons[key]) : addons[key]
  })
  return result
}

exports.mergeComponents = mergeComponents
