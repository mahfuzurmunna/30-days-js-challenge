function rotateArray(arr, k) {
    k = k % arr.length;
  let result = [];

  for (let i = arr.length - k; i < arr.length; i++) {
    result.push(arr[i]);
  }

  for (let i = 0; i < arr.length-k; i++) {
    result.push(arr[i]);
  }

  return result;
}

let arr = [1, 2, 3, 4, 5];

console.log(rotateArray(arr, 3));
