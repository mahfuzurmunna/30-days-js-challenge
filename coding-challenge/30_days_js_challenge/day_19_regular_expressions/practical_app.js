const password = "Wl1$hello";

const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// const match = password.match(regex);

// console.log(match);

const url = "https://www.youtube.com/watch?v=4AHElB820_Q";
const urlValidation = /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/gi;

// console.log(url.match(urlValidation));

