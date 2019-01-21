'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _classnames = _interopRequireDefault(require('classnames'))

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireWildcard(require('react'))

var TimeSlotUtils = _interopRequireWildcard(require('./utils/TimeSlots'))

var _TimeSlotGroup = _interopRequireDefault(require('./TimeSlotGroup'))

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  } else {
    var newObj = {}
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {}
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc)
          } else {
            newObj[key] = obj[key]
          }
        }
      }
    }
    newObj.default = obj
    return newObj
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return self
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

var TimeGutter =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(TimeGutter, _Component)

    function TimeGutter() {
      var _getPrototypeOf2

      var _this

      _classCallCheck(this, TimeGutter)

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(TimeGutter)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'renderSlot',
        function(value, idx) {
          if (idx !== 0) return null
          var _this$props = _this.props,
            localizer = _this$props.localizer,
            getNow = _this$props.getNow

          var isNow = _this.slotMetrics.dateIsInGroup(getNow(), idx)

          return _react.default.createElement(
            'span',
            {
              className: (0, _classnames.default)(
                'rbc-label',
                isNow && 'rbc-now'
              ),
            },
            localizer.format(value, 'timeGutterFormat')
          )
        }
      )

      var _this$props2 = _this.props,
        min = _this$props2.min,
        max = _this$props2.max,
        timeslots = _this$props2.timeslots,
        step = _this$props2.step
      _this.slotMetrics = TimeSlotUtils.getSlotMetrics({
        min: min,
        max: max,
        timeslots: timeslots,
        step: step,
      })
      return _this
    }

    _createClass(TimeGutter, [
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          var min = nextProps.min,
            max = nextProps.max,
            timeslots = nextProps.timeslots,
            step = nextProps.step
          this.slotMetrics = this.slotMetrics.update({
            min: min,
            max: max,
            timeslots: timeslots,
            step: step,
          })
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this2 = this

          var _this$props3 = this.props,
            resource = _this$props3.resource,
            components = _this$props3.components
          return _react.default.createElement(
            'div',
            {
              className: 'rbc-time-gutter rbc-time-column',
            },
            this.slotMetrics.groups.map(function(grp, idx) {
              return _react.default.createElement(_TimeSlotGroup.default, {
                key: idx,
                group: grp,
                resource: resource,
                components: components,
                renderSlot: _this2.renderSlot,
              })
            })
          )
        },
      },
    ])

    return TimeGutter
  })(_react.Component)

exports.default = TimeGutter

_defineProperty(TimeGutter, 'propTypes', {
  min: _propTypes.default.instanceOf(Date).isRequired,
  max: _propTypes.default.instanceOf(Date).isRequired,
  timeslots: _propTypes.default.number.isRequired,
  step: _propTypes.default.number.isRequired,
  getNow: _propTypes.default.func.isRequired,
  components: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  resource: _propTypes.default.string,
})
