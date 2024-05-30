//test data 1
const dolphineScore = [104, 95, 89];
const koalasScore = [88, 91, 110];

// test data 2
// const dolphineScore = [97, 104, 101];
// const koalasScore = [109, 95, 106];

//sum of team scores
let dolphineScoreSum = dolphineScore.reduce((accum, score) => {
  return accum + score;
}, 0);
let koalasScoreSum = koalasScore.reduce((accum, score) => {
  return accum + score;
}, 0);

console.log(dolphineScoreSum, koalasScoreSum);

//average of the team scores;
const dolphineAvg = dolphineScoreSum / dolphineScore.length;
const koalasAvg = koalasScoreSum / koalasScore.length;

//comparing the avg of the team score

// dui team er jeokono aktar score 100 er upore hoite hobe, nahole keu e jitbe na
// jar point beshi hobe plus 100 er upore hobe shei e jitbe

//same point hoile draw hobe

//
if (dolphineAvg >= 100 || koalasAvg >= 100) {
  if (dolphineAvg === koalasAvg) {
    console.log(`Its a draw😂`);
  } else if (dolphineAvg > koalasAvg) {
    console.log(`dolphineAvg wins with score ${dolphineAvg}`);
  } else {
    console.log(`koalas wins with score ${koalasAvg}`);
  }
} else {
  console.log(`No team wins the tropy!`);
}
