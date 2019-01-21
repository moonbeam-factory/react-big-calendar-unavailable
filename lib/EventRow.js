'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _classnames = _interopRequireDefault(require('classnames'))

var _react = _interopRequireDefault(require('react'))

var _EventRowMixin = _interopRequireDefault(require('./EventRowMixin'))

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

var EventRow =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(EventRow, _React$Component)

    function EventRow() {
      _classCallCheck(this, EventRow)

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(EventRow).apply(this, arguments)
      )
    }

    _createClass(EventRow, [
      {
        key: 'render',
        value: function render() {
          var _this = this

          var _this$props = this.props,
            segments = _this$props.segments,
            slots = _this$props.slotMetrics.slots,
            className = _this$props.className
          var lastEnd = 1
          return _react.default.createElement(
            'div',
            {
              className: (0, _classnames.default)(className, 'rbc-row'),
            },
            segments.reduce(function(row, _ref, li) {
              var event = _ref.event,
                left = _ref.left,
                right = _ref.right,
                span = _ref.span
              var key = '_lvl_' + li
              var gap = left - lastEnd

              var content = _EventRowMixin.default.renderEvent(
                _this.props,
                event
              )

              if (gap)
                row.push(
                  _EventRowMixin.default.renderSpan(
                    slots,
                    gap,
                    ''.concat(key, '_gap')
                  )
                )
              row.push(
                _EventRowMixin.default.renderSpan(slots, span, key, content)
              )
              lastEnd = right + 1
              return row
            }, [])
          )
        },
      },
    ])

    return EventRow
  })(_react.default.Component)

_defineProperty(
  EventRow,
  'propTypes',
  _objectSpread(
    {
      segments: _propTypes.default.array,
    },
    _EventRowMixin.default.propTypes
  )
)

_defineProperty(
  EventRow,
  'defaultProps',
  _objectSpread({}, _EventRowMixin.default.defaultProps)
)

var _default = EventRow
exports.default = _default
