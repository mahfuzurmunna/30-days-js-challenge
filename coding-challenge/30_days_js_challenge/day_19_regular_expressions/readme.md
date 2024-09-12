# Day-19 : Regular Expressions of Javascript


### 1. Basic Regex Script 
Write a script that uses regular expressions to match `simple patterns` and log the matches.

```javascript
const text = 'Javascript is a very popular programming lagnuage which can be used both for frontend and backend';

const regex = /javascript/ig;
const match = text.match(regex);
```

### 2. Character Classes and Quantifiers Script
 Create a script that uses regular expressions to match words with `specific characteristics` and log the matches.

 ```javascript
const text = 'Javascript is a versatile language. Javascript can be used for both frontend and backend';

const regex = /\b\w{5}\b/g;
const match = text.match(regex);
```
### 3. Grouping and Capturing Script: 
 Write a script that uses regular expressions to capture parts of a string, such as `phone numbers` and `email addresses`, and log the captures.

 ```javascript
const name = 'my name is munna my number is : 01617584458 and my email address is mahfuzrm07@gmail.com';

const phone = /\d{11,}/g;
const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

const emailMatches = text.match(emailRegex);
const phoneMatches = text.match(phone);
```

### 4. Assertions and Boundaries Script:
 Create a script that uses regular expressions to match words at `specific positions` in a string and log the matches.

 ```javascript
const text = "The quick brown fox jumps over the lazy dog.";

// Regular expression to match the first word
const firstWordRegex = /^\b\w+\b/;

// Regular expression to match the last word
const lastWordRegex = /\b\w+\b$/;

// Regular expression to match words at the beginning of the string (first 3 words)
const beginningWordsRegex = /^\b\w+\b(?:\s+\b\w+\b){0,2}/;

// Regular expression to match words at the end of the string (last 3 words)
const endWordsRegex = /(?:\b\w+\b\s+){0,2}\b\w+\b$/;

// Find matches
const firstWord = text.match(firstWordRegex);
const lastWord = text.match(lastWordRegex);
const beginningWords = text.match(beginningWordsRegex);
const endWords = text.match(endWordsRegex);

// Log the results
console.log("First word:", firstWord ? firstWord[0] : "No match");
console.log("Last word:", lastWord ? lastWord[0] : "No match");
console.log("Words at the beginning:", beginningWords ? beginningWords[0] : "No match");
console.log("Words at the end:", endWords ? endWords[0] : "No match");

 ```


 ### 5. Validation Script
 Write a script that uses regular expressions to validate `passwords` and `URLs` and log whether they are valid.

 ```javascript
const password = "Wl1$hello";

const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// const match = password.match(regex);

// console.log(match);

const url = "https://www.youtube.com/watch?v=4AHElB820_Q";
const urlValidation = /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/gi;

// console.log(url.match(urlValidation));


 ```