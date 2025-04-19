//task 01: promise resolve

// const promiseOne = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("the promise is resolved");
//   }, 2000);
// });

// promiseOne
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//task 02: promise reject

// const promiseTwo = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("This promise is rejected");
//   }, 0);
// })
//   .then(() => {
//     console.log("Promise is resolved from new promise");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//task 03: chaining promises

// const data = fetch("https://jsonplaceholder.typicode.com/users");

// function fetchDataFromServer(message, delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       try {
//         console.log("resolved message: ", message);
//         res(message);
//       } catch (error) {
//         console.log(error);
//         rej(error);
//       }
//     }, delay);
//   });
// }

// fetchDataFromServer('Fetching data from server... Step 1', 1000)
//   .then((result) => {
//     return fetchDataFromServer('Processing data... Step 2', 2000);
//   })
//   .then((result) => {
//     return fetchDataFromServer('Finalizing data processing... Step 3', 1500);
//   })
//   .then((result) => {
//     console.log('All data fetched and processed.');
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// const promiseThree = new Promise((res, rej) => {
//   setTimeout(() => {
//     let success = false;
//     if (success) {
//       res({
//         myUni: "JU",
//         location: "savar",
//       });
//     } else {
//       rej("Failed");
//     }
//   }, 0);
// });

// async function recieveDataAndLog() {
//   try {
//     const data = await promiseThree;
//     console.log("user data: ", data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// recieveDataAndLog();

// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log("user", data);
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// fetchData();

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task completed");
    resolve();
  }, );
});

promiseOne.then(() => {
  console.log("Promise one resolved");
});

const promiseTwo = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise two :Data recieved");
  }, 2000);
}).then((data) => {
  console.log(data);
});

const promiseThree = new Promise((res, rej) => {
  setTimeout(() => {
    res({ name: "munna", age: 20 });
  });
});

promiseThree.then((data) => {
  console.log("Promise three", data);
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resposne) => {
    return resposne.json();
  })
  .then((response) => {
    console.log("fetched data", response);
  })
  .catch((error) => {
    console.log(error);
  });

function fetchDataFromServer2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data from server2");
    }, 2000);
  });
}

function fetchDataFromServer3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 3");
    }, 1000);
  });
}

function fetchDataFromServer4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 4");
    }, 1500);
  });
}

Promise.all([
  fetchDataFromServer2(),
  fetchDataFromServer3(),
  fetchDataFromServer4(),
])
  .then((resuts) => {
    console.log("All data fetched", resuts);
  })
  .catch((error) => {
    console.error("Error", error);
  });
