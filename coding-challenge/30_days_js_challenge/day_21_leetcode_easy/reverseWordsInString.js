let s = "a good   example";
// console.log(s.split(' '));

s = s.split(' ').reverse();

let result = [];
for(let char of s) {
    if(char !== '') {
        result.push(char);
    }
}

return result.join(' ');
// console.log(sArr.join(' '))

