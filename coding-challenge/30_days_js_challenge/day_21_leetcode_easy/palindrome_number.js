var isPalindrome = function (x) {
  let numStr = x.toString();
  let i = 0;
  let j = numStr.length-1;

  while ( i < j) {
    if(numStr[i] !== numStr[j]) {
        return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(isPalindrome(10))
