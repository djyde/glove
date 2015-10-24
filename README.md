# Glove

[![NPM version](https://img.shields.io/npm/v/runfile.svg?style=flat-square)](https://www.npmjs.com/package/glove)
[![NPM download](https://img.shields.io/npm/dm/runfile.svg?style=flat-square)](https://www.npmjs.com/package/glove)

![LOGO](http://ww4.sinaimg.cn/large/62580dd9gw1excdwl15gyj203k03kq2s.jpg)

📦 Glove is a library help you store data with window object uniformity. It just like a glove box.

## Usage

### Install

CommonJS:

```bash
$ npm install glove
```

### use case

```javascript
var store = require('glove').pick('yourGloveBox');

// store in window object
store.set('name', 'Randy');
store.get('name') // Randy

store.set('score', 0);
store.inc('score', 5); // store.get('score') === 5
store.dec('score', 5); // store.get('score') === 0

// store in localStorage
store.$set('historyName', 'djyde');
store.$get('historyName') // djyde



```

# License

MIT License

