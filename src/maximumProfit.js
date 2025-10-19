


function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

var maximumProfit  = function(arr) {
    //your code is here
    let profit=0
    let buy=arr[0]

    for (i=1; i<arr.length; i++)
    {
      if(arr[i]>buy)
      {
        let newProfit=arr[i]-buy
        profit = Math.max(profit, newProfit)
      }
      else {
        buy = arr[i]
      }

    }
    return profit;
}

var array1 = [100, 80, 120, 130, 70, 60, 100, 125];
console.log(maximumProfit(array1));
var array2= [100, 80, 70, 65, 60, 55, 50];
console.log(maximumProfit(array2));
