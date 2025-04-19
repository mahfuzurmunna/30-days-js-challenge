const calAverage = (s1, s2, s3) => {
  const sum = s1 + s2 + s3;
  return sum / 3;
};

const doliphinsAvg = calAverage(85, 54, 41);
const koalasAvg = calAverage(23, 34, 27);

// console.log(doliphinsAvg, koalasAvg);

function checkWinner(avgDolphins, avgKoalas) {
  let dAvgDolph = avgDolphins * 2;
  let dAvgKoalas = avgKoalas * 2;
//   console.log(dAvgDolph,dAvgKoalas)

  if (avgDolphins > avgKoalas && dAvgKoalas < avgDolphins) {
    return `Dolphins wins ${avgDolphins} vs ${avgKoalas}`;
  } else if (avgKoalas > avgDolphins && dAvgDolph < avgKoalas) {
    return `Koalas wins ${avgKoalas} vs ${avgDolphins}`;
  } else {
    return `No team wins`
  }

}

console.log(checkWinner(doliphinsAvg, koalasAvg));
