# Page Locker

[Live Demo](https://delete-agency.github.io/page-locker/)

## Motivation

On opening a modal window you have to prevent your main page from scrolling, so generally you can just set "overflow: hidden" on document.documentElement, but it won't work with iOS devices, so there is a need for a little bit tricky way via using "position: fixed" and setting the scroll position. So we can just use two simple methods to lock and unlock a page.

## Installation

Use the package manager [npm](https://docs.npmjs.com/about-npm/) for installation.

```
$ npm install @deleteagency/page-locker
```

## Usage

```scss
html {
    &.is-blocked {
        overflow: hidden;
    }

    &.is-blocked-touch {
        position: fixed;
        overflow-y: scroll;
        width: 100%;
        height: auto;
    }
}
```

```js
import { PageLocker } from  '@deleteagency/page-locker';

const pageLocker = new PageLocker();

pageLocker.lock('modal');
```


## API


### pageLocker.lock(retainerId)

#### retainerId

*Required*<br>
Type: `string`

### pageLocker.unlock(retainerId)

#### retainerId

*Required*<br>
Type: `string`

## License
[MIT](https://choosealicense.com/licenses/mit/)
