'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _classnames = _interopRequireDefault(require('classnames'))

var _scrollbarSize = _interopRequireDefault(
  require('dom-helpers/util/scrollbarSize')
)

var _react = _interopRequireDefault(require('react'))

var _dates = _interopRequireDefault(require('./utils/dates'))

var _DateContentRow = _interopRequireDefault(require('./DateContentRow'))

var _Header = _interopRequireDefault(require('./Header'))

var _helpers = require('./utils/helpers')

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

var TimeGridHeader =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(TimeGridHeader, _React$Component)

    function TimeGridHeader() {
      var _getPrototypeOf2

      var _this

      _classCallCheck(this, TimeGridHeader)

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(TimeGridHeader)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleHeaderClick',
        function(date, view, e) {
          e.preventDefault()
          ;(0, _helpers.notify)(_this.props.onDrillDown, [date, view])
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'renderRow',
        function(resource) {
          var _this$props = _this.props,
            events = _this$props.events,
            rtl = _this$props.rtl,
            selectable = _this$props.selectable,
            getNow = _this$props.getNow,
            range = _this$props.range,
            getters = _this$props.getters,
            localizer = _this$props.localizer,
            accessors = _this$props.accessors,
            components = _this$props.components
          var resourceId = accessors.resourceId(resource)
          var eventsToDisplay = resource
            ? events.filter(function(event) {
                return accessors.resource(event) === resourceId
              })
            : events
          return _react.default.createElement(_DateContentRow.default, {
            isAllDay: true,
            rtl: rtl,
            getNow: getNow,
            minRows: 2,
            range: range,
            events: eventsToDisplay,
            resourceId: resourceId,
            className: 'rbc-allday-cell',
            selectable: selectable,
            selected: _this.props.selected,
            components: components,
            accessors: accessors,
            getters: getters,
            localizer: localizer,
            onSelect: _this.props.onSelectEvent,
            onDoubleClick: _this.props.onDoubleClickEvent,
            onSelectSlot: _this.props.onSelectSlot,
            longPressThreshold: _this.props.longPressThreshold,
          })
        }
      )

      return _this
    }

    _createClass(TimeGridHeader, [
      {
        key: 'renderHeaderCells',
        value: function renderHeaderCells(range) {
          var _this2 = this

          var _this$props2 = this.props,
            localizer = _this$props2.localizer,
            getDrilldownView = _this$props2.getDrilldownView,
            getNow = _this$props2.getNow,
            dayProp = _this$props2.getters.dayProp,
            _this$props2$componen = _this$props2.components.header,
            HeaderComponent =
              _this$props2$componen === void 0
                ? _Header.default
                : _this$props2$componen
          var today = getNow()
          return range.map(function(date, i) {
            var drilldownView = getDrilldownView(date)
            var label = localizer.format(date, 'dayFormat')

            var _dayProp = dayProp(date),
              className = _dayProp.className,
              style = _dayProp.style

            var header = _react.default.createElement(HeaderComponent, {
              date: date,
              label: label,
              localizer: localizer,
            })

            return _react.default.createElement(
              'div',
              {
                key: i,
                style: style,
                className: (0, _classnames.default)(
                  'rbc-header',
                  className,
                  _dates.default.eq(date, today, 'day') && 'rbc-today'
                ),
              },
              drilldownView
                ? _react.default.createElement(
                    'a',
                    {
                      href: '#',
                      onClick: function onClick(e) {
                        return _this2.handleHeaderClick(date, drilldownView, e)
                      },
                    },
                    header
                  )
                : _react.default.createElement('span', null, header)
            )
          })
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this3 = this

          var _this$props3 = this.props,
            width = _this$props3.width,
            rtl = _this$props3.rtl,
            resources = _this$props3.resources,
            range = _this$props3.range,
            events = _this$props3.events,
            getNow = _this$props3.getNow,
            accessors = _this$props3.accessors,
            selectable = _this$props3.selectable,
            components = _this$props3.components,
            getters = _this$props3.getters,
            scrollRef = _this$props3.scrollRef,
            localizer = _this$props3.localizer,
            isOverflowing = _this$props3.isOverflowing,
            TimeGutterHeader = _this$props3.components.timeGutterHeader
          var style = {}

          if (isOverflowing) {
            style[rtl ? 'marginLeft' : 'marginRight'] = ''.concat(
              (0, _scrollbarSize.default)(),
              'px'
            )
          }

          var groupedEvents = resources.groupEvents(events)
          return _react.default.createElement(
            'div',
            {
              style: style,
              ref: scrollRef,
              className: (0, _classnames.default)(
                'rbc-time-header',
                isOverflowing && 'rbc-overflowing'
              ),
            },
            _react.default.createElement(
              'div',
              {
                className: 'rbc-label rbc-time-header-gutter',
                style: {
                  width: width,
                  minWidth: width,
                  maxWidth: width,
                },
              },
              TimeGutterHeader &&
                _react.default.createElement(TimeGutterHeader, null)
            ),
            resources.map(function(_ref, idx) {
              var _ref2 = _slicedToArray(_ref, 2),
                id = _ref2[0],
                resource = _ref2[1]

              return _react.default.createElement(
                'div',
                {
                  className: 'rbc-time-header-content',
                  key: id || idx,
                },
                resource &&
                  _react.default.createElement(
                    'div',
                    {
                      className: 'rbc-row rbc-row-resource',
                    },
                    _react.default.createElement(
                      'div',
                      {
                        key: 'resource_'.concat(idx),
                        className: 'rbc-header',
                      },
                      accessors.resourceTitle(resource)
                    )
                  ),
                _react.default.createElement(
                  'div',
                  {
                    className: 'rbc-row rbc-time-header-cell'.concat(
                      range.length <= 1
                        ? ' rbc-time-header-cell-single-day'
                        : ''
                    ),
                  },
                  _this3.renderHeaderCells(range)
                ),
                _react.default.createElement(_DateContentRow.default, {
                  isAllDay: true,
                  rtl: rtl,
                  getNow: getNow,
                  minRows: 2,
                  range: range,
                  events: groupedEvents.get(id) || [],
                  resourceId: resource && id,
                  className: 'rbc-allday-cell',
                  selectable: selectable,
                  selected: _this3.props.selected,
                  components: components,
                  accessors: accessors,
                  getters: getters,
                  localizer: localizer,
                  onSelect: _this3.props.onSelectEvent,
                  onDoubleClick: _this3.props.onDoubleClickEvent,
                  onSelectSlot: _this3.props.onSelectSlot,
                  longPressThreshold: _this3.props.longPressThreshold,
                })
              )
            })
          )
        },
      },
    ])

    return TimeGridHeader
  })(_react.default.Component)

_defineProperty(TimeGridHeader, 'propTypes', {
  range: _propTypes.default.array.isRequired,
  events: _propTypes.default.array.isRequired,
  resources: _propTypes.default.object,
  getNow: _propTypes.default.func.isRequired,
  isOverflowing: _propTypes.default.bool,
  rtl: _propTypes.default.bool,
  width: _propTypes.default.number,
  localizer: _propTypes.default.object.isRequired,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: _propTypes.default.number,
  onSelectSlot: _propTypes.default.func,
  onSelectEvent: _propTypes.default.func,
  onDoubleClickEvent: _propTypes.default.func,
  onDrillDown: _propTypes.default.func,
  getDrilldownView: _propTypes.default.func.isRequired,
  scrollRef: _propTypes.default.any,
})

var _default = TimeGridHeader
exports.default = _default
