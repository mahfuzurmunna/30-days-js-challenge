const dolphinScores = [97,112,101];
const koalasScores = [109,95,123];

const dolphinAvg = dolphinScores.reduce((acc, curr) => acc + curr);
const koalasAvg = koalasScores.reduce((acc, curr) => acc + curr);

console.log(dolphinAvg,koalasAvg)

if (dolphinAvg < 100 && koalasAvg < 100) {
  console.log("No team wins ");
} else if(dolphinAvg > koalasAvg) {
    console.log("dolphin wins")
} else if (koalasAvg > dolphinAvg) {
    console.log("koalas wins")
} else {
    console.log("Its a draw sadly..")
}


