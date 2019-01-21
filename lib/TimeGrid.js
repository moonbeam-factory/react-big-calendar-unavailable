'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _classnames = _interopRequireDefault(require('classnames'))

var _requestAnimationFrame = _interopRequireDefault(
  require('dom-helpers/util/requestAnimationFrame')
)

var _react = _interopRequireWildcard(require('react'))

var _reactDom = require('react-dom')

var _dates = _interopRequireDefault(require('./utils/dates'))

var _DayColumn = _interopRequireDefault(require('./DayColumn'))

var _TimeGutter = _interopRequireDefault(require('./TimeGutter'))

var _width = _interopRequireDefault(require('dom-helpers/query/width'))

var _TimeGridHeader = _interopRequireDefault(require('./TimeGridHeader'))

var _helpers = require('./utils/helpers')

var _eventLevels = require('./utils/eventLevels')

var _Resources = _interopRequireDefault(require('./utils/Resources'))

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

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  )
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}

function _iterableToArrayLimit(arr, i) {
  var _arr = []
  var _n = true
  var _d = false
  var _e = undefined
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value)
      if (i && _arr.length === i) break
    }
  } catch (err) {
    _d = true
    _e = err
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']()
    } finally {
      if (_d) throw _e
    }
  }
  return _arr
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr
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

var TimeGrid =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(TimeGrid, _Component)

    function TimeGrid(props) {
      var _this

      _classCallCheck(this, TimeGrid)

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(TimeGrid).call(this, props)
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleScroll',
        function(e) {
          if (_this.scrollRef.current) {
            _this.scrollRef.current.scrollLeft = e.target.scrollLeft
          }
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleResize',
        function() {
          _requestAnimationFrame.default.cancel(_this.rafHandle)

          _this.rafHandle = (0, _requestAnimationFrame.default)(
            _this.checkOverflow
          )
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'gutterRef',
        function(ref) {
          _this.gutter = ref && (0, _reactDom.findDOMNode)(ref)
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleSelectAlldayEvent',
        function() {
          //cancel any pending selections so only the event click goes through.
          _this.clearSelection()

          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key]
          }

          ;(0, _helpers.notify)(_this.props.onSelectEvent, args)
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleSelectAllDaySlot',
        function(slots, slotInfo) {
          var onSelectSlot = _this.props.onSelectSlot
          ;(0, _helpers.notify)(onSelectSlot, {
            slots: slots,
            start: slots[0],
            end: slots[slots.length - 1],
            action: slotInfo.action,
          })
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'checkOverflow',
        function() {
          if (_this._updatingOverflow) return
          var isOverflowing =
            _this.refs.content.scrollHeight > _this.refs.content.clientHeight

          if (_this.state.isOverflowing !== isOverflowing) {
            _this._updatingOverflow = true

            _this.setState(
              {
                isOverflowing: isOverflowing,
              },
              function() {
                _this._updatingOverflow = false
              }
            )
          }
        }
      )

      _this.state = {
        gutterWidth: undefined,
        isOverflowing: null,
      }
      _this.scrollRef = _react.default.createRef()
      _this.resources = (0, _Resources.default)(
        props.resources,
        props.accessors
      )
      return _this
    }

    _createClass(TimeGrid, [
      {
        key: 'componentWillMount',
        value: function componentWillMount() {
          this.calculateScroll()
        },
      },
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.checkOverflow()

          if (this.props.width == null) {
            this.measureGutter()
          }

          this.applyScroll()
          window.addEventListener('resize', this.handleResize)
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          window.removeEventListener('resize', this.handleResize)

          _requestAnimationFrame.default.cancel(this.rafHandle)
        },
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          if (this.props.width == null) {
            this.measureGutter()
          }

          this.applyScroll() //this.checkOverflow()
        },
      },
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          var _this$props = this.props,
            range = _this$props.range,
            scrollToTime = _this$props.scrollToTime // When paginating, reset scroll

          if (
            !_dates.default.eq(nextProps.range[0], range[0], 'minute') ||
            !_dates.default.eq(nextProps.scrollToTime, scrollToTime, 'minute')
          ) {
            this.calculateScroll(nextProps)
          }
        },
      },
      {
        key: 'renderEvents',
        value: function renderEvents(range, events, now) {
          var _this2 = this

          var _this$props2 = this.props,
            min = _this$props2.min,
            max = _this$props2.max,
            components = _this$props2.components,
            accessors = _this$props2.accessors,
            localizer = _this$props2.localizer
          var groupedEvents = this.resources.groupEvents(events)
          return this.resources.map(function(_ref, i) {
            var _ref2 = _slicedToArray(_ref, 2),
              id = _ref2[0],
              resource = _ref2[1]

            return range.map(function(date, jj) {
              var daysEvents = (groupedEvents.get(id) || []).filter(function(
                event
              ) {
                return _dates.default.inRange(
                  date,
                  accessors.start(event),
                  accessors.end(event),
                  'day'
                )
              })
              return _react.default.createElement(
                _DayColumn.default,
                _extends({}, _this2.props, {
                  localizer: localizer,
                  min: _dates.default.merge(date, min),
                  max: _dates.default.merge(date, max),
                  resource: resource && id,
                  components: components,
                  isNow: _dates.default.eq(date, now, 'day'),
                  key: i + '-' + jj,
                  date: date,
                  events: daysEvents,
                })
              )
            })
          })
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props3 = this.props,
            events = _this$props3.events,
            range = _this$props3.range,
            width = _this$props3.width,
            selected = _this$props3.selected,
            getNow = _this$props3.getNow,
            resources = _this$props3.resources,
            components = _this$props3.components,
            accessors = _this$props3.accessors,
            getters = _this$props3.getters,
            localizer = _this$props3.localizer,
            min = _this$props3.min,
            max = _this$props3.max,
            showMultiDayTimes = _this$props3.showMultiDayTimes,
            longPressThreshold = _this$props3.longPressThreshold
          width = width || this.state.gutterWidth
          var start = range[0],
            end = range[range.length - 1]
          this.slots = range.length
          var allDayEvents = [],
            rangeEvents = []
          events.forEach(function(event) {
            if ((0, _eventLevels.inRange)(event, start, end, accessors)) {
              var eStart = accessors.start(event),
                eEnd = accessors.end(event)

              if (
                accessors.allDay(event) ||
                (_dates.default.isJustDate(eStart) &&
                  _dates.default.isJustDate(eEnd)) ||
                (!showMultiDayTimes && !_dates.default.eq(eStart, eEnd, 'day'))
              ) {
                allDayEvents.push(event)
              } else {
                rangeEvents.push(event)
              }
            }
          })
          allDayEvents.sort(function(a, b) {
            return (0, _eventLevels.sortEvents)(a, b, accessors)
          })
          return _react.default.createElement(
            'div',
            {
              className: (0, _classnames.default)(
                'rbc-time-view',
                resources && 'rbc-time-view-resources'
              ),
            },
            _react.default.createElement(_TimeGridHeader.default, {
              range: range,
              events: allDayEvents,
              width: width,
              getNow: getNow,
              localizer: localizer,
              selected: selected,
              resources: this.resources,
              selectable: this.props.selectable,
              accessors: accessors,
              getters: getters,
              components: components,
              scrollRef: this.scrollRef,
              isOverflowing: this.state.isOverflowing,
              longPressThreshold: longPressThreshold,
              onSelectSlot: this.handleSelectAllDaySlot,
              onSelectEvent: this.handleSelectAlldayEvent,
              onDoubleClickEvent: this.props.onDoubleClickEvent,
              onDrillDown: this.props.onDrillDown,
              getDrilldownView: this.props.getDrilldownView,
            }),
            _react.default.createElement(
              'div',
              {
                ref: 'content',
                className: 'rbc-time-content',
                onScroll: this.handleScroll,
              },
              _react.default.createElement(_TimeGutter.default, {
                date: start,
                ref: this.gutterRef,
                localizer: localizer,
                min: _dates.default.merge(start, min),
                max: _dates.default.merge(start, max),
                step: this.props.step,
                getNow: this.props.getNow,
                timeslots: this.props.timeslots,
                components: components,
                className: 'rbc-time-gutter',
              }),
              this.renderEvents(range, rangeEvents, getNow())
            )
          )
        },
      },
      {
        key: 'clearSelection',
        value: function clearSelection() {
          clearTimeout(this._selectTimer)
          this._pendingSelection = []
        },
      },
      {
        key: 'measureGutter',
        value: function measureGutter() {
          var width = (0, _width.default)(this.gutter)

          if (width && this.state.gutterWidth !== width) {
            this.setState({
              gutterWidth: width,
            })
          }
        },
      },
      {
        key: 'applyScroll',
        value: function applyScroll() {
          if (this._scrollRatio) {
            var content = this.refs.content
            content.scrollTop = content.scrollHeight * this._scrollRatio // Only do this once

            this._scrollRatio = null
          }
        },
      },
      {
        key: 'calculateScroll',
        value: function calculateScroll() {
          var props =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.props
          var min = props.min,
            max = props.max,
            scrollToTime = props.scrollToTime

          var diffMillis =
            scrollToTime - _dates.default.startOf(scrollToTime, 'day')

          var totalMillis = _dates.default.diff(max, min)

          this._scrollRatio = diffMillis / totalMillis
        },
      },
    ])

    return TimeGrid
  })(_react.Component)

exports.default = TimeGrid

_defineProperty(TimeGrid, 'propTypes', {
  events: _propTypes.default.array.isRequired,
  resources: _propTypes.default.array,
  step: _propTypes.default.number,
  timeslots: _propTypes.default.number,
  range: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
  min: _propTypes.default.instanceOf(Date),
  max: _propTypes.default.instanceOf(Date),
  getNow: _propTypes.default.func.isRequired,
  scrollToTime: _propTypes.default.instanceOf(Date),
  showMultiDayTimes: _propTypes.default.bool,
  rtl: _propTypes.default.bool,
  width: _propTypes.default.number,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: _propTypes.default.number,
  onNavigate: _propTypes.default.func,
  onSelectSlot: _propTypes.default.func,
  onSelectEnd: _propTypes.default.func,
  onSelectStart: _propTypes.default.func,
  onSelectEvent: _propTypes.default.func,
  onDoubleClickEvent: _propTypes.default.func,
  onDrillDown: _propTypes.default.func,
  getDrilldownView: _propTypes.default.func.isRequired,
})

_defineProperty(TimeGrid, 'defaultProps', {
  step: 30,
  timeslots: 2,
  min: _dates.default.startOf(new Date(), 'day'),
  max: _dates.default.endOf(new Date(), 'day'),
  scrollToTime: _dates.default.startOf(new Date(), 'day'),
})
