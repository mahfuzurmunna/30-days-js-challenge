function binarySearch(arr, target, low = 0, high = arr.length) {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return true;

    if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
}

function recursiveBinarySearch(arr, target, low = 0, high = arr.length) {
  if (low > high) return false;
  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) return true;

  if (arr[mid] > target) {
    return recursiveBinarySearch(arr, target, low, mid - 1);
  } else {
    return recursiveBinarySearch(arr, target, mid + 1, high);
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(recursiveBinarySearch(arr, 8));
