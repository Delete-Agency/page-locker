class PageLocker {
    constructor() {
        this._initialScrollPosition = 0;
        this._retainers = {};
        this._isLocked = false;

        this.defaultOptions = {
            target: document.documentElement,
            useInlineStyles: true,
            lockedClass: 'is-locked',
            checkIOS: true,
            lockedClassIOS: 'is-locked-ios',
            onLock: null,
            onUnlock: null
        };

        this.options = this.defaultOptions;
    }

    setOptions(options = {}) {
        this.options = { ...this.defaultOptions, ...options };
    }

    lock(retainerId) {
        if (typeof retainerId === undefined) {
            throw new Error('You must specify the retainer which causes the lock');
        }

        this._retainers[retainerId] = true;
        if (!this._isLocked) {
            if (this.options.checkIOS && this._isIos()) {
                // save current scroll position in order to restore it after unlock
                this._initialScrollPosition = window.pageYOffset;
                this.options.target.style.top = -this._initialScrollPosition + 'px';
                this.options.target.classList.add(this.options.lockedClassIOS);
                if (this.options.useInlineStyles) {
                    this.options.target.style.position = 'fixed';
                    this.options.target.style.overflowY = 'scroll';
                    this.options.target.style.width = '100%';
                    this.options.target.style.height = 'auto';
                }
            } else {
                this.options.target.classList.add(this.options.lockedClass);
                if (this.options.useInlineStyles) {
                    this.options.target.style.overflowY = 'hidden';
                }
            }
            this._isLocked = true;

            if (this.options.onLock) {
                this.options.onLock();
            }
        }
    }

    unlock(source) {
        if (typeof source === undefined) {
            throw new Error('You must specify the retainer which stop the lock');
        }

        this._retainers[source] = false;
        if (this._isFree() && this._isLocked) {
            if (this.options.useInlineStyles) {
                this.options.target.style.cssText = null;
            }

            if (this.options.checkIOS && this._isIos()) {
                this.options.target.classList.remove(this.options.lockedClassIOS);
                window.scrollTo(0, this._initialScrollPosition);
            } else {
                this.options.target.classList.remove(this.options.lockedClass);
            }

            this._isLocked = false;

            if (this.options.onUnlock) {
                this.options.onUnlock();
            }
        }
    }

    _isFree() {
        return Object.keys(this._retainers).every(key => this._retainers[key] === false);
    }

    _isIos() {
        return !!navigator.platform.match(/iPhone|iPod|iPad/);
    }
}

const instance = new PageLocker();
export default instance;
