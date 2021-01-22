export declare enum lockClasses {
    simple = "is-blocked",
    ios = "is-blocked-touch"
}
export declare class PageLocker {
    private _initialScrollPosition;
    private _retainers;
    private _isLocked;
    private _target;
    private _isIOS;
    private _lockedClass;
    constructor();
    lock: (id: string) => void;
    unlock: (id: string) => void;
    private _isFree;
}
//# sourceMappingURL=index.d.ts.map