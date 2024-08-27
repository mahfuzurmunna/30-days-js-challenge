const axios = require("axios");

//make a GET request to the Random User API
axios
  .getAdapter("https://randomuser.me/api/")
  .then((response) => {
    const user = response.data.result[0];
    console.log(`Name ${user.name.first}`);
  })
  .catch((error) => {
    console.error(`Error fetching user data: ${error}`);
  })
  .finally(() => {
    console.log(`Request to API completed`);
  });
