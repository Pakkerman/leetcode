// 0128 - Longest Consective Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/description/

function longestConsecutive(nums: number[]): number {
  const set = new Set(nums)

  let longestCount = 0

  for (let i = 0; i < nums.length; i++) {
    // getting ones that doesn't have a smaller value by 1, ie, it's start of a sequence
    if (set.has(nums[i] - 1)) continue
    let count = 0
    while (set.has(nums[i] + count)) {
      count++
    }
    if (count > longestCount) longestCount = count
  }

  return longestCount
}

const nums1 = [100, 4, 200, 1, 3, 2]
const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
const nums3 = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]

console.log(longestConsecutive(nums1), '>> 4')
console.log(longestConsecutive(nums2), '>> 9')
console.log(longestConsecutive(nums3), '>> 7')
