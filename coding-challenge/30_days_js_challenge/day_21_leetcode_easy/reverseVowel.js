var reverseVowels = function (s) {
  let vowels = "AEIOUaeiou";
  let vowelArr = [];
  let result = '';
  for (let char of s) {
    if (vowels.includes(char)) {
      vowelArr.push(char);
    }
  }

  let i = 0;
  let j = vowelArr.length-1;
  while(i < s.length) {
    if(vowels.includes(s[i])){
        // console.log(s[i])
        result += vowelArr[j];
        console.log(vowelArr[j]);
        j--;
    } else {
        result += s[i];
    }
    i++;
  }

  return result;
};

const s = 'IceCreAm';
console.log(reverseVowels(s));
