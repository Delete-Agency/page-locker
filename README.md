# Page Locker

[Live Demo](https://delete-agency.github.io/page-locker/)

## Motivation

TODO 

## Installation

Use the package manager [npm](https://docs.npmjs.com/about-npm/) for installation.

```
$ npm install @deleteagency/page-locker
```

## Usage

```js
import pageLocker from  '@deleteagency/page-locker';

pageLocker.lock('modal');
```

## Options

### targetElement

Type: `HTMLElement`<br>
Default: `document.documentElement`

Defines what element should we apply our lock logic to

### useInlineStyles

Type: `boolean`<br>
Default: `true`

Whether or not use out-of-the-box inline styles. If set to `false` you should defined your styles with `options.lockedClass` and `options.lockedClassIOS`

### lockedClass

Type: `string`<br>
Default: `is-locked`

### checkIOS

Type: `boolean`<br>
Default: `true`

### lockedClassIOS

Type: `string`<br>
Default: `is-locked`

### onLock

Type: `Function`<br>
Default: `null`

### onUnlock

Type: `Function`<br>
Default: `null`

## API

### pageLocaker.getScrollBarSize()

return width of scrollBar

### pageLocker.setOptions(options)

Sets options described in Options section

#### options

*Required*<br>
Type: `Object`

### pageLocker.lock(retainerId)

#### retainerId

*Required*<br>
Type: `string|integer`

### pageLocker.unlock(retainerId)

#### retainerId

*Required*<br>
Type: `string|integer`

## License
[MIT](https://choosealicense.com/licenses/mit/)
