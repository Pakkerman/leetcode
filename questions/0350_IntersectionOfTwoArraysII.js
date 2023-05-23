// 350. Intersection of two arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

function intersection(nums1, nums2) {
  const output = []
  while (nums1.length > 0) {
    if (nums2.includes(nums1[0])) {
      output.push(...nums2.splice(nums2.indexOf(nums1[0]), 1))
    }
    nums1.shift()
  }
  return output
}

console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
