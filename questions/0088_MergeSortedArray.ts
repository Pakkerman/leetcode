// 0088 - Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/description/

/**
 Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[--n]
  }
  nums1.sort((a, b) => a - b)
}

const nums1 = [1, 2, 3, 0, 0, 0]
merge(nums1, 3, [2, 5, 6], 3)

console.log(nums1)
