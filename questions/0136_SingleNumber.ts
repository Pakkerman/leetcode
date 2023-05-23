// 0136. Single Number
// https://leetcode.com/problems/single-number/
function singleNumber(nums: number[]): number {
  let result = 0
  nums.forEach((item) => {
    result ^= item
  })

  return result
}
