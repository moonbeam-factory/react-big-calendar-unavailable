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

var _helpers = require('./utils/helpers')

var _selection = require('./utils/selection')

var _Selection = _interopRequireWildcard(require('./Selection'))

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return self
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

var BackgroundCells =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(BackgroundCells, _React$Component)

    function BackgroundCells(props, context) {
      var _this

      _classCallCheck(this, BackgroundCells)

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(BackgroundCells).call(this, props, context)
      )
      _this.state = {
        selecting: false,
      }
      return _this
    }

    _createClass(BackgroundCells, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.props.selectable && this._selectable()
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this._teardownSelectable()
        },
      },
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (nextProps.selectable && !this.props.selectable) this._selectable()
          if (!nextProps.selectable && this.props.selectable)
            this._teardownSelectable()
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            range = _this$props.range,
            getNow = _this$props.getNow,
            getters = _this$props.getters,
            currentDate = _this$props.date,
            Wrapper = _this$props.components.dateCellWrapper
          var _this$state = this.state,
            selecting = _this$state.selecting,
            startIdx = _this$state.startIdx,
            endIdx = _this$state.endIdx
          var current = getNow()
          return _react.default.createElement(
            'div',
            {
              className: 'rbc-row-bg',
            },
            range.map(function(date, index) {
              var selected = selecting && index >= startIdx && index <= endIdx

              var _getters$dayProp = getters.dayProp(date),
                className = _getters$dayProp.className,
                style = _getters$dayProp.style

              return _react.default.createElement(
                Wrapper,
                {
                  key: index,
                  value: date,
                  range: range,
                },
                _react.default.createElement('div', {
                  style: style,
                  className: (0, _classnames.default)(
                    'rbc-day-bg',
                    className,
                    selected && 'rbc-selected-cell',
                    _dates.default.eq(date, current, 'day') && 'rbc-today',
                    currentDate &&
                      _dates.default.month(currentDate) !==
                        _dates.default.month(date) &&
                      'rbc-off-range-bg'
                  ),
                })
              )
            })
          )
        },
      },
      {
        key: '_selectable',
        value: function _selectable() {
          var _this2 = this

          var node = (0, _reactDom.findDOMNode)(this)
          var selector = (this._selector = new _Selection.default(
            this.props.container,
            {
              longPressThreshold: this.props.longPressThreshold,
            }
          ))

          var selectorClicksHandler = function selectorClicksHandler(
            point,
            actionType
          ) {
            if (
              !(0, _Selection.isEvent)(
                (0, _reactDom.findDOMNode)(_this2),
                point
              )
            ) {
              var rowBox = (0, _Selection.getBoundsForNode)(node)
              var _this2$props = _this2.props,
                range = _this2$props.range,
                rtl = _this2$props.rtl

              if ((0, _selection.pointInBox)(rowBox, point)) {
                var currentCell = (0, _selection.getSlotAtX)(
                  rowBox,
                  point.x,
                  rtl,
                  range.length
                )

                _this2._selectSlot({
                  startIdx: currentCell,
                  endIdx: currentCell,
                  action: actionType,
                  box: point,
                })
              }
            }

            _this2._initial = {}

            _this2.setState({
              selecting: false,
            })
          }

          selector.on('selecting', function(box) {
            var _this2$props2 = _this2.props,
              range = _this2$props2.range,
              rtl = _this2$props2.rtl
            var startIdx = -1
            var endIdx = -1

            if (!_this2.state.selecting) {
              ;(0, _helpers.notify)(_this2.props.onSelectStart, [box])
              _this2._initial = {
                x: box.x,
                y: box.y,
              }
            }

            if (selector.isSelected(node)) {
              var nodeBox = (0, _Selection.getBoundsForNode)(node)

              var _dateCellSelection = (0, _selection.dateCellSelection)(
                _this2._initial,
                nodeBox,
                box,
                range.length,
                rtl
              )

              startIdx = _dateCellSelection.startIdx
              endIdx = _dateCellSelection.endIdx
            }

            _this2.setState({
              selecting: true,
              startIdx: startIdx,
              endIdx: endIdx,
            })
          })
          selector.on('beforeSelect', function(box) {
            if (_this2.props.selectable !== 'ignoreEvents') return
            return !(0,
            _Selection.isEvent)((0, _reactDom.findDOMNode)(_this2), box)
          })
          selector.on('click', function(point) {
            return selectorClicksHandler(point, 'click')
          })
          selector.on('doubleClick', function(point) {
            return selectorClicksHandler(point, 'doubleClick')
          })
          selector.on('select', function(bounds) {
            _this2._selectSlot(
              _objectSpread({}, _this2.state, {
                action: 'select',
                bounds: bounds,
              })
            )

            _this2._initial = {}

            _this2.setState({
              selecting: false,
            })
            ;(0, _helpers.notify)(_this2.props.onSelectEnd, [_this2.state])
          })
        },
      },
      {
        key: '_teardownSelectable',
        value: function _teardownSelectable() {
          if (!this._selector) return

          this._selector.teardown()

          this._selector = null
        },
      },
      {
        key: '_selectSlot',
        value: function _selectSlot(_ref) {
          var endIdx = _ref.endIdx,
            startIdx = _ref.startIdx,
            action = _ref.action,
            bounds = _ref.bounds,
            box = _ref.box
          if (endIdx !== -1 && startIdx !== -1)
            this.props.onSelectSlot &&
              this.props.onSelectSlot({
                start: startIdx,
                end: endIdx,
                action: action,
                bounds: bounds,
                box: box,
              })
        },
      },
    ])

    return BackgroundCells
  })(_react.default.Component)

_defineProperty(BackgroundCells, 'propTypes', {
  date: _propTypes.default.instanceOf(Date),
  getNow: _propTypes.default.func.isRequired,
  getters: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  container: _propTypes.default.func,
  dayPropGetter: _propTypes.default.func,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: _propTypes.default.number,
  onSelectSlot: _propTypes.default.func.isRequired,
  onSelectEnd: _propTypes.default.func,
  onSelectStart: _propTypes.default.func,
  range: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
  rtl: _propTypes.default.bool,
  type: _propTypes.default.string,
})

var _default = BackgroundCells
exports.default = _default
