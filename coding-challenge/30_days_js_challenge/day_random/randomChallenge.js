/** Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..." */

function printForcast(arr) {
  let daysCount = 1;

  let resString = '';

  for(let i = 0; i< arr.length;i++) {
    resString = resString + `... ${arr[i]}ºC in ${daysCount++} days `;
  }
  return resString;
}


const dataSet = [12, 5, -5, 0, 4]
// console.log(printForcast(dataSet))


