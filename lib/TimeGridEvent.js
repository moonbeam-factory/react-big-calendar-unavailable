'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _classnames = _interopRequireDefault(require('classnames'))

var _react = _interopRequireDefault(require('react'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
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

/* eslint-disable react/prop-types */
function TimeGridEvent(props) {
  var _objectSpread2

  var style = props.style,
    className = props.className,
    event = props.event,
    accessors = props.accessors,
    isRtl = props.isRtl,
    selected = props.selected,
    label = props.label,
    continuesEarlier = props.continuesEarlier,
    continuesLater = props.continuesLater,
    getters = props.getters,
    onClick = props.onClick,
    onDoubleClick = props.onDoubleClick,
    _props$components = props.components,
    Event = _props$components.event,
    EventWrapper = _props$components.eventWrapper
  var title = accessors.title(event)
  var tooltip = accessors.tooltip(event)
  var end = accessors.end(event)
  var start = accessors.start(event)
  var userProps = getters.eventProp(event, start, end, selected)
  var height = style.height,
    top = style.top,
    width = style.width,
    xOffset = style.xOffset
  var inner = [
    _react.default.createElement(
      'div',
      {
        key: '1',
        className: 'rbc-event-label',
      },
      label
    ),
    _react.default.createElement(
      'div',
      {
        key: '2',
        className: 'rbc-event-content',
      },
      Event
        ? _react.default.createElement(Event, {
            event: event,
            title: title,
          })
        : title
    ),
  ]
  return _react.default.createElement(
    EventWrapper,
    _extends(
      {
        type: 'time',
      },
      props
    ),
    _react.default.createElement(
      'div',
      {
        onClick: onClick,
        onDoubleClick: onDoubleClick,
        style: _objectSpread(
          {},
          userProps.style,
          ((_objectSpread2 = {
            top: ''.concat(top, '%'),
            height: ''.concat(height, '%'),
          }),
          _defineProperty(
            _objectSpread2,
            isRtl ? 'right' : 'left',
            ''.concat(Math.max(0, xOffset), '%')
          ),
          _defineProperty(_objectSpread2, 'width', ''.concat(width, '%')),
          _objectSpread2)
        ),
        title: tooltip
          ? (typeof label === 'string' ? label + ': ' : '') + tooltip
          : undefined,
        className: (0, _classnames.default)(
          'rbc-event',
          className,
          userProps.className,
          {
            'rbc-selected': selected,
            'rbc-event-continues-earlier': continuesEarlier,
            'rbc-event-continues-later': continuesLater,
          }
        ),
      },
      inner
    )
  )
}

var _default = TimeGridEvent
exports.default = _default
