// 0026. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}

// function removeDuplicates(input) {
//   input = input.filter((num, index) => {
//     if (num !== input[index + 1]) return true
//   })

//   console.log(input)
//   return input.length
// }
console.log(removeDuplicates([1, 1, 2]), 'expected: [1, 2]')
console.log(
  removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]),
  'expected: [0,1,2,3,4]'
)
