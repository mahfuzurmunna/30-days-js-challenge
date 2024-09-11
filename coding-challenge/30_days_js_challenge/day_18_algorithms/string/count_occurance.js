function countOccurance(str) {
  let visited = new Map();
  for (const letter of str) {
    visited.set(letter, (visited.get(letter) || 0) + 1);
  }
  
  let count = Array.from(visited.entries()).map(([letter,count]) => `${letter}: ${count}`).join(', ');
 
 
  return count;
}
let str = "occurance";

console.log(countOccurance(str));
