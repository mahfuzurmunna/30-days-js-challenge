//array

// console.log(myArr2[1]);
// console.log(myArr[5]);
// console.log(myArr.includes(6));

//important method

const myArr = [1, 2, 3, 4, 5, 6];

const myArr2 = new Array(1, 2, 3, 5, 6);
const newArr = myArr.join();

const spliceArr = myArr.splice(1, 3, 10);
// const sliceArr = console.log(spliceArr);
// console.log(myArr);

/* array-02 */

const marvel_hero = ["thor", "ironman", "spiderman"];

const dc_heros = ["superman", "flash", "batman"];

const allHero = marvel_hero.concat(dc_heros);

console.log(marvel_hero);

// spread operation
const all_new_heros = [...marvel_hero, ...dc_heros];

// console.log(all_new_heros);

//interesting situation

const anotherArray = [1, 3, 4, [5, 8], "hello", [11, [12, 7]]];

const normalizeArray = anotherArray.flat(3);

// console.log(normalizeArray);
const name = "Mahfuz";
console.log(Array.isArray("Munna"));
console.log(Array.from(300));
console.log(Array.of("munna")); //intersting case

let score1 = 100;
let score3 = 300;
console.log(Array.of(score1, score3));
