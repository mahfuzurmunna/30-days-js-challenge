// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

function twoArraySort(arr1, arr2) {
  const m = arr1.length;
  const n = arr2.length;
  let i = 0,
    j = 0,
    k = 0;
  let result = [];

  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      result[k] = arr1[i];
      k++;
      i++;
    } else {
      result[k] = arr2[j];
      k++;
      j++;
    }
  }
  for (; i < m; i++) {
    result[k] = arr1[i];
    k++;
  }
  for (; j < n; j++) {
    result[k] = arr2[j];
    k++;
  }

  return result;
}

const arr1 = [5, 36, 1, 276, 23, 24, 9];
const arr2 = [6, 9, 12, 2, 56, 3, 6];

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivotIndex = transition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function transition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (j > -1 && arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

let firstArr = quickSort(arr1);
let secondArr = quickSort(arr2);

// console.log("first:", firstArr, "\n", "Second:", secondArr);

console.log("After merging two sorted arr:", "\n", twoArraySort(firstArr, secondArr));
