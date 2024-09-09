/*
Quick sorting

# quick sorting uses partitionign procedure.
# also it uses recursive method
- time complexity
Min : O(n)
Max : O(n^2)

- it is an adaptive sorting
- it is also a stable sorting
*/

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);

    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[high];

  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

const arr = [2,1,3];

console.log(quickSort(arr));