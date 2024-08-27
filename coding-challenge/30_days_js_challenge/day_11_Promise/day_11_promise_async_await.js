// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve("Task has been resolved");
    } else {
      reject("There is a defect");
    }
  }, 2000);
});

promiseOne
  .then((result) => {
    // console.log(result);
  })
  .catch((error) => {
    // console.log(error);
  });

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

function fetchDataFromServer(data, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(`Fetched data : ${data}`);
      resolve(data);
    }, delay);
  });
}

fetchDataFromServer("Data 1 ", 1000)
  .then(() => fetchDataFromServer("Data 2", 2000))
  .then(() => fetchDataFromServer("Data 3", 3000))
  .then(() => {
    // console.log("All data fetched successfully");
  })
  .catch((error) => {
    // console.error("An error occured", error);
  });

// Task 4 & 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
function resolveAfter25seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve("resolved 🎯");
      } else {
        reject("Fatal error ⚠️");
      }
    }, 2500);
  });
}

async function wait() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
// wait();

function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    .then((response) => response.json())
    .then((data) => console.log("Comment Data:", data))
    .catch((error) => console.error(error));
}

// fetchData();

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const promiseSix = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/comment?postId=1")
    .then((response) => {
      if (!response.ok) {
        reject(`HTTP error! status: ${response.status}`);
      }
      const data = response.json();
      return data;
    })
    .then((data) => resolve(data))
    .catch((error) => {
      reject(error);
    });
});

promiseSix
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function publicData() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const result = await data.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

publicData();
/** 
promise1.then((message) => {
  console.log(message);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rejected after 3 seconrd");
  }, 3000);
});

promise2
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

//chaining promises
const fetchData1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Fetched data from server 1");
    resolve("Data 1");
  }, 1000);
});

const fetchData2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Fetched data from server 2");
    resolve("Data 2");
  }, 2000);
});

const fetchData3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Fetched data from server 3");
    resolve("Data 3");
  }, 3000);
});

fetchData1
  .then((result1) => {
    console.log(result1);
    return fetchData2;
  })
  .then((result2) => {
    console.log(result2);
    return fetchData3;
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((error) => {
    console.error(error);
  });

//Async/Await
function resolveAfter25seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 2 seconds");
    }, 2000);
  });
}

async function logResolvedValue() {
  const result = await resolveAfter25seconds();
  console.log(result);
}

// logResolvedValue();

function rejectAfter2Seconrd() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Rejected the function after 2 seconds");
    }, 4000);
  });
}

async function logRejectedValue() {
  try {
    const result = rejectAfter2Seconrd();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// logRejectedValue();

// fetcing data from an PUBLIC API
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network reponse was not ok" + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data fetched using promises: ", data);
  })
  .catch((error) => {
    console.error("There has been a problem:", error);
  });

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2"
    );
    if (!response.ok) {
      throw new Error("Network reponse was not ok" + response.statusText);
    }
    const data = await response.json();
    console.log("Data fetched using async/await: ", data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
// fetchData();

//concurrent promises
const promise5 = new Promise((resolve) =>
  setTimeout(resolve, 1000, "first promise resolved")
);

const promise6 = new Promise((resolve) =>
  setTimeout(resolve, 1000, "second promise resolved")
);

const promise7 = new Promise((resolve) =>
  setTimeout(resolve, 3000, "Third promise resolved")
);

Promise.all([promise5, promise6, promise7])
  .then((values) => {
    console.log("All promises resolved");
    console.log(values);
  })
  .catch((error) => {
    console.error("One of the promises rejected: ", error);
  });

// Three promises that resolve after different times
const promiseA = new Promise((resolve) =>
  setTimeout(resolve, 1000, "A promise resolved")
);
const promiseB = new Promise((resolve) =>
  setTimeout(resolve, 2000, "B promise resolved")
);
const promiseC = new Promise((resolve) =>
  setTimeout(resolve, 3000, "C promise resolved")
);
Promise.race([promiseA, promiseB, promiseC])
  .then((value) => {
    console.log("$First promise resolved:", value); // 'First promise resolved'
  })
  .catch((error) => {
    console.error("$One of the promises rejected:", error);
  });
*/
