'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _reactDom = require('react-dom')

var _classnames = _interopRequireDefault(require('classnames'))

var _dates = _interopRequireDefault(require('./utils/dates'))

var _chunk = _interopRequireDefault(require('lodash/chunk'))

var _constants = require('./utils/constants')

var _helpers = require('./utils/helpers')

var _position = _interopRequireDefault(require('dom-helpers/query/position'))

var _requestAnimationFrame = _interopRequireDefault(
  require('dom-helpers/util/requestAnimationFrame')
)

var _Popup = _interopRequireDefault(require('./Popup'))

var _Overlay = _interopRequireDefault(require('react-overlays/lib/Overlay'))

var _DateContentRow = _interopRequireDefault(require('./DateContentRow'))

var _Header = _interopRequireDefault(require('./Header'))

var _DateHeader = _interopRequireDefault(require('./DateHeader'))

var _eventLevels = require('./utils/eventLevels')

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

var eventsForWeek = function eventsForWeek(evts, start, end, accessors) {
  return evts.filter(function(e) {
    return (0, _eventLevels.inRange)(e, start, end, accessors)
  })
}

var propTypes = {
  events: _propTypes.default.array.isRequired,
  date: _propTypes.default.instanceOf(Date),
  min: _propTypes.default.instanceOf(Date),
  max: _propTypes.default.instanceOf(Date),
  step: _propTypes.default.number,
  getNow: _propTypes.default.func.isRequired,
  scrollToTime: _propTypes.default.instanceOf(Date),
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
  onSelectEvent: _propTypes.default.func,
  onDoubleClickEvent: _propTypes.default.func,
  onShowMore: _propTypes.default.func,
  onDrillDown: _propTypes.default.func,
  getDrilldownView: _propTypes.default.func.isRequired,
  popup: _propTypes.default.bool,
  popupOffset: _propTypes.default.oneOfType([
    _propTypes.default.number,
    _propTypes.default.shape({
      x: _propTypes.default.number,
      y: _propTypes.default.number,
    }),
  ]),
}

var MonthView =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(MonthView, _React$Component)

    function MonthView() {
      var _getPrototypeOf2

      var _this

      _classCallCheck(this, MonthView)

      for (
        var _len = arguments.length, _args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        _args[_key] = arguments[_key]
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(MonthView)).call.apply(
          _getPrototypeOf2,
          [this].concat(_args)
        )
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'getContainer',
        function() {
          return (0, _reactDom.findDOMNode)(
            _assertThisInitialized(_assertThisInitialized(_this))
          )
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'renderWeek',
        function(week, weekIdx) {
          var _this$props = _this.props,
            events = _this$props.events,
            components = _this$props.components,
            selectable = _this$props.selectable,
            getNow = _this$props.getNow,
            selected = _this$props.selected,
            date = _this$props.date,
            localizer = _this$props.localizer,
            longPressThreshold = _this$props.longPressThreshold,
            accessors = _this$props.accessors,
            getters = _this$props.getters
          var _this$state = _this.state,
            needLimitMeasure = _this$state.needLimitMeasure,
            rowLimit = _this$state.rowLimit
          events = eventsForWeek(
            events,
            week[0],
            week[week.length - 1],
            accessors
          )
          events.sort(function(a, b) {
            return (0, _eventLevels.sortEvents)(a, b, accessors)
          })
          return _react.default.createElement(_DateContentRow.default, {
            key: weekIdx,
            ref: weekIdx === 0 ? 'slotRow' : undefined,
            container: _this.getContainer,
            className: 'rbc-month-row',
            getNow: getNow,
            date: date,
            range: week,
            events: events,
            maxRows: rowLimit,
            selected: selected,
            selectable: selectable,
            components: components,
            accessors: accessors,
            getters: getters,
            localizer: localizer,
            renderHeader: _this.readerDateHeading,
            renderForMeasure: needLimitMeasure,
            onShowMore: _this.handleShowMore,
            onSelect: _this.handleSelectEvent,
            onDoubleClick: _this.handleDoubleClickEvent,
            onSelectSlot: _this.handleSelectSlot,
            longPressThreshold: longPressThreshold,
            rtl: _this.props.rtl,
          })
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'readerDateHeading',
        function(_ref) {
          var date = _ref.date,
            className = _ref.className,
            props = _objectWithoutProperties(_ref, ['date', 'className'])

          var _this$props2 = _this.props,
            currentDate = _this$props2.date,
            getDrilldownView = _this$props2.getDrilldownView,
            localizer = _this$props2.localizer

          var isOffRange =
            _dates.default.month(date) !== _dates.default.month(currentDate)

          var isCurrent = _dates.default.eq(date, currentDate, 'day')

          var drilldownView = getDrilldownView(date)
          var label = localizer.format(date, 'dateFormat')
          var DateHeaderComponent =
            _this.props.components.dateHeader || _DateHeader.default
          return _react.default.createElement(
            'div',
            _extends({}, props, {
              className: (0, _classnames.default)(
                className,
                isOffRange && 'rbc-off-range',
                isCurrent && 'rbc-current'
              ),
            }),
            _react.default.createElement(DateHeaderComponent, {
              label: label,
              date: date,
              drilldownView: drilldownView,
              isOffRange: isOffRange,
              onDrillDown: function onDrillDown(e) {
                return _this.handleHeadingClick(date, drilldownView, e)
              },
            })
          )
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleSelectSlot',
        function(range, slotInfo) {
          _this._pendingSelection = _this._pendingSelection.concat(range)
          clearTimeout(_this._selectTimer)
          _this._selectTimer = setTimeout(function() {
            return _this.selectDates(slotInfo)
          })
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleHeadingClick',
        function(date, view, e) {
          e.preventDefault()

          _this.clearSelection()
          ;(0, _helpers.notify)(_this.props.onDrillDown, [date, view])
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleSelectEvent',
        function() {
          _this.clearSelection()

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
        'handleDoubleClickEvent',
        function() {
          _this.clearSelection()

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

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleShowMore',
        function(events, date, cell, slot) {
          var _this$props3 = _this.props,
            popup = _this$props3.popup,
            onDrillDown = _this$props3.onDrillDown,
            onShowMore = _this$props3.onShowMore,
            getDrilldownView = _this$props3.getDrilldownView //cancel any pending selections so only the event click goes through.

          _this.clearSelection()

          if (popup) {
            var position = (0, _position.default)(
              cell,
              (0, _reactDom.findDOMNode)(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
            )

            _this.setState({
              overlay: {
                date: date,
                events: events,
                position: position,
              },
            })
          } else {
            ;(0, _helpers.notify)(onDrillDown, [
              date,
              getDrilldownView(date) || _constants.views.DAY,
            ])
          }

          ;(0, _helpers.notify)(onShowMore, [events, date, slot])
        }
      )

      _this._bgRows = []
      _this._pendingSelection = []
      _this.state = {
        rowLimit: 5,
        needLimitMeasure: true,
      }
      return _this
    }

    _createClass(MonthView, [
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref2) {
          var date = _ref2.date
          this.setState({
            needLimitMeasure: !_dates.default.eq(date, this.props.date),
          })
        },
      },
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this

          var running
          if (this.state.needLimitMeasure) this.measureRowLimit(this.props)
          window.addEventListener(
            'resize',
            (this._resizeListener = function() {
              if (!running) {
                ;(0, _requestAnimationFrame.default)(function() {
                  running = false

                  _this2.setState({
                    needLimitMeasure: true,
                  }) //eslint-disable-line
                })
              }
            }),
            false
          )
        },
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          if (this.state.needLimitMeasure) this.measureRowLimit(this.props)
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          window.removeEventListener('resize', this._resizeListener, false)
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props4 = this.props,
            date = _this$props4.date,
            localizer = _this$props4.localizer,
            className = _this$props4.className,
            month = _dates.default.visibleDays(date, localizer),
            weeks = (0, _chunk.default)(month, 7)

          this._weekCount = weeks.length
          return _react.default.createElement(
            'div',
            {
              className: (0, _classnames.default)('rbc-month-view', className),
            },
            _react.default.createElement(
              'div',
              {
                className: 'rbc-row rbc-month-header',
              },
              this.renderHeaders(weeks[0])
            ),
            weeks.map(this.renderWeek),
            this.props.popup && this.renderOverlay()
          )
        },
      },
      {
        key: 'renderHeaders',
        value: function renderHeaders(row) {
          var _this$props5 = this.props,
            localizer = _this$props5.localizer,
            components = _this$props5.components
          var first = row[0]
          var last = row[row.length - 1]
          var HeaderComponent = components.header || _Header.default
          return _dates.default
            .range(first, last, 'day')
            .map(function(day, idx) {
              return _react.default.createElement(
                'div',
                {
                  key: 'header_' + idx,
                  className: 'rbc-header',
                },
                _react.default.createElement(HeaderComponent, {
                  date: day,
                  localizer: localizer,
                  label: localizer.format(day, 'weekdayFormat'),
                })
              )
            })
        },
      },
      {
        key: 'renderOverlay',
        value: function renderOverlay() {
          var _this3 = this

          var overlay = (this.state && this.state.overlay) || {}
          var _this$props6 = this.props,
            accessors = _this$props6.accessors,
            localizer = _this$props6.localizer,
            components = _this$props6.components,
            getters = _this$props6.getters,
            selected = _this$props6.selected
          return _react.default.createElement(
            _Overlay.default,
            {
              rootClose: true,
              placement: 'bottom',
              container: this,
              show: !!overlay.position,
              onHide: function onHide() {
                return _this3.setState({
                  overlay: null,
                })
              },
            },
            _react.default.createElement(_Popup.default, {
              accessors: accessors,
              getters: getters,
              selected: selected,
              components: components,
              localizer: localizer,
              position: overlay.position,
              events: overlay.events,
              slotStart: overlay.date,
              slotEnd: overlay.end,
              onSelect: this.handleSelectEvent,
              onDoubleClick: this.handleDoubleClickEvent,
            })
          )
        },
      },
      {
        key: 'measureRowLimit',
        value: function measureRowLimit() {
          this.setState({
            needLimitMeasure: false,
            rowLimit: this.refs.slotRow.getRowLimit(),
          })
        },
      },
      {
        key: 'selectDates',
        value: function selectDates(slotInfo) {
          var slots = this._pendingSelection.slice()

          this._pendingSelection = []
          slots.sort(function(a, b) {
            return +a - +b
          })
          ;(0, _helpers.notify)(this.props.onSelectSlot, {
            slots: slots,
            start: slots[0],
            end: slots[slots.length - 1],
            action: slotInfo.action,
          })
        },
      },
      {
        key: 'clearSelection',
        value: function clearSelection() {
          clearTimeout(this._selectTimer)
          this._pendingSelection = []
        },
      },
    ])

    return MonthView
  })(_react.default.Component)

_defineProperty(MonthView, 'displayName', 'MonthView')

_defineProperty(MonthView, 'propTypes', propTypes)

MonthView.range = function(date, _ref3) {
  var localizer = _ref3.localizer

  var start = _dates.default.firstVisibleDay(date, localizer)

  var end = _dates.default.lastVisibleDay(date, localizer)

  return {
    start: start,
    end: end,
  }
}

MonthView.navigate = function(date, action) {
  switch (action) {
    case _constants.navigate.PREVIOUS:
      return _dates.default.add(date, -1, 'month')

    case _constants.navigate.NEXT:
      return _dates.default.add(date, 1, 'month')

    default:
      return date
  }
}

MonthView.title = function(date, _ref4) {
  var localizer = _ref4.localizer
  return localizer.format(date, 'monthHeaderFormat')
}

var _default = MonthView
exports.default = _default
