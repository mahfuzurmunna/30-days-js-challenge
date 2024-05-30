const userEmail = "h@hitesh.ai";

if (userEmail) {
  console.log("User logged in");
} else {
  console.log("Don't have user email");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
} else {
  console.log("object has elements");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;

function sum(a, b) {
  return a + b;
}

console.log(typeof sum(2, "3"));
