//Given an array of positive intergers representing the values of coins in your possession, write a function that returns the minimum amount of change(the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique(i.e., you can have multiple coins of the same value).

//Sample input: coins = [5, 7, 1, 1, 2, 3, 22]
//Sample output: 20

//The first approach I can think of involves sorting the coins array. Then we can run a loop that allows us to check for minimum change and minimum change, and store these values in an array(minChange). We can use two pointers to add the values of the pointers and if the result isn't found in the minChange array, we add it. Once the minimum amount of change that can't be made is encountered, we break the loop and return that number. This minimum non-constructible change will equal to the value of currentChangeCreated + 1, when the first coin that is greater than currentChangeCreated + 1 appears.

//O(nLog(n)) time complexity | O(1) space complexity
//The O(nLog(n)) is because of the sorting we do to begin with and the loop we run to check the minimum non-constructible change created does not change that time complexity.
//The O(1) constant space complexity is because we're sorting the input array in place.

function nonConstructibleChange(coins) {
  // Write your code here.
  coins.sort((a, b) => a - b);

  let currentChangeCreated = 0;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > currentChangeCreated + 1) {
      break;
    }
    currentChangeCreated += coins[i];
  }
  return currentChangeCreated + 1;
}

//Slightly different loop used for a variation of the above algorithm.

// function nonConstructibleChange(coins) {
//   // Write your code here.
//   let minChange = 1;

//   for(let coin of coins.sort((a, b) => a - b)) {
//     if(coin > minChange) {
//       return minChange;
//     }
//     minChange += coin;
//   }
//   return minChange;
// }
