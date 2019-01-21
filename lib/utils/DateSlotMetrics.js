'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.getSlotMetrics = getSlotMetrics

var _memoizeOne = _interopRequireDefault(require('memoize-one'))

var _dates = _interopRequireDefault(require('./dates'))

var _eventLevels2 = require('./eventLevels')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
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

var isSegmentInSlot = function isSegmentInSlot(seg, slot) {
  return seg.left <= slot && seg.right >= slot
}

var isEqual = function isEqual(a, b) {
  return a.range === b.range && a.events === b.events
}

function getSlotMetrics() {
  return (0, _memoizeOne.default)(function(options) {
    var range = options.range,
      events = options.events,
      maxRows = options.maxRows,
      minRows = options.minRows,
      accessors = options.accessors

    var _endOfRange = (0, _eventLevels2.endOfRange)(range),
      first = _endOfRange.first,
      last = _endOfRange.last

    var segments = events.map(function(evt) {
      return (0, _eventLevels2.eventSegments)(evt, range, accessors)
    })

    var _eventLevels = (0, _eventLevels2.eventLevels)(
        segments,
        Math.max(maxRows - 1, 1)
      ),
      levels = _eventLevels.levels,
      extra = _eventLevels.extra

    while (levels.length < minRows) {
      levels.push([])
    }

    return {
      first: first,
      last: last,
      levels: levels,
      extra: extra,
      range: range,
      slots: range.length,
      clone: function clone(args) {
        var metrics = getSlotMetrics()
        return metrics(_objectSpread({}, options, args))
      },
      getDateForSlot: function getDateForSlot(slotNumber) {
        return range[slotNumber]
      },
      getSlotForDate: function getSlotForDate(date) {
        return range.find(function(r) {
          return _dates.default.eq(r, date, 'day')
        })
      },
      getEventsForSlot: function getEventsForSlot(slot) {
        return segments
          .filter(function(seg) {
            return isSegmentInSlot(seg, slot)
          })
          .map(function(seg) {
            return seg.event
          })
      },
      continuesPrior: function continuesPrior(event) {
        return _dates.default.lt(accessors.start(event), first, 'day')
      },
      continuesAfter: function continuesAfter(event) {
        var eventEnd = accessors.end(event)

        var singleDayDuration = _dates.default.eq(
          accessors.start(event),
          eventEnd,
          'minutes'
        )

        return singleDayDuration
          ? _dates.default.gte(eventEnd, last, 'minutes')
          : _dates.default.gt(eventEnd, last, 'minutes')
      },
    }
  }, isEqual)
}
