# Glove
Glove is a library help you store data with window object uniformity. It just like a glove box.

## Usage

### Install

```bash
$ npm install glove
```

### use case

```javascript
var store = require('glove').pick('yourGloveBox');

// store on window object
store.set('name', 'Randy');
store.get('name') // Randy

store.$set('historyName', 'djyde');
store.$get('historyName') // djyde

```

# License

MIT License

