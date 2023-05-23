// 0015 - 3Sum
// https://leetcode.com/problems/3sum/

function threeSum(nums: number[]): number[][] {
  // sort
  nums.sort((a, b) => a - b)
  const out: number[][] = []
  // look at 1 item at a time
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue
    let lo = i + 1
    let hi = nums.length - 1
    // implement 2 sum 2 to iterate inner loop
    while (lo < hi) {
      const sum = nums[i] + nums[lo] + nums[hi]
      if (sum === 0) {
        out.push([nums[i], nums[lo], nums[hi]])
        lo++
        while (lo < hi && nums[lo] === nums[lo - 1]) lo++
      }
      if (sum < 0) lo++
      if (0 < sum) hi--
    }
  }
  return out
}

const a = [-1, 0, 1, 2, -1, -4]
const b = [0, 1, 1]
const c = [0, 0, 0, 0]

console.log(threeSum(a))
console.log(threeSum(b))
console.log(threeSum(c))
