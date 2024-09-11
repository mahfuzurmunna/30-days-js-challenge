/*
Selection sorting

- time complexity
Min : O(n)
Max : O(n^2)

- it is an adaptive sorting
- it is also a stable sorting
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let k = i + 1;
    while (k < arr.length) {
      if (arr[j] > arr[k]) {
        j = k;
        k++;
      } else {
        k++;
      }
    }
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

const arr = [6, 24, 5, 1, 10, 2];

console.log(selectionSort(arr));
