var kidsWithCandies = function (candies, extraCandies) {
  let maxCandy = Math.max(...candies);
  let result = candies.map((candy) => {
     return candy + extraCandies >= maxCandy ? true : false;
  });
  return result
};

let candies = [4, 2, 1, 1, 2];
let extraCandies = 1;

console.log(kidsWithCandies(candies,extraCandies));
