function bubbleSort(arr) {
  let flag = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag += 1;
      }
    }
    if(flag === 0) break;

  }
  return arr;
}


const arr = [9,5,8,6,2,10];
console.log(bubbleSort(arr))