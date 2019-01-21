'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _classnames = _interopRequireDefault(require('classnames'))

var _height = _interopRequireDefault(require('dom-helpers/query/height'))

var _querySelectorAll = _interopRequireDefault(
  require('dom-helpers/query/querySelectorAll')
)

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _reactDom = require('react-dom')

var _dates = _interopRequireDefault(require('./utils/dates'))

var _BackgroundCells = _interopRequireDefault(require('./BackgroundCells'))

var _EventRow = _interopRequireDefault(require('./EventRow'))

var _EventEndingRow = _interopRequireDefault(require('./EventEndingRow'))

var DateSlotMetrics = _interopRequireWildcard(
  require('./utils/DateSlotMetrics')
)

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

var propTypes = {
  date: _propTypes.default.instanceOf(Date),
  events: _propTypes.default.array.isRequired,
  range: _propTypes.default.array.isRequired,
  rtl: _propTypes.default.bool,
  resourceId: _propTypes.default.any,
  renderForMeasure: _propTypes.default.bool,
  renderHeader: _propTypes.default.func,
  container: _propTypes.default.func,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: _propTypes.default.number,
  onShowMore: _propTypes.default.func,
  onSelectSlot: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onSelectEnd: _propTypes.default.func,
  onSelectStart: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func,
  dayPropGetter: _propTypes.default.func,
  getNow: _propTypes.default.func.isRequired,
  isAllDay: _propTypes.default.bool,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  minRows: _propTypes.default.number.isRequired,
  maxRows: _propTypes.default.number.isRequired,
}
var defaultProps = {
  minRows: 0,
  maxRows: Infinity,
}

var DateContentRow =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(DateContentRow, _React$Component)

    function DateContentRow() {
      var _getPrototypeOf2

      var _this

      _classCallCheck(this, DateContentRow)

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(DateContentRow)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleSelectSlot',
        function(slot) {
          var _this$props = _this.props,
            range = _this$props.range,
            onSelectSlot = _this$props.onSelectSlot
          onSelectSlot(range.slice(slot.start, slot.end + 1), slot)
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleShowMore',
        function(slot) {
          var _this$props2 = _this.props,
            range = _this$props2.range,
            onShowMore = _this$props2.onShowMore

          var metrics = _this.slotMetrics(_this.props)

          var row = (0, _querySelectorAll.default)(
            (0, _reactDom.findDOMNode)(
              _assertThisInitialized(_assertThisInitialized(_this))
            ),
            '.rbc-row-bg'
          )[0]
          var cell
          if (row) cell = row.children[slot - 1]
          var events = metrics.getEventsForSlot(slot)
          onShowMore(events, range[slot - 1], cell, slot)
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'createHeadingRef',
        function(r) {
          _this.headingRow = r
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'createEventRef',
        function(r) {
          _this.eventRow = r
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'getContainer',
        function() {
          var container = _this.props.container
          return container
            ? container()
            : (0, _reactDom.findDOMNode)(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'renderHeadingCell',
        function(date, index) {
          var _this$props3 = _this.props,
            renderHeader = _this$props3.renderHeader,
            getNow = _this$props3.getNow
          return renderHeader({
            date: date,
            key: 'header_'.concat(index),
            className: (0, _classnames.default)(
              'rbc-date-cell',
              _dates.default.eq(date, getNow(), 'day') && 'rbc-now'
            ),
          })
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'renderDummy',
        function() {
          var _this$props4 = _this.props,
            className = _this$props4.className,
            range = _this$props4.range,
            renderHeader = _this$props4.renderHeader
          return _react.default.createElement(
            'div',
            {
              className: className,
            },
            _react.default.createElement(
              'div',
              {
                className: 'rbc-row-content',
              },
              renderHeader &&
                _react.default.createElement(
                  'div',
                  {
                    className: 'rbc-row',
                    ref: _this.createHeadingRef,
                  },
                  range.map(_this.renderHeadingCell)
                ),
              _react.default.createElement(
                'div',
                {
                  className: 'rbc-row',
                  ref: _this.createEventRef,
                },
                _react.default.createElement(
                  'div',
                  {
                    className: 'rbc-row-segment',
                  },
                  _react.default.createElement(
                    'div',
                    {
                      className: 'rbc-event',
                    },
                    _react.default.createElement(
                      'div',
                      {
                        className: 'rbc-event-content',
                      },
                      '\xA0'
                    )
                  )
                )
              )
            )
          )
        }
      )

      _this.slotMetrics = DateSlotMetrics.getSlotMetrics()
      return _this
    }

    _createClass(DateContentRow, [
      {
        key: 'getRowLimit',
        value: function getRowLimit() {
          var eventHeight = (0, _height.default)(this.eventRow)
          var headingHeight = this.headingRow
            ? (0, _height.default)(this.headingRow)
            : 0
          var eventSpace =
            (0, _height.default)((0, _reactDom.findDOMNode)(this)) -
            headingHeight
          return Math.max(Math.floor(eventSpace / eventHeight), 1)
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props5 = this.props,
            date = _this$props5.date,
            rtl = _this$props5.rtl,
            range = _this$props5.range,
            className = _this$props5.className,
            selected = _this$props5.selected,
            selectable = _this$props5.selectable,
            renderForMeasure = _this$props5.renderForMeasure,
            accessors = _this$props5.accessors,
            getters = _this$props5.getters,
            components = _this$props5.components,
            getNow = _this$props5.getNow,
            renderHeader = _this$props5.renderHeader,
            onSelect = _this$props5.onSelect,
            localizer = _this$props5.localizer,
            onSelectStart = _this$props5.onSelectStart,
            onSelectEnd = _this$props5.onSelectEnd,
            onDoubleClick = _this$props5.onDoubleClick,
            resourceId = _this$props5.resourceId,
            longPressThreshold = _this$props5.longPressThreshold,
            isAllDay = _this$props5.isAllDay
          if (renderForMeasure) return this.renderDummy()
          var metrics = this.slotMetrics(this.props)
          var levels = metrics.levels,
            extra = metrics.extra
          var WeekWrapper = components.weekWrapper
          var eventRowProps = {
            selected: selected,
            accessors: accessors,
            getters: getters,
            localizer: localizer,
            components: components,
            onSelect: onSelect,
            onDoubleClick: onDoubleClick,
            resourceId: resourceId,
            slotMetrics: metrics,
          }
          return _react.default.createElement(
            'div',
            {
              className: className,
            },
            _react.default.createElement(_BackgroundCells.default, {
              date: date,
              getNow: getNow,
              rtl: rtl,
              range: range,
              selectable: selectable,
              container: this.getContainer,
              getters: getters,
              onSelectStart: onSelectStart,
              onSelectEnd: onSelectEnd,
              onSelectSlot: this.handleSelectSlot,
              components: components,
              longPressThreshold: longPressThreshold,
            }),
            _react.default.createElement(
              'div',
              {
                className: 'rbc-row-content',
              },
              renderHeader &&
                _react.default.createElement(
                  'div',
                  {
                    className: 'rbc-row ',
                    ref: this.createHeadingRef,
                  },
                  range.map(this.renderHeadingCell)
                ),
              _react.default.createElement(
                WeekWrapper,
                _extends(
                  {
                    isAllDay: isAllDay,
                  },
                  eventRowProps
                ),
                levels.map(function(segs, idx) {
                  return _react.default.createElement(
                    _EventRow.default,
                    _extends(
                      {
                        key: idx,
                        segments: segs,
                      },
                      eventRowProps
                    )
                  )
                }),
                !!extra.length &&
                  _react.default.createElement(
                    _EventEndingRow.default,
                    _extends(
                      {
                        segments: extra,
                        onShowMore: this.handleShowMore,
                      },
                      eventRowProps
                    )
                  )
              )
            )
          )
        },
      },
    ])

    return DateContentRow
  })(_react.default.Component)

DateContentRow.propTypes = propTypes
DateContentRow.defaultProps = defaultProps
var _default = DateContentRow
exports.default = _default
