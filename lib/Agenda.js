'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _class = _interopRequireDefault(require('dom-helpers/class'))

var _width = _interopRequireDefault(require('dom-helpers/query/width'))

var _scrollbarSize = _interopRequireDefault(
  require('dom-helpers/util/scrollbarSize')
)

var _dates = _interopRequireDefault(require('./utils/dates'))

var _constants = require('./utils/constants')

var _eventLevels = require('./utils/eventLevels')

var _selection = require('./utils/selection')

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

var Agenda =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Agenda, _React$Component)

    function Agenda() {
      var _getPrototypeOf2

      var _this

      _classCallCheck(this, Agenda)

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Agenda)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'renderDay',
        function(day, events, dayKey) {
          var _this$props = _this.props,
            selected = _this$props.selected,
            getters = _this$props.getters,
            accessors = _this$props.accessors,
            localizer = _this$props.localizer,
            _this$props$component = _this$props.components,
            Event = _this$props$component.event,
            AgendaDate = _this$props$component.date
          events = events.filter(function(e) {
            return (0,
            _eventLevels.inRange)(e, _dates.default.startOf(day, 'day'), _dates.default.endOf(day, 'day'), accessors)
          })
          return events.map(function(event, idx) {
            var title = accessors.title(event)
            var end = accessors.end(event)
            var start = accessors.start(event)
            var userProps = getters.eventProp(
              event,
              start,
              end,
              (0, _selection.isSelected)(event, selected)
            )
            var dateLabel =
              idx === 0 && localizer.format(day, 'agendaDateFormat')
            var first =
              idx === 0
                ? _react.default.createElement(
                    'td',
                    {
                      rowSpan: events.length,
                      className: 'rbc-agenda-date-cell',
                    },
                    AgendaDate
                      ? _react.default.createElement(AgendaDate, {
                          day: day,
                          label: dateLabel,
                        })
                      : dateLabel
                  )
                : false
            return _react.default.createElement(
              'tr',
              {
                key: dayKey + '_' + idx,
                className: userProps.className,
                style: userProps.style,
              },
              first,
              _react.default.createElement(
                'td',
                {
                  className: 'rbc-agenda-time-cell',
                },
                _this.timeRangeLabel(day, event)
              ),
              _react.default.createElement(
                'td',
                {
                  className: 'rbc-agenda-event-cell',
                },
                Event
                  ? _react.default.createElement(Event, {
                      event: event,
                      title: title,
                    })
                  : title
              )
            )
          }, [])
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'timeRangeLabel',
        function(day, event) {
          var _this$props2 = _this.props,
            accessors = _this$props2.accessors,
            localizer = _this$props2.localizer,
            components = _this$props2.components
          var labelClass = '',
            TimeComponent = components.time,
            label = localizer.messages.allDay
          var end = accessors.end(event)
          var start = accessors.start(event)

          if (!accessors.allDay(event)) {
            if (_dates.default.eq(start, end, 'day')) {
              label = localizer.format(
                {
                  start: start,
                  end: end,
                },
                'agendaTimeRangeFormat'
              )
            } else if (_dates.default.eq(day, start, 'day')) {
              label = localizer.format(start, 'agendaTimeFormat')
            } else if (_dates.default.eq(day, end, 'day')) {
              label = localizer.format(end, 'agendaTimeFormat')
            }
          }

          if (_dates.default.gt(day, start, 'day'))
            labelClass = 'rbc-continues-prior'
          if (_dates.default.lt(day, end, 'day'))
            labelClass += ' rbc-continues-after'
          return _react.default.createElement(
            'span',
            {
              className: labelClass.trim(),
            },
            TimeComponent
              ? _react.default.createElement(TimeComponent, {
                  event: event,
                  day: day,
                  label: label,
                })
              : label
          )
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        '_adjustHeader',
        function() {
          if (!_this.refs.tbody) return
          var header = _this.refs.header
          var firstRow = _this.refs.tbody.firstChild
          if (!firstRow) return
          var isOverflowing =
            _this.refs.content.scrollHeight > _this.refs.content.clientHeight
          var widths = _this._widths || []
          _this._widths = [
            (0, _width.default)(firstRow.children[0]),
            (0, _width.default)(firstRow.children[1]),
          ]

          if (
            widths[0] !== _this._widths[0] ||
            widths[1] !== _this._widths[1]
          ) {
            _this.refs.dateCol.style.width = _this._widths[0] + 'px'
            _this.refs.timeCol.style.width = _this._widths[1] + 'px'
          }

          if (isOverflowing) {
            _class.default.addClass(header, 'rbc-header-overflowing')

            header.style.marginRight = (0, _scrollbarSize.default)() + 'px'
          } else {
            _class.default.removeClass(header, 'rbc-header-overflowing')
          }
        }
      )

      return _this
    }

    _createClass(Agenda, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this._adjustHeader()
        },
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          this._adjustHeader()
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this2 = this

          var _this$props3 = this.props,
            length = _this$props3.length,
            date = _this$props3.date,
            events = _this$props3.events,
            accessors = _this$props3.accessors,
            localizer = _this$props3.localizer
          var messages = localizer.messages

          var end = _dates.default.add(date, length, 'day')

          var range = _dates.default.range(date, end, 'day')

          events = events.filter(function(event) {
            return (0, _eventLevels.inRange)(event, date, end, accessors)
          })
          events.sort(function(a, b) {
            return +accessors.start(a) - +accessors.start(b)
          })
          return _react.default.createElement(
            'div',
            {
              className: 'rbc-agenda-view',
            },
            events.length !== 0
              ? _react.default.createElement(
                  _react.default.Fragment,
                  null,
                  _react.default.createElement(
                    'table',
                    {
                      ref: 'header',
                      className: 'rbc-agenda-table',
                    },
                    _react.default.createElement(
                      'thead',
                      null,
                      _react.default.createElement(
                        'tr',
                        null,
                        _react.default.createElement(
                          'th',
                          {
                            className: 'rbc-header',
                            ref: 'dateCol',
                          },
                          messages.date
                        ),
                        _react.default.createElement(
                          'th',
                          {
                            className: 'rbc-header',
                            ref: 'timeCol',
                          },
                          messages.time
                        ),
                        _react.default.createElement(
                          'th',
                          {
                            className: 'rbc-header',
                          },
                          messages.event
                        )
                      )
                    )
                  ),
                  _react.default.createElement(
                    'div',
                    {
                      className: 'rbc-agenda-content',
                      ref: 'content',
                    },
                    _react.default.createElement(
                      'table',
                      {
                        className: 'rbc-agenda-table',
                      },
                      _react.default.createElement(
                        'tbody',
                        {
                          ref: 'tbody',
                        },
                        range.map(function(day, idx) {
                          return _this2.renderDay(day, events, idx)
                        })
                      )
                    )
                  )
                )
              : _react.default.createElement(
                  'span',
                  {
                    className: 'rbc-agenda-empty',
                  },
                  messages.noEventsInRange
                )
          )
        },
      },
    ])

    return Agenda
  })(_react.default.Component)

_defineProperty(Agenda, 'propTypes', {
  events: _propTypes.default.array,
  date: _propTypes.default.instanceOf(Date),
  length: _propTypes.default.number.isRequired,
  selected: _propTypes.default.object,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
})

_defineProperty(Agenda, 'defaultProps', {
  length: 30,
})

Agenda.range = function(start, _ref) {
  var _ref$length = _ref.length,
    length = _ref$length === void 0 ? Agenda.defaultProps.length : _ref$length

  var end = _dates.default.add(start, length, 'day')

  return {
    start: start,
    end: end,
  }
}

Agenda.navigate = function(date, action, _ref2) {
  var _ref2$length = _ref2.length,
    length = _ref2$length === void 0 ? Agenda.defaultProps.length : _ref2$length

  switch (action) {
    case _constants.navigate.PREVIOUS:
      return _dates.default.add(date, -length, 'day')

    case _constants.navigate.NEXT:
      return _dates.default.add(date, length, 'day')

    default:
      return date
  }
}

Agenda.title = function(start, _ref3) {
  var _ref3$length = _ref3.length,
    length =
      _ref3$length === void 0 ? Agenda.defaultProps.length : _ref3$length,
    localizer = _ref3.localizer

  var end = _dates.default.add(start, length, 'day')

  return localizer.format(
    {
      start: start,
      end: end,
    },
    'agendaHeaderFormat'
  )
}

var _default = Agenda
exports.default = _default
