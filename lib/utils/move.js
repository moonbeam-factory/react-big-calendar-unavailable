'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = moveDate

var _invariant = _interopRequireDefault(require('invariant'))

var _constants = require('./constants')

var _Views = _interopRequireDefault(require('../Views'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
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

function moveDate(View, _ref) {
  var action = _ref.action,
    date = _ref.date,
    today = _ref.today,
    props = _objectWithoutProperties(_ref, ['action', 'date', 'today'])

  View = typeof View === 'string' ? _Views.default[View] : View

  switch (action) {
    case _constants.navigate.TODAY:
      date = today || new Date()
      break

    case _constants.navigate.DATE:
      break

    default:
      ;(0, _invariant.default)(
        View && typeof View.navigate === 'function',
        'Calendar View components must implement a static `.navigate(date, action)` method.s'
      )
      date = View.navigate(date, action, props)
  }

  return date
}
