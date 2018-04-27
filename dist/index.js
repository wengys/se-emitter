export class SimpleEventEmitter {
    constructor() {
        this._events = {};
    }
    on(event, callback) {
        let events = this._events[event] || (this._events[event] = []);
        events.push(callback);
    }
    ;
    trigger(event, ...args) {
        var events = this._events[event]; //特定事件处理
        if (events) {
            let eventCount = events.length;
            for (let i = 0; i < eventCount; i++) {
                let ev = events[i];
                ev.apply(this, args);
            }
        }
    }
    relayEvents(otherSource, relayEventsMapping) {
        for (let index in relayEventsMapping) {
            if (relayEventsMapping.hasOwnProperty(index)) {
                let mappedIndex = relayEventsMapping[index];
                otherSource.on(index, (...args) => {
                    this.trigger(mappedIndex, ...args);
                });
            }
        }
    }
}
//# sourceMappingURL=index.js.map