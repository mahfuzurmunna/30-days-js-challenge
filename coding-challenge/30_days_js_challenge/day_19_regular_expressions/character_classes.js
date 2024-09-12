/** 
------------------------ 
Activity 2: Character Classes and Quantifiers
------------------------
**/

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const text = 'This is a sample String';

const regex = /\b[A-Z][a-z]*\b/g;

console.log(text.match(regex));


// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const digit = 'One 1 or 23 digits here';

const regex2 = /\b[0-9]+\b/g; // one way
const anotherRegex = /\d+/g; // another way
console.log(digit.match(anotherRegex));