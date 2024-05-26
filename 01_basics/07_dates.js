//Dates

let myDate = new Date();

// console.log(myDate.toDateString());
// console.log(myDate.toString());

let myNewDate = new Date("02-30-2024");
// console.log(myNewDate.toString());

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay() + 1);

newDate.toLocaleString("default", {
  weekday: "short",
});

console.log(newDate);
