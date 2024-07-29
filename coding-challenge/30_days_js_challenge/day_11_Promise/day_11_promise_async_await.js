//understanding promises
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

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
