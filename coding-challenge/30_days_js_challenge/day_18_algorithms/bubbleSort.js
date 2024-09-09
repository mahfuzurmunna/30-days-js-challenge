function bubbleSort (arr) {
  let flag = 0;
  const n = arr.length;

  for(let i = 0; i < n-1; i++) {
    for(let j = 0; j < n - 1 - i; j++) {
      if(arr[j] > arr[j+1] ) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        flag = 1;
      }
    }
    if(flag === 0) break;
  }

  return arr;
}

let arr = [5,2,6,4,8,1];
console.log(bubbleSort(arr));
