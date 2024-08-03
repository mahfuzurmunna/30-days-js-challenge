const _ = require("lodash");

const numbers = [1, 2, 3, 4, 5];
const reverseNumbers = _.reverse([...numbers]);

console.log(`Original array: ${numbers}`);

console.log(`Reversed array: ${reverseNumbers}`);
