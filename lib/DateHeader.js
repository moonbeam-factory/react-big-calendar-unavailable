'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var DateHeader = function DateHeader(_ref) {
  var label = _ref.label,
    drilldownView = _ref.drilldownView,
    onDrillDown = _ref.onDrillDown

  if (!drilldownView) {
    return _react.default.createElement('span', null, label)
  }

  return _react.default.createElement(
    'a',
    {
      href: '#',
      onClick: onDrillDown,
    },
    label
  )
}

DateHeader.propTypes = {
  label: _propTypes.default.node,
  date: _propTypes.default.instanceOf(Date),
  drilldownView: _propTypes.default.string,
  onDrillDown: _propTypes.default.func,
  isOffRange: _propTypes.default.bool,
}
var _default = DateHeader
exports.default = _default
