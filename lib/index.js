"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleEventEmitter = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SimpleEventEmitter =
/*#__PURE__*/
function () {
  function SimpleEventEmitter() {
    _classCallCheck(this, SimpleEventEmitter);

    _defineProperty(this, "_events", {});
  }

  _createClass(SimpleEventEmitter, [{
    key: "on",
    value: function on(event, callback) {
      var events = this._events[event] || (this._events[event] = []);
      events.push(callback);
    }
  }, {
    key: "trigger",
    value: function trigger(event) {
      var events = this._events[event]; //特定事件处理

      if (events) {
        var eventCount = events.length;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        for (var i = 0; i < eventCount; i++) {
          var ev = events[i];
          ev.apply(this, args);
        }
      }
    }
  }, {
    key: "relayEvents",
    value: function relayEvents(otherSource, relayEventsMapping) {
      var _this = this;

      for (var index in relayEventsMapping) {
        if (relayEventsMapping.hasOwnProperty(index)) {
          (function () {
            var mappedIndex = relayEventsMapping[index];
            otherSource.on(index, function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              _this.trigger.apply(_this, [mappedIndex].concat(args));
            });
          })();
        }
      }
    }
  }]);

  return SimpleEventEmitter;
}();

exports.SimpleEventEmitter = SimpleEventEmitter;
//# sourceMappingURL=index.js.map