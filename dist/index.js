var SimpleEventEmitter = /** @class */ (function () {
    function SimpleEventEmitter() {
        this._events = {};
    }
    SimpleEventEmitter.prototype.on = function (event, callback) {
        var events = this._events[event] || (this._events[event] = []);
        events.push(callback);
    };
    ;
    SimpleEventEmitter.prototype.trigger = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var events = this._events[event]; //特定事件处理
        if (events) {
            var eventCount = events.length;
            for (var i = 0; i < eventCount; i++) {
                var ev = events[i];
                ev.apply(this, args);
            }
        }
    };
    SimpleEventEmitter.prototype.relayEvents = function (otherSource, relayEventsMapping) {
        var _this = this;
        var _loop_1 = function (index) {
            if (relayEventsMapping.hasOwnProperty(index)) {
                var mappedIndex_1 = relayEventsMapping[index];
                otherSource.on(index, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this.trigger.apply(_this, [mappedIndex_1].concat(args));
                });
            }
        };
        for (var index in relayEventsMapping) {
            _loop_1(index);
        }
    };
    return SimpleEventEmitter;
}());
export { SimpleEventEmitter };
//# sourceMappingURL=index.js.map