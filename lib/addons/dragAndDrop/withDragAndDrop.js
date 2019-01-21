'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = withDragAndDrop

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _classnames = _interopRequireDefault(require('classnames'))

var _propTypes2 = require('../../utils/propTypes')

var _EventWrapper = _interopRequireDefault(require('./EventWrapper'))

var _EventContainerWrapper = _interopRequireDefault(
  require('./EventContainerWrapper')
)

var _WeekWrapper = _interopRequireDefault(require('./WeekWrapper'))

var _common = require('./common')

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

/**
 * Creates a higher-order component (HOC) supporting drag & drop and optionally resizing
 * of events:
 *
 * ```js
 *    import Calendar from 'react-big-calendar'
 *    import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
 *    export default withDragAndDrop(Calendar)
 * ```
 * (you can optionally pass any dnd backend as an optional second argument to `withDragAndDrop`.
 * It defaults to `react-dnd-html5-backend` which you should probably include in
 * your project if using this default).
 *
 * Set `resizable` to true in your calendar if you want events to be resizable.
 *
 * The HOC adds `onEventDrop` and `onEventResize` callback properties if the events are
 * moved or resized. They are called with these signatures:
 *
 * ```js
 *    function onEventDrop({ event, start, end, allDay }) {...}
 *    function onEventResize(type, { event, start, end, allDay }) {...}  // type is always 'drop'
 * ```
 *
 * Moving and resizing of events has some subtlety which one should be aware of.
 *
 * In some situations, non-allDay events are displayed in "row" format where they
 * are rendered horizontally. This is the case for ALL events in a month view. It
 * is also occurs with multi-day events in a day or week view (unless `showMultiDayTimes`
 * is set).
 *
 * When dropping or resizing non-allDay events into a the header area or when
 * resizing them horizontally because they are displayed in row format, their
 * times are preserved, only their date is changed.
 *
 * If you care about these corner cases, you can examine the `allDay` param suppled
 * in the callback to determine how the user dropped or resized the event.
 *
 * @param {*} Calendar
 * @param {*} backend
 */
function withDragAndDrop(Calendar) {
  var DragAndDropCalendar =
    /*#__PURE__*/
    (function(_React$Component) {
      _inherits(DragAndDropCalendar, _React$Component)

      function DragAndDropCalendar() {
        var _getPrototypeOf2

        var _this

        _classCallCheck(this, DragAndDropCalendar)

        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key]
        }

        _this = _possibleConstructorReturn(
          this,
          (_getPrototypeOf2 = _getPrototypeOf(DragAndDropCalendar)).call.apply(
            _getPrototypeOf2,
            [this].concat(args)
          )
        )

        _defineProperty(
          _assertThisInitialized(_assertThisInitialized(_this)),
          'handleBeginAction',
          function(event, action, direction) {
            _this.setState({
              event: event,
              action: action,
              direction: direction,
            })
          }
        )

        _defineProperty(
          _assertThisInitialized(_assertThisInitialized(_this)),
          'handleInteractionStart',
          function() {
            if (_this.state.interacting === false)
              _this.setState({
                interacting: true,
              })
          }
        )

        _defineProperty(
          _assertThisInitialized(_assertThisInitialized(_this)),
          'handleInteractionEnd',
          function(interactionInfo) {
            var _this$state = _this.state,
              action = _this$state.action,
              event = _this$state.event

            _this.setState({
              action: null,
              event: null,
              interacting: false,
              direction: null,
            })

            if (interactionInfo == null) return
            interactionInfo.event = event
            if (action === 'move') _this.props.onEventDrop(interactionInfo)
            if (action === 'resize') _this.props.onEventResize(interactionInfo)
          }
        )

        var components = _this.props.components
        _this.components = (0, _common.mergeComponents)(components, {
          eventWrapper: _EventWrapper.default,
          eventContainerWrapper: _EventContainerWrapper.default,
          weekWrapper: _WeekWrapper.default,
        })
        _this.state = {
          interacting: false,
        }
        return _this
      }

      _createClass(DragAndDropCalendar, [
        {
          key: 'getChildContext',
          value: function getChildContext() {
            return {
              draggable: {
                onStart: this.handleInteractionStart,
                onEnd: this.handleInteractionEnd,
                onBeginAction: this.handleBeginAction,
                draggableAccessor: this.props.draggableAccessor,
                resizableAccessor: this.props.resizableAccessor,
                dragAndDropAction: this.state,
              },
            }
          },
        },
        {
          key: 'render',
          value: function render() {
            var _this$props = this.props,
              selectable = _this$props.selectable,
              props = _objectWithoutProperties(_this$props, ['selectable'])

            var interacting = this.state.interacting
            delete props.onEventDrop
            delete props.onEventResize
            props.selectable = selectable ? 'ignoreEvents' : false
            props.className = (0, _classnames.default)(
              props.className,
              'rbc-addons-dnd',
              !!interacting && 'rbc-addons-dnd-is-dragging'
            )
            return _react.default.createElement(
              Calendar,
              _extends({}, props, {
                components: this.components,
              })
            )
          },
        },
      ])

      return DragAndDropCalendar
    })(_react.default.Component)

  _defineProperty(DragAndDropCalendar, 'propTypes', {
    onEventDrop: _propTypes.default.func,
    onEventResize: _propTypes.default.func,
    draggableAccessor: _propTypes2.accessor,
    resizableAccessor: _propTypes2.accessor,
    selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
    resizable: _propTypes.default.bool,
    components: _propTypes.default.object,
    step: _propTypes.default.number,
  })

  _defineProperty(DragAndDropCalendar, 'defaultProps', {
    // TODO: pick these up from Calendar.defaultProps
    components: {},
    draggableAccessor: null,
    resizableAccessor: null,
    step: 30,
  })

  _defineProperty(DragAndDropCalendar, 'contextTypes', {
    dragDropManager: _propTypes.default.object,
  })

  _defineProperty(DragAndDropCalendar, 'childContextTypes', {
    draggable: _propTypes.default.shape({
      onStart: _propTypes.default.func,
      onEnd: _propTypes.default.func,
      onBeginAction: _propTypes.default.func,
      draggableAccessor: _propTypes2.accessor,
      resizableAccessor: _propTypes2.accessor,
      dragAndDropAction: _propTypes.default.object,
    }),
  })

  return DragAndDropCalendar
}
