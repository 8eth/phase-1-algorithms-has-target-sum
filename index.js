function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let num = 0; num < array.length; num++) {
    let compliment = target - array[num]
    for (let diff = num + 1; diff < array.length; diff++) {
      if (array[diff] === compliment) return true
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here

  Runtime: O(n^2) (Quadratic)
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
