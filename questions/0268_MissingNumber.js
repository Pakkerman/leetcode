// 0268. Missing Number
// https://leetcode.com/problems/missing-number/

function missingNumber(nums) {
  let missing

  for (let i = 0; i < nums.length + 1; i++) {
    if (!nums.includes(i)) missing = i
  }
  return missing

  // Top 10% solution
  // return nums.reduce((prev, acc, index) => prev + index - acc, nums.length)
}

console.log(missingNumber([3, 0, 1]))
// console.log(missingNumber([0, 1]))
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
