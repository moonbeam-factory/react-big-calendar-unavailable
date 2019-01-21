'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _dates = _interopRequireDefault(require('../../utils/dates'))

var _selection = require('../../utils/selection')

var _reactDom = require('react-dom')

var _eventLevels = require('../../utils/eventLevels')

var _Selection = _interopRequireWildcard(require('../../Selection'))

var _EventRow = _interopRequireDefault(require('../../EventRow'))

var _common = require('./common')

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

var propTypes = {}

var eventTimes = function eventTimes(event, accessors) {
  var start = accessors.start(event)
  var end = accessors.end(event)
  var isZeroDuration =
    _dates.default.eq(start, end, 'minutes') && start.getMinutes() === 0 // make zero duration midnight events at least one day long

  if (isZeroDuration) end = _dates.default.add(end, 1, 'day')
  return {
    start: start,
    end: end,
  }
}

var WeekWrapper =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(WeekWrapper, _React$Component)

    function WeekWrapper() {
      var _getPrototypeOf2

      var _this

      _classCallCheck(this, WeekWrapper)

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(WeekWrapper)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleMove',
        function(_ref, node) {
          var x = _ref.x,
            y = _ref.y
          var event = _this.context.draggable.dragAndDropAction.event
          var metrics = _this.props.slotMetrics
          var accessors = _this.props.accessors
          if (!event) return
          var rowBox = (0, _Selection.getBoundsForNode)(node)

          if (
            !(0, _selection.pointInBox)(rowBox, {
              x: x,
              y: y,
            })
          ) {
            _this.reset()

            return
          } // Make sure to maintain the time of the start date while moving it to the new slot

          var start = _dates.default.merge(
            metrics.getDateForSlot(
              (0, _selection.getSlotAtX)(rowBox, x, false, metrics.slots)
            ),
            accessors.start(event)
          )

          var end = _dates.default.add(
            start,
            _dates.default.diff(
              accessors.start(event),
              accessors.end(event),
              'minutes'
            ),
            'minutes'
          )

          _this.update(event, start, end)
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        '_selectable',
        function() {
          var node = (0, _reactDom.findDOMNode)(
            _assertThisInitialized(_assertThisInitialized(_this))
          ).closest('.rbc-month-row, .rbc-allday-cell')
          var container = node.closest('.rbc-month-view, .rbc-time-view')
          var selector = (_this._selector = new _Selection.default(function() {
            return container
          }))
          selector.on('beforeSelect', function(point) {
            var isAllDay = _this.props.isAllDay
            var action = _this.context.draggable.dragAndDropAction.action
            return (
              action === 'move' ||
              (action === 'resize' &&
                (!isAllDay ||
                  (0, _selection.pointInBox)(
                    (0, _Selection.getBoundsForNode)(node),
                    point
                  )))
            )
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
            if (
              !_this.state.segment ||
              !(0, _selection.pointInBox)(bounds, point)
            )
              return

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
          var _this$props = _this.props,
            resourceId = _this$props.resourceId,
            isAllDay = _this$props.isAllDay
          var event = _this.state.segment.event

          _this.reset()

          _this.context.draggable.onEnd({
            start: event.start,
            end: event.end,
            resourceId: resourceId,
            isAllDay: isAllDay,
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

    _createClass(WeekWrapper, [
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
          if (this.state.segment)
            this.setState({
              segment: null,
            })
        },
      },
      {
        key: 'update',
        value: function update(event, start, end) {
          var segment = (0, _eventLevels.eventSegments)(
            _objectSpread({}, event, {
              end: end,
              start: start,
              __isPreview: true,
            }),
            this.props.slotMetrics.range,
            _common.dragAccessors
          )
          var lastSegment = this.state.segment

          if (
            lastSegment &&
            segment.span === lastSegment.span &&
            segment.left === lastSegment.left &&
            segment.right === lastSegment.right
          ) {
            return
          }

          this.setState({
            segment: segment,
          })
        },
      },
      {
        key: 'handleResize',
        value: function handleResize(point, node) {
          var _this$context$draggab = this.context.draggable.dragAndDropAction,
            event = _this$context$draggab.event,
            direction = _this$context$draggab.direction
          var _this$props2 = this.props,
            accessors = _this$props2.accessors,
            metrics = _this$props2.slotMetrics

          var _eventTimes = eventTimes(event, accessors),
            start = _eventTimes.start,
            end = _eventTimes.end

          var rowBox = (0, _Selection.getBoundsForNode)(node)
          var cursorInRow = (0, _selection.pointInBox)(rowBox, point)

          if (direction === 'RIGHT') {
            if (cursorInRow) {
              if (metrics.last < start) return this.reset() // add min

              end = _dates.default.add(
                metrics.getDateForSlot(
                  (0, _selection.getSlotAtX)(
                    rowBox,
                    point.x,
                    false,
                    metrics.slots
                  )
                ),
                1,
                'day'
              )
            } else if (
              _dates.default.inRange(start, metrics.first, metrics.last) ||
              (rowBox.bottom < point.y && +metrics.first > +start)
            ) {
              end = _dates.default.add(metrics.last, 1, 'milliseconds')
            } else {
              this.setState({
                segment: null,
              })
              return
            }

            end = _dates.default.max(end, _dates.default.add(start, 1, 'day'))
          } else if (direction === 'LEFT') {
            // inbetween Row
            if (cursorInRow) {
              if (metrics.first > end) return this.reset()
              start = metrics.getDateForSlot(
                (0, _selection.getSlotAtX)(
                  rowBox,
                  point.x,
                  false,
                  metrics.slots
                )
              )
            } else if (
              _dates.default.inRange(end, metrics.first, metrics.last) ||
              (rowBox.top > point.y && +metrics.last < +end)
            ) {
              start = _dates.default.add(metrics.first, -1, 'milliseconds')
            } else {
              this.reset()
              return
            }

            start = _dates.default.min(
              _dates.default.add(end, -1, 'day'),
              start
            )
          }

          this.update(event, start, end)
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props3 = this.props,
            children = _this$props3.children,
            accessors = _this$props3.accessors
          var segment = this.state.segment
          return _react.default.createElement(
            'div',
            {
              className: 'rbc-addons-dnd-row-body',
            },
            children,
            segment &&
              _react.default.createElement(
                _EventRow.default,
                _extends({}, this.props, {
                  selected: null,
                  className: 'rbc-addons-dnd-drag-row',
                  segments: [segment],
                  accessors: _objectSpread(
                    {},
                    accessors,
                    _common.dragAccessors
                  ),
                })
              )
          )
        },
      },
    ])

    return WeekWrapper
  })(_react.default.Component)

_defineProperty(WeekWrapper, 'propTypes', {
  isAllDay: _propTypes.default.bool,
  slotMetrics: _propTypes.default.object.isRequired,
  accessors: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  resourceId: _propTypes.default.any,
})

_defineProperty(WeekWrapper, 'contextTypes', {
  draggable: _propTypes.default.shape({
    onStart: _propTypes.default.func,
    onEnd: _propTypes.default.func,
    dragAndDropAction: _propTypes.default.object,
    onBeginAction: _propTypes.default.func,
  }),
})

WeekWrapper.propTypes = propTypes
var _default = WeekWrapper
exports.default = _default
