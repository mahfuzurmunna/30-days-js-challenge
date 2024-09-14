var merge = function (nums1, m, nums2, n) {
  let i,j,k = 0;
  let copyNums1 = [];
  for(let i = 0; i<m; i++) {
    copyNums1.push(nums1[i]);
  }

  while (j < n) {
    if(i < m && nums1[i] < nums2[j]) {
      newArr.push(nums1[i]);
      i++;
      k++;
    } else {
      newArr.push(nums2[j]);
      j++;
      k++;
    }
  }
  while(i < m) {
    newArr.push(nums1[i]);
    i++;
  }
  
 
  return newArr;
};

let nums1 = [1,2,3,0,0,0]
;
const newArr = Array.from(nums1);
// console.log(newArr)
let m = 3;
let nums2 = [2,5,6]
let n = 3;
console.log(merge(nums1,m,nums2,n));