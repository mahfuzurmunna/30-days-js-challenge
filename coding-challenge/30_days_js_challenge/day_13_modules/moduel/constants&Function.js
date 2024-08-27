const arr = [1, 2, 3];

const name = "munnam";
const age = 27;

function reverse(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result.join('');
}

module.exports = { arr, name, age, reverse };
