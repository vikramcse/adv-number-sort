# adv-number-sort
Sorts a number array in ascending or descending order

# Install
```sh
$ npm install --save adv-number-sort
```

## Examples

```js
var advSort = require('adv-number-sort');

console.log(advSort([1, 2, 3, 4], "desc"));
// -> [4, 3, 2, 1]

console.log(advSort([4, 3, 2, 1], "asc"));
// -> [1, 2, 3, 4]
```

## Usage

#### `require('o-size')( array, option )`

**Arguments**:
- `array`: list of numbers
- `option`: asc | desc, asc for sorting in ascending order, and desc for desending

**Returns**: Returns number array in ascending or descending order

## License
&copy; 2016 vikram. MIT License