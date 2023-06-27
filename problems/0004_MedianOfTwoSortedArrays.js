// 0004. Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/

function findMedianSortedArrays(nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length
  const totalLen = len1 + len2
  const medLen = totalLen % 2 === 0 ? totalLen / 2 : Math.floor(totalLen / 2)

  const array = [...nums1, ...nums2]
  array.sort((a, b) => a - b)

  const median =
    totalLen % 2 === 0 ? (array[medLen] + array[medLen - 1]) / 2 : array[medLen]

  return median
}

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([1, 2, 3, 5, 6], [3, 4, 6, 7]))
