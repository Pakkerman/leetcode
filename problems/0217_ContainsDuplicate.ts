// 0217 - Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/description/

function containsDuplicate(nums: number[]): boolean {
  const checker = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (!checker.has(nums[i])) {
      checker.add(nums[i])
    } else {
      return true
    }
  }

  return false
}

console.log(containsDuplicate([2, 2, 3, 4, 5, 6])) // true
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7])) // false
