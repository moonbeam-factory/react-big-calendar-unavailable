'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.mergeWithDefaults = mergeWithDefaults
exports.DateLocalizer = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _invariant = _interopRequireDefault(require('invariant'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

var localePropType = _propTypes.default.oneOfType([
  _propTypes.default.string,
  _propTypes.default.func,
])

function _format(localizer, formatter, value, format, culture) {
  var result =
    typeof format === 'function'
      ? format(value, culture, localizer)
      : formatter.call(localizer, value, format, culture)
  ;(0, _invariant.default)(
    result == null || typeof result === 'string',
    '`localizer format(..)` must return a string, null, or undefined'
  )
  return result
}

var DateLocalizer = function DateLocalizer(spec) {
  var _this = this

  _classCallCheck(this, DateLocalizer)
  ;(0, _invariant.default)(
    typeof spec.format === 'function',
    'date localizer `format(..)` must be a function'
  )
  ;(0, _invariant.default)(
    typeof spec.firstOfWeek === 'function',
    'date localizer `firstOfWeek(..)` must be a function'
  )
  this.propType = spec.propType || localePropType
  this.startOfWeek = spec.firstOfWeek
  this.formats = spec.formats

  this.format = function() {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    return _format.apply(void 0, [_this, spec.format].concat(args))
  }
}

exports.DateLocalizer = DateLocalizer

function mergeWithDefaults(localizer, culture, formatOverrides, messages) {
  var formats = _objectSpread({}, localizer.formats, formatOverrides)

  return _objectSpread({}, localizer, {
    messages: messages,
    startOfWeek: function startOfWeek() {
      return localizer.startOfWeek(culture)
    },
    format: function format(value, _format2) {
      return localizer.format(value, formats[_format2] || _format2, culture)
    },
  })
}
