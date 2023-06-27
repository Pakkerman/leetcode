// 0283 - Move Zeroes
// https://leetcode.com/problems/move-zeroes/description/

/**
 Do not return anything, modify nums in-place instead.
 */

// With 2 pointers that iterate through array
// if current nums[i] = 0, increment the k pointer
// k now point to the next item, and i goes through and point to the same one
// if now nums[i] is not 0, swap nums[i - k] with current nums[i]
function moveZeroes(nums: number[]): void {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      k++
    } else {
      ;[nums[i - k], nums[i]] = [nums[i], nums[i - k]]
    }
  }
}

const nums = [0, 0, 12, 2, 3, 4, 5]
moveZeroes(nums)
console.log(nums)
