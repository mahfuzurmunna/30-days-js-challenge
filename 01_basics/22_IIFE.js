// Immediately Invoked Function Expressions
(function coffee() {
  // named IIFE
  console.log(`DB Connected`);
})();

//arrow function
((name) => {
  console.log(`Server Connected ${name}`);
})("Munna");
