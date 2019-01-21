'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _classnames = _interopRequireDefault(require('classnames'))

var _dates = _interopRequireDefault(require('./utils/dates'))

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

var propTypes = {
  event: _propTypes.default.object.isRequired,
  slotStart: _propTypes.default.instanceOf(Date),
  slotEnd: _propTypes.default.instanceOf(Date),
  selected: _propTypes.default.bool,
  isAllDay: _propTypes.default.bool,
  continuesPrior: _propTypes.default.bool,
  continuesAfter: _propTypes.default.bool,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object,
  onSelect: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func,
}

var EventCell =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(EventCell, _React$Component)

    function EventCell() {
      _classCallCheck(this, EventCell)

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(EventCell).apply(this, arguments)
      )
    }

    _createClass(EventCell, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            style = _this$props.style,
            className = _this$props.className,
            event = _this$props.event,
            selected = _this$props.selected,
            isAllDay = _this$props.isAllDay,
            onSelect = _this$props.onSelect,
            _onDoubleClick = _this$props.onDoubleClick,
            localizer = _this$props.localizer,
            continuesPrior = _this$props.continuesPrior,
            continuesAfter = _this$props.continuesAfter,
            accessors = _this$props.accessors,
            getters = _this$props.getters,
            children = _this$props.children,
            _this$props$component = _this$props.components,
            Event = _this$props$component.event,
            EventWrapper = _this$props$component.eventWrapper,
            props = _objectWithoutProperties(_this$props, [
              'style',
              'className',
              'event',
              'selected',
              'isAllDay',
              'onSelect',
              'onDoubleClick',
              'localizer',
              'continuesPrior',
              'continuesAfter',
              'accessors',
              'getters',
              'children',
              'components',
            ])

          var title = accessors.title(event)
          var tooltip = accessors.tooltip(event)
          var end = accessors.end(event)
          var start = accessors.start(event)
          var allDay = accessors.allDay(event)
          var showAsAllDay =
            isAllDay ||
            allDay ||
            _dates.default.diff(start, _dates.default.ceil(end, 'day'), 'day') >
              1
          var userProps = getters.eventProp(event, start, end, selected)

          var content = _react.default.createElement(
            'div',
            {
              className: 'rbc-event-content',
              title: tooltip || undefined,
            },
            Event
              ? _react.default.createElement(Event, {
                  event: event,
                  title: title,
                  isAllDay: allDay,
                  localizer: localizer,
                })
              : title
          )

          return _react.default.createElement(
            EventWrapper,
            _extends({}, this.props, {
              type: 'date',
            }),
            _react.default.createElement(
              'button',
              _extends({}, props, {
                style: _objectSpread({}, userProps.style, style),
                className: (0, _classnames.default)(
                  'rbc-event',
                  className,
                  userProps.className,
                  {
                    'rbc-selected': selected,
                    'rbc-event-allday': showAsAllDay,
                    'rbc-event-continues-prior': continuesPrior,
                    'rbc-event-continues-after': continuesAfter,
                  }
                ),
                onClick: function onClick(e) {
                  return onSelect && onSelect(event, e)
                },
                onDoubleClick: function onDoubleClick(e) {
                  return _onDoubleClick && _onDoubleClick(event, e)
                },
              }),
              typeof children === 'function' ? children(content) : content
            )
          )
        },
      },
    ])

    return EventCell
  })(_react.default.Component)

EventCell.propTypes = propTypes
var _default = EventCell
exports.default = _default
