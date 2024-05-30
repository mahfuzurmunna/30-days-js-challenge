// for in ->
let games = ["NFS", "House of the dead", "Virtual Cop", "Dx Ball"];

let myObj = {
  hoby: "Game",
  work: "Soft Engineer",
  leisure: "Gym",
};
for (const value in myObj) {
  // console.log(value);
}

let myArr = [1, 23, 43, 32, 2];
for (const value in myObj) {
  // console.log(value);
}

const myString = "Munna";
// myString.reverse();
for (const char of myString) {
  // console.log(char);
}

const map = new Map();
// map.key()

map.set("BN", "Bangladesh");
map.set("EN", "English");
map.set("DN", "Dutch");

// console.log(map);

for (const [key, value] in map) {
  console.log(`${key} ->  ${value}`);
}

let progLang = [
  {
    languageName: "Javascript",
    languageSign: "JS",
  },
  {
    languageName: "Python",
    languageSign: "PY",
  },
  {
    languageName: "Typescript",
    languageSign: "TS",
  },
];

for (const key in progLang) {
  const element = progLang[key];
  // console.log(element);
}
for (const key in games) {
  // console.log(games[key]);
}

progLang.forEach(
  (lang) => (lang.languageSign = lang.languageSign.toLocaleLowerCase())
);
// console.log(progLang);

const newProg = progLang.map((lang) => {
  return lang.languageName === "Javascript" ? lang.languageName === "C++" : "";
});

console.log(newProg);
