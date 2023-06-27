// 0001. Two Sum
// https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
  const len = nums.length

  for (let i = 0; i < len; i++) {
    for (let k = 0; k < len && i != k; k++) {
      if (target - nums[k] - nums[i] === 0) return [k, i]
    }
  }
}

console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([2, 7, 11, 15], 9))

// function canSum(target, numbers, memo = {}) {
//   if (target in memo) return memo[target]
//   if (target === 0) return true
//   if (target < 0) return false

//   for (let num of numbers) {
//     const remainder = target - num
//     memo[target] = true
//     if (canSum(remainder, numbers, memo) === true) return true
//   }
//   memo[target] = false
//   return false
// }

// console.log(canSum(6, [3, 2, 4, 6]))
// console.log(canSum(3003, [7, 14]))
