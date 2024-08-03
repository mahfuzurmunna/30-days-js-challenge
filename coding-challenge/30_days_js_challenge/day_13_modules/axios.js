const axios = require("axios").default;

async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(`Title: ${response.data.title}`);
    console.log(`Body: ${response.data.body}`);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
