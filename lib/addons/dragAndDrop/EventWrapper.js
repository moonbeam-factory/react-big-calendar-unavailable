'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _classnames = _interopRequireDefault(require('classnames'))

var _propTypes2 = require('../../utils/propTypes')

var _accessors = require('../../utils/accessors')

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

var EventWrapper =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(EventWrapper, _React$Component)

    function EventWrapper() {
      var _getPrototypeOf2

      var _this

      _classCallCheck(this, EventWrapper)

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(EventWrapper)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleResizeUp',
        function(e) {
          if (e.button !== 0) return
          e.stopPropagation()

          _this.context.draggable.onBeginAction(
            _this.props.event,
            'resize',
            'UP'
          )
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleResizeDown',
        function(e) {
          if (e.button !== 0) return
          e.stopPropagation()

          _this.context.draggable.onBeginAction(
            _this.props.event,
            'resize',
            'DOWN'
          )
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleResizeLeft',
        function(e) {
          if (e.button !== 0) return
          e.stopPropagation()

          _this.context.draggable.onBeginAction(
            _this.props.event,
            'resize',
            'LEFT'
          )
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleResizeRight',
        function(e) {
          if (e.button !== 0) return
          e.stopPropagation()

          _this.context.draggable.onBeginAction(
            _this.props.event,
            'resize',
            'RIGHT'
          )
        }
      )

      _defineProperty(
        _assertThisInitialized(_assertThisInitialized(_this)),
        'handleStartDragging',
        function(e) {
          if (e.button === 0) {
            _this.context.draggable.onBeginAction(_this.props.event, 'move')
          }
        }
      )

      return _this
    }

    _createClass(EventWrapper, [
      {
        key: 'renderAnchor',
        value: function renderAnchor(direction) {
          var cls = direction === 'Up' || direction === 'Down' ? 'ns' : 'ew'
          return _react.default.createElement(
            'div',
            {
              className: 'rbc-addons-dnd-resize-'.concat(cls, '-anchor'),
              onMouseDown: this['handleResize'.concat(direction)],
            },
            _react.default.createElement('div', {
              className: 'rbc-addons-dnd-resize-'.concat(cls, '-icon'),
            })
          )
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            event = _this$props.event,
            type = _this$props.type,
            continuesPrior = _this$props.continuesPrior,
            continuesAfter = _this$props.continuesAfter
          var children = this.props.children
          if (event.__isPreview)
            return _react.default.cloneElement(children, {
              className: (0, _classnames.default)(
                children.props.className,
                'rbc-addons-dnd-drag-preview'
              ),
            })
          var draggable = this.context.draggable
          var draggableAccessor = draggable.draggableAccessor,
            resizableAccessor = draggable.resizableAccessor
          var isDraggable = draggableAccessor
            ? !!(0, _accessors.accessor)(event, draggableAccessor)
            : true
          /* Event is not draggable, no need to wrap it */

          if (!isDraggable) {
            return children
          }
          /*
           * The resizability of events depends on whether they are
           * allDay events and how they are displayed.
           *
           * 1. If the event is being shown in an event row (because
           * it is an allDay event shown in the header row or because as
           * in month view the view is showing all events as rows) then we
           * allow east-west resizing.
           *
           * 2. Otherwise the event is being displayed
           * normally, we can drag it north-south to resize the times.
           *
           * See `DropWrappers` for handling of the drop of such events.
           *
           * Notwithstanding the above, we never show drag anchors for
           * events which continue beyond current component. This happens
           * in the middle of events when showMultiDay is true, and to
           * events at the edges of the calendar's min/max location.
           */

          var isResizable = resizableAccessor
            ? !!(0, _accessors.accessor)(event, resizableAccessor)
            : true

          if (isResizable || isDraggable) {
            /*
             * props.children is the singular <Event> component.
             * BigCalendar positions the Event abolutely and we
             * need the anchors to be part of that positioning.
             * So we insert the anchors inside the Event's children
             * rather than wrap the Event here as the latter approach
             * would lose the positioning.
             */
            var newProps = {
              onMouseDown: this.handleStartDragging,
              onTouchStart: this.handleStartDragging,
            }

            if (isResizable) {
              // replace original event child with anchor-embellished child
              var StartAnchor = null
              var EndAnchor = null

              if (type === 'date') {
                StartAnchor = !continuesPrior && this.renderAnchor('Left')
                EndAnchor = !continuesAfter && this.renderAnchor('Right')
              } else {
                StartAnchor = !continuesPrior && this.renderAnchor('Up')
                EndAnchor = !continuesAfter && this.renderAnchor('Down')
              }

              newProps.children = _react.default.createElement(
                'div',
                {
                  className: 'rbc-addons-dnd-resizable',
                },
                StartAnchor,
                children.props.children,
                EndAnchor
              )
            }

            if (
              draggable.dragAndDropAction.interacting && // if an event is being dragged right now
              draggable.dragAndDropAction.event === event // and it's the current event
            ) {
              // add a new class to it
              newProps.className = (0, _classnames.default)(
                children.props.className,
                'rbc-addons-dnd-dragged-event'
              )
            }

            children = _react.default.cloneElement(children, newProps)
          }

          return children
        },
      },
    ])

    return EventWrapper
  })(_react.default.Component)

_defineProperty(EventWrapper, 'contextTypes', {
  draggable: _propTypes.default.shape({
    onStart: _propTypes.default.func,
    onEnd: _propTypes.default.func,
    onBeginAction: _propTypes.default.func,
    draggableAccessor: _propTypes2.accessor,
    resizableAccessor: _propTypes2.accessor,
    dragAndDropAction: _propTypes.default.object,
  }),
})

_defineProperty(EventWrapper, 'propTypes', {
  type: _propTypes.default.oneOf(['date', 'time']),
  event: _propTypes.default.object.isRequired,
  draggable: _propTypes.default.bool,
  allDay: _propTypes.default.bool,
  isRow: _propTypes.default.bool,
  continuesPrior: _propTypes.default.bool,
  continuesAfter: _propTypes.default.bool,
  isDragging: _propTypes.default.bool,
  isResizing: _propTypes.default.bool,
})

var _default = EventWrapper
exports.default = _default
