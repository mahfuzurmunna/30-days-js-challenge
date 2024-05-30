const calAverage = (data1, data2, data3) => {
  return (data1 + data2 + data3) / 3;
};

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins / 2 > avgKoalas) {
    console.log(`Dolphins Wins with points( ${avgDolphins} : ${avgKoalas})`);
  }
}
