export default class PageLocker {
    constructor() {
        this._initialScrollPosition = 0;
        this._retainers = {};
        this._isLocked = false;
        this._isCompensated = false;

        this.defaultOptions = {
            target: document.documentElement,
            useInlineStyles: true,
            lockedClass: 'is-locked',
            needCompensate: true,
            compensateClass: 'compensate-scroll',
            checkIOS: true,
            lockedClassIOS: 'is-locked-ios',
            onLock: null,
            onUnlock: null
        };

        this.options = this.defaultOptions;
        this._styleTag = this._makeStyleTag();
    }

    setOptions(options = {}) {
        this.options = { ...this.defaultOptions, ...options };
    }

    _makeStyleTag() {
        const tag = document.createElement('style');
        tag.setAttribute('type', 'text/css');
        document.head.appendChild(tag);
        return tag;
    }

    _compensate() {
        const scrollSize = this.getScrollbarSize();
        if (this.scrollbarSize !== scrollSize) {
            this.scrollbarSize = scrollSize;
            this._styleTag.innerHTML = `.${this.options.lockedClass} .${this.options.compensateClass} { padding-right: ${scrollSize}px}`;
        }
    }

    getScrollbarSize() {
        const scrollDiv = document.createElement('div');
        scrollDiv.style.cssText =
            'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
        document.body.appendChild(scrollDiv);
        const scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarSize;
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
                    this.options.target.style.width = '100%';
                }
            } else {
                if (this.options.needCompensate && !this._isCompensated) {
                    this._isCompensated = true;
                    this._compensate();
                }
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
