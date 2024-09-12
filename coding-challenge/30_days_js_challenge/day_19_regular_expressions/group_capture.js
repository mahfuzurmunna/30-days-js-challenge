// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number

const usNumber = "(123) 456-7890";

const regex = /^\((\d{3})\) (\d{3})-(\d{4})$/;

const match = usNumber.match(regex);

// if(match) {
//     const areacode = match[1];
//     const centralOfficeCode = match[2];
//     const lineNumber = match[3];

//     console.log('Area code:', areacode);
//     console.log("Central Code", centralOfficeCode);
//     console.log('Line Number', lineNumber);
// } else {
//     console.log('Invalid phone number format');
// }

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

const email = "mahfuzur-rm07@gmail.com";

const captureRegex = /^([\w\.\-]+)@([\w\-]+\.[\w\.]+)$/;
const capture = email.match(captureRegex);

if (capture) {
  const username = capture[1];
  const domain = capture[2];
  const whole = capture.input;
  console.log("Username:", username, "Domain:", domain, "whole:", whole);
}


