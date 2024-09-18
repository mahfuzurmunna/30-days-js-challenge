var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  let a = str1.length;
  let b = str2.length;

  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return str1.substring(0, a);
};

// recursive
function gcdOfString(str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  function gcd(a, b) {
    if (b.length === 0) {
      return a;
    }
    return gcd(b, a.slice(0, a.length % b.length));
  }
  return gcd(str1, str2);
}

let str1 = "ABCABC";
let str2 = "ABC";

console.log(gcdOfStrings(str1, str2));
