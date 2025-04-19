// Promises are placeholders that can be resolve or reject in future

new Promise((res, rej) => {
  res("success");
  rej("reject");
});

Promise.resolve(2)
  .then((res) => res + 3)
  .then((res) => res + 5)
  .then((res) => res * 2);


  const one = ( ) => Promise.resolve("one").then((res) => res )

  console.log(one())