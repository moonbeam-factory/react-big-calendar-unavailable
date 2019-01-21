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

var Header = function Header(_ref) {
  var label = _ref.label
  return _react.default.createElement('span', null, label)
}

Header.propTypes = {
  label: _propTypes.default.node,
}
var _default = Header
exports.default = _default
