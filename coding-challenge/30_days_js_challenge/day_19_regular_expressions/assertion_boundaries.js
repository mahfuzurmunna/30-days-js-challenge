const text = "word at the beginning";

const start= /^\b\w+\b/;
const end = /\b\w+\b$/;
const match = text.match(start);
const matchEnd = text.match(end);

if (match) {
  console.log("Matched word at the beginning:", match[0]);
} else {
  console.log("No match found at the beginning.");
}

console.log(matchEnd[0])