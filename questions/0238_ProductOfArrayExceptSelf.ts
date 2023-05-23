// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/
// https://www.youtube.com/watch?v=bNvIQI2wAjk&t=5s

// function productExceptSelf(nums: number[]): number[] {
//   const prefix: number[] = []
//   const suffix: number[] = []
//   const result: number[] = []
//   for (let i = 0; i < nums.length; i++) {
//     prefix[i] = 1
//     if (i === 0) {
//     } else {
//       prefix[i] = nums[i - 1] * prefix[i - 1]
//     }
//   }

//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (i === nums.length - 1) {
//       suffix[i] = 1
//     } else {
//       suffix[i] = suffix[i + 1] * nums[i + 1]
//     }
//   }

//   nums.forEach((_, index) => result.push(prefix[index] * suffix[index]))

//   console.log(prefix, suffix, result)
//   return result
// }
function productExceptSelf(nums: number[]): number[] {
  const out: number[] = new Array(nums.length)
  let pre = 1
  let post = 1
  for (let i = 0; i < nums.length; i++) {
    out[i] = pre
    pre *= nums[i]
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    out[i] = post * out[i]
    post *= nums[i]
  }
  return out
}

console.log(productExceptSelf([1, 2, 3, 4]), 'Output: [24,12,8,6]')
// console.log(productExceptSelf([-1, 1, 0, -3, 3]), 'Output: [0,0,9,0,0]')
// console.log(productExceptSelf([0, 0]), 'Output: [0,0,9,0,0]')
