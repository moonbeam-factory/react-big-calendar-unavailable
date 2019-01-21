'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _offset = _interopRequireDefault(require('dom-helpers/query/offset'))

var _scrollTop = _interopRequireDefault(require('dom-helpers/query/scrollTop'))

var _scrollLeft = _interopRequireDefault(
  require('dom-helpers/query/scrollLeft')
)

var _dates = _interopRequireDefault(require('./utils/dates'))

var _EventCell = _interopRequireDefault(require('./EventCell'))

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

var propTypes = {
  position: _propTypes.default.object,
  popupOffset: _propTypes.default.oneOfType([
    _propTypes.default.number,
    _propTypes.default.shape({
      x: _propTypes.default.number,
      y: _propTypes.default.number,
    }),
  ]),
  events: _propTypes.default.array,
  selected: _propTypes.default.object,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  onSelect: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func,
  slotStart: _propTypes.default.instanceOf(Date),
  slotEnd: _propTypes.default.number,
}

var Popup =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Popup, _React$Component)

    function Popup() {
      _classCallCheck(this, Popup)

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(Popup).apply(this, arguments)
      )
    }

    _createClass(Popup, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this$props$popupOffs = this.props.popupOffset,
            popupOffset =
              _this$props$popupOffs === void 0 ? 5 : _this$props$popupOffs,
            _getOffset = (0, _offset.default)(this.refs.root),
            top = _getOffset.top,
            left = _getOffset.left,
            width = _getOffset.width,
            height = _getOffset.height,
            viewBottom = window.innerHeight + (0, _scrollTop.default)(window),
            viewRight = window.innerWidth + (0, _scrollLeft.default)(window),
            bottom = top + height,
            right = left + width

          if (bottom > viewBottom || right > viewRight) {
            var topOffset, leftOffset
            if (bottom > viewBottom)
              topOffset =
                bottom - viewBottom + (popupOffset.y || +popupOffset || 0)
            if (right > viewRight)
              leftOffset =
                right - viewRight + (popupOffset.x || +popupOffset || 0)
            this.setState({
              topOffset: topOffset,
              leftOffset: leftOffset,
            }) //eslint-disable-line
          }
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            events = _this$props.events,
            selected = _this$props.selected,
            getters = _this$props.getters,
            accessors = _this$props.accessors,
            components = _this$props.components,
            onSelect = _this$props.onSelect,
            onDoubleClick = _this$props.onDoubleClick,
            slotStart = _this$props.slotStart,
            slotEnd = _this$props.slotEnd,
            localizer = _this$props.localizer
          var _this$props$position = this.props.position,
            left = _this$props$position.left,
            width = _this$props$position.width,
            top = _this$props$position.top,
            topOffset = (this.state || {}).topOffset || 0,
            leftOffset = (this.state || {}).leftOffset || 0
          var style = {
            top: Math.max(0, top - topOffset),
            left: left - leftOffset,
            minWidth: width + width / 2,
          }
          return _react.default.createElement(
            'div',
            {
              ref: 'root',
              style: style,
              className: 'rbc-overlay',
            },
            _react.default.createElement(
              'div',
              {
                className: 'rbc-overlay-header',
              },
              localizer.format(slotStart, 'dayHeaderFormat')
            ),
            events.map(function(event, idx) {
              return _react.default.createElement(_EventCell.default, {
                key: idx,
                type: 'popup',
                event: event,
                getters: getters,
                onSelect: onSelect,
                accessors: accessors,
                components: components,
                onDoubleClick: onDoubleClick,
                continuesPrior: _dates.default.lt(
                  accessors.end(event),
                  slotStart,
                  'day'
                ),
                continuesAfter: _dates.default.gte(
                  accessors.start(event),
                  slotEnd,
                  'day'
                ),
                selected: (0, _selection.isSelected)(event, selected),
              })
            })
          )
        },
      },
    ])

    return Popup
  })(_react.default.Component)

Popup.propTypes = propTypes
var _default = Popup
exports.default = _default
