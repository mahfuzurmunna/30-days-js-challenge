var mergeAlternately = function(word1, word2) {
  let result = '';
  let i = 0;
  let j = 0;
  while(i<word1.length && j < word2.length) {
    result += word1[i];
    i++;
    result += word2[j];
    j++;
  } 

  for(; i< word1.length;i++) {
    result += word1[i];
  }

  for(; j<word2.length;j++) {
    result += word2[j];
  }
  return result;


};

let word1 = 'abcd';
let word2 = 'pq';

console.log(mergeAlternately(word1,word2));