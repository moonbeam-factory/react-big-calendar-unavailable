'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _Week = _interopRequireDefault(require('./Week'))

var _TimeGrid = _interopRequireDefault(require('./TimeGrid'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest()
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === '[object Arguments]'
  )
    return Array.from(iter)
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr
}

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

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  return _extends.apply(this, arguments)
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call
  }
  return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return self
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function')
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  })
  if (superClass) _setPrototypeOf(subClass, superClass)
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p
      return o
    }
  return _setPrototypeOf(o, p)
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

function workWeekRange(date, options) {
  return _Week.default.range(date, options).filter(function(d) {
    return [6, 0].indexOf(d.getDay()) === -1
  })
}

var WorkWeek =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(WorkWeek, _React$Component)

    function WorkWeek() {
      _classCallCheck(this, WorkWeek)

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(WorkWeek).apply(this, arguments)
      )
    }

    _createClass(WorkWeek, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            date = _this$props.date,
            props = _objectWithoutProperties(_this$props, ['date'])

          var range = workWeekRange(date, this.props)
          return _react.default.createElement(
            _TimeGrid.default,
            _extends({}, props, {
              range: range,
              eventOffset: 15,
            })
          )
        },
      },
    ])

    return WorkWeek
  })(_react.default.Component)

_defineProperty(WorkWeek, 'propTypes', {
  date: _propTypes.default.instanceOf(Date).isRequired,
})

_defineProperty(WorkWeek, 'defaultProps', _TimeGrid.default.defaultProps)

WorkWeek.range = workWeekRange
WorkWeek.navigate = _Week.default.navigate

WorkWeek.title = function(date, _ref) {
  var localizer = _ref.localizer

  var _workWeekRange = workWeekRange(date, {
      localizer: localizer,
    }),
    _workWeekRange2 = _toArray(_workWeekRange),
    start = _workWeekRange2[0],
    rest = _workWeekRange2.slice(1)

  return localizer.format(
    {
      start: start,
      end: rest.pop(),
    },
    'dayRangeHeaderFormat'
  )
}

var _default = WorkWeek
exports.default = _default
