// 152. Maximum Product Subarray
// https://leetcode.com/problems/maximum-product-subarray/

function maxProduct(nums) {
  let result = 0
  let max = 1
  let min = 1
  const len = nums.length

  for (let i = 0; i < len; i++) {
    console.log('nums[i] :>> ', nums[i])
    if (nums[i] < 0) [min, max] = [max, min]
    max = Math.max(nums[i] * max, nums[i])
    min = Math.min(nums[i] * min, nums[i])
    result = Math.max(result, max)
  }

  return result
}

// Brute Force
// function maxProduct(nums, memo = {}) {
//   if (nums.length === 1) return nums[0]

//   let maxProduct
//   for (let i = 0; i < nums.length; i++) {
//     for (let k = i + 1; k < nums.length; k++) {
//       const subarray = nums.slice(i, k)
//       // if (subarray.join().includes(Object.keys(memo)))
//       console.log(Object.keys(memo))
//       if (subarray.length === 1) {
//         if (maxProduct < subarray[0] || maxProduct == null)
//           maxProduct = subarray[0]
//         continue
//       }
//       if (subarray.filter((num) => num < 0).length % 2 === 1) continue
//       if (subarray.some((num) => num === 0)) continue
//       const product = subarray.reduce((prev, curr) => prev * curr)
//       memo[subarray] = product
//       if (maxProduct < product || maxProduct == null) maxProduct = product
//     }
//   }
//   console.log(memo)
//   return maxProduct
// }

console.log(maxProduct([2, 3, 3]))
console.log(maxProduct([-2, 0, -1]))
console.log(maxProduct([-2]))
