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
