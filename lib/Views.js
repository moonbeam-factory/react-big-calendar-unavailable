'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _constants = require('./utils/constants')

var _Month = _interopRequireDefault(require('./Month'))

var _Day = _interopRequireDefault(require('./Day'))

var _Week = _interopRequireDefault(require('./Week'))

var _WorkWeek = _interopRequireDefault(require('./WorkWeek'))

var _Agenda = _interopRequireDefault(require('./Agenda'))

var _VIEWS

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
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

var VIEWS = ((_VIEWS = {}),
_defineProperty(_VIEWS, _constants.views.MONTH, _Month.default),
_defineProperty(_VIEWS, _constants.views.WEEK, _Week.default),
_defineProperty(_VIEWS, _constants.views.WORK_WEEK, _WorkWeek.default),
_defineProperty(_VIEWS, _constants.views.DAY, _Day.default),
_defineProperty(_VIEWS, _constants.views.AGENDA, _Agenda.default),
_VIEWS)
var _default = VIEWS
exports.default = _default
