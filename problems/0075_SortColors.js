// 0075. Sort Colors
//https://leetcode.com/problems/sort-colors/

function sortColors(nums) {
  let low = 0
  let mid = 0
  let high = nums.length - 1

  while (mid <= high) {
    if (nums[mid] == 0) {
      swap(nums, low, mid)
      low++
      mid++
    } else if (nums[mid] == 1) {
      mid++
    } else if (nums[mid] == 2) {
      swap(nums, mid, high)
      high--
    }
  }
}

function swap(array, indexA, indexB) {
  ;[array[indexA], array[indexB]] = [array[indexB], array[indexA]]
}

const nums = [2, 0, 2, 1, 1, 0]
sortColors(nums)
console.log(nums)
// console.log('123')
