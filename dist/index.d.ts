export interface EventCallback {
    (...args: any[]): void;
}
export declare abstract class SimpleEventEmitter {
    private _events;
    on(event: string, callback: EventCallback): void;
    protected trigger(event: string, ...args: any[]): void;
    protected relayEvents(otherSource: SimpleEventEmitter, relayEventsMapping: {
        [indexer: string]: string;
    }): void;
}
