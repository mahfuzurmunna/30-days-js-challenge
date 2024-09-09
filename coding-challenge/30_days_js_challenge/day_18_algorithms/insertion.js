/*
Insertion sorting

- time complexity
Min : O(n)
Max : O(n^2)

- it is an adaptive sorting
- it is also a stable sorting
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let x = arr[i];

    while (j > -1 && arr[j] > x) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = x;
  }

  return arr;
}

let arr = [2,5,1,3,89,12,53,10];

console.log(insertionSort(arr));