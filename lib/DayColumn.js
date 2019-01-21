'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _reactDom = require('react-dom')

var _classnames = _interopRequireDefault(require('classnames'))

var _Selection = _interopRequireWildcard(require('./Selection'))

var _dates = _interopRequireDefault(require('./utils/dates'))

var TimeSlotUtils = _interopRequireWildcard(require('./utils/TimeSlots'))

var _selection = require('./utils/selection')

var _helpers = require('./utils/helpers')

var DayEventLayout = _interopRequireWildcard(require('./utils/DayEventLayout'))

var _TimeSlotGroup = _interopRequireDefault(require('./TimeSlotGroup'))

var _TimeGridEvent = _interopRequireDefault(require('./TimeGridEvent'))

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

var DayColumn =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(DayColumn, _React$Component)

    function DayColumn() {
      var _getPrototypeOf2

      var _this

      _classCallCheck(this, DayColumn)

      for (
        var _len = arguments.length, _args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        _args[_key] = arguments[_key]
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(DayColumn)).call.apply(
          _getPrototypeOf2,
          [this].concat(_args)
        )
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'state',
        {
          selecting: false,
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'renderEvents',
        function() {
          var _this$props = _this.props,
            events = _this$props.events,
            isRtl = _this$props.rtl,
            selected = _this$props.selected,
            accessors = _this$props.accessors,
            localizer = _this$props.localizer,
            getters = _this$props.getters,
            components = _this$props.components,
            step = _this$props.step,
            timeslots = _this$props.timeslots

          var _assertThisInitialize = _assertThisInitialized(
              _assertThisInitialized(_this)
            ),
            slotMetrics = _assertThisInitialize.slotMetrics

          var messages = localizer.messages
          var styledEvents = DayEventLayout.getStyledEvents({
            events: events,
            accessors: accessors,
            slotMetrics: slotMetrics,
            minimumStartDifference: Math.ceil((step * timeslots) / 2),
          })
          return styledEvents.map(function(_ref, idx) {
            var _React$createElement

            var event = _ref.event,
              style = _ref.style
            var end = accessors.end(event)
            var start = accessors.start(event)
            var format = 'eventTimeRangeFormat'
            var label
            var startsBeforeDay = slotMetrics.startsBeforeDay(start)
            var startsAfterDay = slotMetrics.startsAfterDay(end)
            if (startsBeforeDay) format = 'eventTimeRangeEndFormat'
            else if (startsAfterDay) format = 'eventTimeRangeStartFormat'
            if (startsBeforeDay && startsAfterDay) label = messages.allDay
            else
              label = localizer.format(
                {
                  start: start,
                  end: end,
                },
                format
              )
            var continuesEarlier =
              startsBeforeDay || slotMetrics.startsBefore(start)
            var continuesLater = startsAfterDay || slotMetrics.startsAfter(end)
            return _react.default.createElement(
              _TimeGridEvent.default,
              ((_React$createElement = {
                style: style,
                event: event,
                label: label,
                key: 'evt_' + idx,
                getters: getters,
                isRtl: isRtl,
              }),
              _defineProperty(_React$createElement, 'getters', getters),
              _defineProperty(_React$createElement, 'components', components),
              _defineProperty(
                _React$createElement,
                'continuesEarlier',
                continuesEarlier
              ),
              _defineProperty(
                _React$createElement,
                'continuesLater',
                continuesLater
              ),
              _defineProperty(_React$createElement, 'accessors', accessors),
              _defineProperty(
                _React$createElement,
                'selected',
                (0, _selection.isSelected)(event, selected)
              ),
              _defineProperty(_React$createElement, 'onClick', function onClick(
                e
              ) {
                return _this._select(event, e)
              }),
              _defineProperty(
                _React$createElement,
                'onDoubleClick',
                function onDoubleClick(e) {
                  return _this._doubleClick(event, e)
                }
              ),
              _React$createElement)
            )
          })
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        '_selectable',
        function() {
          var node = (0, _reactDom.findDOMNode)(
            _assertThisInitialized(_assertThisInitialized(_this))
          )
          var selector = (_this._selector = new _Selection.default(
            function() {
              return (0, _reactDom.findDOMNode)(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
            },
            {
              longPressThreshold: _this.props.longPressThreshold,
            }
          ))

          var maybeSelect = function maybeSelect(box) {
            var onSelecting = _this.props.onSelecting
            var current = _this.state || {}
            var state = selectionState(box)
            var start = state.startDate,
              end = state.endDate

            if (onSelecting) {
              if (
                (_dates.default.eq(current.startDate, start, 'minutes') &&
                  _dates.default.eq(current.endDate, end, 'minutes')) ||
                onSelecting({
                  start: start,
                  end: end,
                }) === false
              )
                return
            }

            if (
              _this.state.start !== state.start ||
              _this.state.end !== state.end ||
              _this.state.selecting !== state.selecting
            ) {
              _this.setState(state)
            }
          }

          var selectionState = function selectionState(point) {
            var currentSlot = _this.slotMetrics.closestSlotFromPoint(
              point,
              (0, _Selection.getBoundsForNode)(node)
            )

            if (!_this.state.selecting) _this._initialSlot = currentSlot
            var initialSlot = _this._initialSlot
            if (initialSlot === currentSlot)
              currentSlot = _this.slotMetrics.nextSlot(initialSlot)

            var selectRange = _this.slotMetrics.getRange(
              _dates.default.min(initialSlot, currentSlot),
              _dates.default.max(initialSlot, currentSlot)
            )

            return _objectSpread({}, selectRange, {
              selecting: true,
              top: ''.concat(selectRange.top, '%'),
              height: ''.concat(selectRange.height, '%'),
            })
          }

          var selectorClicksHandler = function selectorClicksHandler(
            box,
            actionType
          ) {
            if (
              !(0, _Selection.isEvent)(
                (0, _reactDom.findDOMNode)(
                  _assertThisInitialized(_assertThisInitialized(_this))
                ),
                box
              )
            ) {
              var _selectionState = selectionState(box),
                startDate = _selectionState.startDate,
                endDate = _selectionState.endDate

              _this._selectSlot({
                startDate: startDate,
                endDate: endDate,
                action: actionType,
                box: box,
              })
            }

            _this.setState({
              selecting: false,
            })
          }

          selector.on('selecting', maybeSelect)
          selector.on('selectStart', maybeSelect)
          selector.on('beforeSelect', function(box) {
            if (_this.props.selectable !== 'ignoreEvents') return
            return !(0,
            _Selection.isEvent)((0, _reactDom.findDOMNode)(_assertThisInitialized(_assertThisInitialized(_this))), box)
          })
          selector.on('click', function(box) {
            return selectorClicksHandler(box, 'click')
          })
          selector.on('doubleClick', function(box) {
            return selectorClicksHandler(box, 'doubleClick')
          })
          selector.on('select', function(bounds) {
            if (_this.state.selecting) {
              _this._selectSlot(
                _objectSpread({}, _this.state, {
                  action: 'select',
                  bounds: bounds,
                })
              )

              _this.setState({
                selecting: false,
              })
            }
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

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        '_selectSlot',
        function(_ref2) {
          var startDate = _ref2.startDate,
            endDate = _ref2.endDate,
            action = _ref2.action,
            bounds = _ref2.bounds,
            box = _ref2.box
          var current = startDate,
            slots = []

          while (_dates.default.lte(current, endDate)) {
            slots.push(current)
            current = _dates.default.add(current, _this.props.step, 'minutes')
          }

          ;(0, _helpers.notify)(_this.props.onSelectSlot, {
            slots: slots,
            start: startDate,
            end: endDate,
            resourceId: _this.props.resource,
            action: action,
            bounds: bounds,
            box: box,
          })
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        '_select',
        function() {
          for (
            var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
            _key2 < _len2;
            _key2++
          ) {
            args[_key2] = arguments[_key2]
          }

          ;(0, _helpers.notify)(_this.props.onSelectEvent, args)
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        '_doubleClick',
        function() {
          for (
            var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
            _key3 < _len3;
            _key3++
          ) {
            args[_key3] = arguments[_key3]
          }

          ;(0, _helpers.notify)(_this.props.onDoubleClickEvent, args)
        }
      )

      _this.slotMetrics = TimeSlotUtils.getSlotMetrics(_this.props)
      return _this
    }

    _createClass(DayColumn, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.props.selectable && this._selectable()

          if (this.props.isNow) {
            this.positionTimeIndicator()
            this.triggerTimeIndicatorUpdate()
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this._teardownSelectable()

          window.clearTimeout(this._timeIndicatorTimeout)
        },
      },
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (nextProps.selectable && !this.props.selectable) this._selectable()
          if (!nextProps.selectable && this.props.selectable)
            this._teardownSelectable()
          this.slotMetrics = this.slotMetrics.update(nextProps)
        },
      },
      {
        key: 'triggerTimeIndicatorUpdate',
        value: function triggerTimeIndicatorUpdate() {
          var _this2 = this

          // Update the position of the time indicator every minute
          this._timeIndicatorTimeout = window.setTimeout(function() {
            _this2.positionTimeIndicator()

            _this2.triggerTimeIndicatorUpdate()
          }, 60000)
        },
      },
      {
        key: 'positionTimeIndicator',
        value: function positionTimeIndicator() {
          var _this$props2 = this.props,
            min = _this$props2.min,
            max = _this$props2.max,
            getNow = _this$props2.getNow
          var current = getNow()
          var timeIndicator = this.refs.timeIndicator

          if (current >= min && current <= max) {
            var _this$slotMetrics$get = this.slotMetrics.getRange(
                current,
                current
              ),
              top = _this$slotMetrics$get.top

            timeIndicator.style.top = ''.concat(top, '%')
          }
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props3 = this.props,
            max = _this$props3.max,
            rtl = _this$props3.rtl,
            isNow = _this$props3.isNow,
            resource = _this$props3.resource,
            accessors = _this$props3.accessors,
            localizer = _this$props3.localizer,
            _this$props3$getters = _this$props3.getters,
            dayProp = _this$props3$getters.dayProp,
            getters = _objectWithoutProperties(_this$props3$getters, [
              'dayProp',
            ]),
            _this$props3$componen = _this$props3.components,
            EventContainer = _this$props3$componen.eventContainerWrapper,
            components = _objectWithoutProperties(_this$props3$componen, [
              'eventContainerWrapper',
            ])

          var slotMetrics = this.slotMetrics
          var _this$state = this.state,
            selecting = _this$state.selecting,
            top = _this$state.top,
            height = _this$state.height,
            startDate = _this$state.startDate,
            endDate = _this$state.endDate
          var selectDates = {
            start: startDate,
            end: endDate,
          }

          var _dayProp = dayProp(max),
            className = _dayProp.className,
            style = _dayProp.style

          return _react.default.createElement(
            'div',
            {
              style: style,
              className: (0, _classnames.default)(
                className,
                'rbc-day-slot',
                'rbc-time-column',
                isNow && 'rbc-now',
                isNow && 'rbc-today', // WHY
                selecting && 'rbc-slot-selecting'
              ),
            },
            slotMetrics.groups.map(function(grp, idx) {
              return _react.default.createElement(_TimeSlotGroup.default, {
                key: idx,
                group: grp,
                resource: resource,
                getters: getters,
                components: components,
              })
            }),
            _react.default.createElement(
              EventContainer,
              {
                localizer: localizer,
                resource: resource,
                accessors: accessors,
                getters: getters,
                components: components,
                slotMetrics: slotMetrics,
              },
              _react.default.createElement(
                'div',
                {
                  className: (0, _classnames.default)(
                    'rbc-events-container',
                    rtl && 'rtl'
                  ),
                },
                this.renderEvents()
              )
            ),
            selecting &&
              _react.default.createElement(
                'div',
                {
                  className: 'rbc-slot-selection',
                  style: {
                    top: top,
                    height: height,
                  },
                },
                _react.default.createElement(
                  'span',
                  null,
                  localizer.format(selectDates, 'selectRangeFormat')
                )
              ),
            isNow &&
              _react.default.createElement('div', {
                ref: 'timeIndicator',
                className: 'rbc-current-time-indicator',
              })
          )
        },
      },
    ])

    return DayColumn
  })(_react.default.Component)

_defineProperty(DayColumn, 'propTypes', {
  events: _propTypes.default.array.isRequired,
  step: _propTypes.default.number.isRequired,
  date: _propTypes.default.instanceOf(Date).isRequired,
  min: _propTypes.default.instanceOf(Date).isRequired,
  max: _propTypes.default.instanceOf(Date).isRequired,
  getNow: _propTypes.default.func.isRequired,
  isNow: _propTypes.default.bool,
  rtl: _propTypes.default.bool,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  showMultiDayTimes: _propTypes.default.bool,
  culture: _propTypes.default.string,
  timeslots: _propTypes.default.number,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  eventOffset: _propTypes.default.number,
  longPressThreshold: _propTypes.default.number,
  onSelecting: _propTypes.default.func,
  onSelectSlot: _propTypes.default.func.isRequired,
  onSelectEvent: _propTypes.default.func.isRequired,
  onDoubleClickEvent: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  dragThroughEvents: _propTypes.default.bool,
  resource: _propTypes.default.any,
})

_defineProperty(DayColumn, 'defaultProps', {
  dragThroughEvents: true,
  timeslots: 2,
})

var _default = DayColumn
exports.default = _default
