'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _dates = _interopRequireDefault(require('../../utils/dates'))

var _reactDom = require('react-dom')

var _Selection = _interopRequireWildcard(require('../../Selection'))

var _TimeGridEvent = _interopRequireDefault(require('../../TimeGridEvent'))

var _common = require('./common')

var _NoopWrapper = _interopRequireDefault(require('../../NoopWrapper'))

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

var pointInColumn = function pointInColumn(bounds, _ref) {
  var x = _ref.x,
    y = _ref.y
  var left = bounds.left,
    right = bounds.right,
    top = bounds.top
  return x < right + 10 && x > left && y > top
}

var propTypes = {}

var EventContainerWrapper =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(EventContainerWrapper, _React$Component)

    function EventContainerWrapper() {
      var _getPrototypeOf2

      var _this

      _classCallCheck(this, EventContainerWrapper)

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(EventContainerWrapper)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleMove',
        function(point, boundaryBox) {
          var event = _this.context.draggable.dragAndDropAction.event
          var _this$props = _this.props,
            accessors = _this$props.accessors,
            slotMetrics = _this$props.slotMetrics

          if (!pointInColumn(boundaryBox, point)) {
            _this.reset()

            return
          }

          var currentSlot = slotMetrics.closestSlotFromPoint(
            {
              y: point.y - _this.eventOffsetTop,
              x: point.x,
            },
            boundaryBox
          )
          var eventStart = accessors.start(event)
          var eventEnd = accessors.end(event)

          var end = _dates.default.add(
            currentSlot,
            _dates.default.diff(eventStart, eventEnd, 'minutes'),
            'minutes'
          )

          _this.update(event, slotMetrics.getRange(currentSlot, end))
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        '_selectable',
        function() {
          var node = (0, _reactDom.findDOMNode)(
            _assertThisInitialized(_assertThisInitialized(_this))
          )
          var selector = (_this._selector = new _Selection.default(function() {
            return node.closest('.rbc-time-view')
          }))
          selector.on('beforeSelect', function(point) {
            var dragAndDropAction = _this.context.draggable.dragAndDropAction
            if (!dragAndDropAction.action) return false

            if (dragAndDropAction.action === 'resize') {
              return pointInColumn(
                (0, _Selection.getBoundsForNode)(node),
                point
              )
            }

            var eventNode = (0, _Selection.getEventNodeFromPoint)(node, point)
            if (!eventNode) return false
            _this.eventOffsetTop =
              point.y - (0, _Selection.getBoundsForNode)(eventNode).top
          })
          selector.on('selecting', function(box) {
            var bounds = (0, _Selection.getBoundsForNode)(node)
            var dragAndDropAction = _this.context.draggable.dragAndDropAction
            if (dragAndDropAction.action === 'move')
              _this.handleMove(box, bounds)
            if (dragAndDropAction.action === 'resize')
              _this.handleResize(box, bounds)
          })
          selector.on('selectStart', function() {
            return _this.context.draggable.onStart()
          })
          selector.on('select', function(point) {
            var bounds = (0, _Selection.getBoundsForNode)(node)
            if (!_this.state.event || !pointInColumn(bounds, point)) return

            _this.handleInteractionEnd()
          })
          selector.on('click', function() {
            return _this.context.draggable.onEnd(null)
          })
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleInteractionEnd',
        function() {
          var resource = _this.props.resource
          var event = _this.state.event

          _this.reset()

          _this.context.draggable.onEnd({
            start: event.start,
            end: event.end,
            resourceId: resource,
          })
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        '_teardownSelectable',
        function() {
          if (!_this._selector) return

          _this._selector.teardown()

          _this._selector = null
        }
      )

      _this.state = {}
      return _this
    }

    _createClass(EventContainerWrapper, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this._selectable()
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this._teardownSelectable()
        },
      },
      {
        key: 'reset',
        value: function reset() {
          if (this.state.event)
            this.setState({
              event: null,
              top: null,
              height: null,
            })
        },
      },
      {
        key: 'update',
        value: function update(event, _ref2) {
          var startDate = _ref2.startDate,
            endDate = _ref2.endDate,
            top = _ref2.top,
            height = _ref2.height
          var lastEvent = this.state.event

          if (
            lastEvent &&
            startDate === lastEvent.start &&
            endDate === lastEvent.end
          ) {
            return
          }

          this.setState({
            top: top,
            height: height,
            event: _objectSpread({}, event, {
              start: startDate,
              end: endDate,
            }),
          })
        },
      },
      {
        key: 'handleResize',
        value: function handleResize(point, boundaryBox) {
          var start, end
          var _this$props2 = this.props,
            accessors = _this$props2.accessors,
            slotMetrics = _this$props2.slotMetrics
          var _this$context$draggab = this.context.draggable.dragAndDropAction,
            event = _this$context$draggab.event,
            direction = _this$context$draggab.direction
          var currentSlot = slotMetrics.closestSlotFromPoint(point, boundaryBox)

          if (direction === 'UP') {
            end = accessors.end(event)
            start = _dates.default.min(
              currentSlot,
              slotMetrics.closestSlotFromDate(end, -1)
            )
          } else if (direction === 'DOWN') {
            start = accessors.start(event)
            end = _dates.default.max(
              currentSlot,
              slotMetrics.closestSlotFromDate(start)
            )
          }

          this.update(event, slotMetrics.getRange(start, end))
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props3 = this.props,
            children = _this$props3.children,
            accessors = _this$props3.accessors,
            components = _this$props3.components,
            getters = _this$props3.getters,
            slotMetrics = _this$props3.slotMetrics,
            localizer = _this$props3.localizer
          var _this$state = this.state,
            event = _this$state.event,
            top = _this$state.top,
            height = _this$state.height
          if (!event) return children
          var events = children.props.children
          var start = event.start,
            end = event.end
          var label
          var format = 'eventTimeRangeFormat'
          var startsBeforeDay = slotMetrics.startsBeforeDay(start)
          var startsAfterDay = slotMetrics.startsAfterDay(end)
          if (startsBeforeDay) format = 'eventTimeRangeEndFormat'
          else if (startsAfterDay) format = 'eventTimeRangeStartFormat'
          if (startsBeforeDay && startsAfterDay)
            label = localizer.messages.allDay
          else
            label = localizer.format(
              {
                start: start,
                end: end,
              },
              format
            )
          return _react.default.cloneElement(children, {
            children: _react.default.createElement(
              _react.default.Fragment,
              null,
              events,
              event &&
                _react.default.createElement(_TimeGridEvent.default, {
                  event: event,
                  label: label,
                  className: 'rbc-addons-dnd-drag-preview',
                  style: {
                    top: top,
                    height: height,
                    width: 100,
                  },
                  getters: getters,
                  components: _objectSpread({}, components, {
                    eventWrapper: _NoopWrapper.default,
                  }),
                  accessors: _objectSpread(
                    {},
                    accessors,
                    _common.dragAccessors
                  ),
                  continuesEarlier: startsBeforeDay,
                  continuesLater: startsAfterDay,
                })
            ),
          })
        },
      },
    ])

    return EventContainerWrapper
  })(_react.default.Component)

_defineProperty(EventContainerWrapper, 'propTypes', {
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  slotMetrics: _propTypes.default.object.isRequired,
  resource: _propTypes.default.any,
})

_defineProperty(EventContainerWrapper, 'contextTypes', {
  draggable: _propTypes.default.shape({
    onStart: _propTypes.default.func,
    onEnd: _propTypes.default.func,
    onBeginAction: _propTypes.default.func,
    dragAndDropAction: _propTypes.default.object,
  }),
})

EventContainerWrapper.propTypes = propTypes
var _default = EventContainerWrapper
exports.default = _default
