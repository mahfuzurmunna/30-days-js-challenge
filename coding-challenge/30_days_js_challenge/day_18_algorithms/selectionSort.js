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
    let k = i ;
    while (k < arr.length) {
      if (arr[k] < arr[j]) {
      j = k;
      k++;
      } else {
        k++;
      }
    }
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

const arr = [6, 24, 5, 1, 10, 2];

console.log(selectionSort(arr));
