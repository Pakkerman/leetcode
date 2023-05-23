// 287. Find the Duplicate Number
// https://leetcode.com/problems/find-the-duplicate-number/

function findDuplicate(nums) {
  let slow = 0
  let fast = 0
  let check = 0

  while (true) {
    slow = nums[slow]
    fast = nums[nums[fast]]
    if (slow === fast) break
  }
  while (true) {
    slow = nums[slow]
    check = nums[check]
    if (slow === check) break
  }
  return check
}

console.log(findDuplicate([1, 3, 4, 2, 2]))
// console.log(findDuplicate([3, 1, 3, 4, 2]))
