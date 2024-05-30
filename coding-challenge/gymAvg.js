const calAverage = (data1, data2, data3) => {
  return (data1 + data2 + data3) / 3;
};

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins / 2 > avgKoalas) {
    console.log(`Dolphins Wins with points( ${avgDolphins} : ${avgKoalas})`);
  } else if (avgKoalas / 2 > avgDolphins) {
    console.log(`Koalas Wins with points( ${avgKoalas} : ${avgDolphins})`);
  } else {
    console.log(`No team won!`);
  }
}

// const dolphineData1 = [44, 23, 71];
// const koalasData1 = [65, 54, 49];

const dolphineData1 = [85, 54, 41];
const koalasData1 = [23, 34, 27];

const avgDolphins = calAverage(
  dolphineData1[0],
  dolphineData1[1],
  dolphineData1[2]
);

const avgKoalas = calAverage(koalasData1[0], koalasData1[1], koalasData1[2]);

console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);
