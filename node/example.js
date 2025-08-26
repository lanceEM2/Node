const _ = require('lodash') // gotten from lodash dependancy in package.json

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)