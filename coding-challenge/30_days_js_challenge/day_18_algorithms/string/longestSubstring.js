function longestSubstring(s) {
  let l = 0;
  let res = 0;
  let visited = new Set();
  for (let r = 0; r < s.length; r++) {
    while (visited.has(s[r])) {
      visited.delete(s[l]);
      l++;
    }
    visited.add(s[r]);
    console.log(visited)
    res = Math.max(res, r - l + 1);
  }
  return res;
}

let s = "pwwkew";

console.log(longestSubstring(s));
