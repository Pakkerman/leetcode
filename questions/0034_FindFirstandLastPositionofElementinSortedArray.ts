// 0034 - Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

function searchRange(nums: number[], target: number): number[] {
  let lo = 0
  let hi = nums.length
  let idx = -1

  while (lo < hi) {
    const mid = Math.floor(lo + (hi - lo) / 2)
    const midVal = nums[mid]
    if (midVal === target) idx = mid

    if (target < midVal) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }

  if (idx === -1) return [-1, -1]

  let firstIdx = idx
  let lastIdx = idx
  while (nums[firstIdx] === target) {
    firstIdx--
  }
  while (nums[lastIdx] === target) {
    lastIdx++
  }

  return [firstIdx + 1, lastIdx - 1]
}
