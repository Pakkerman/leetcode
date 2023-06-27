// 0324. Wiggle Sort II
//https://leetcode.com/problems/wiggle-sort-ii/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums) {
  // Sorting the array to let the smaller num falls in the first half, larger falls in the second
  let buffer = [...nums].sort((a, b) => a - b)
  // Declare 2 index to point to the different parts of the array
  let high = nums.length - 1
  let low = Math.floor(high / 2)

  // Iterate through,
  // In even index we want small number, so grab one from buffer with low as index.
  // In odd index we want large number, so grab one from buffer with high as index.
  // Then decrement low and high by 1 accordingly
  nums.forEach((item, index) => {
    nums[index] = index % 2 === 0 ? buffer[low--] : buffer[high--]
  })

  console.log(nums)
}

wiggleSort([5, 5, 5, 4, 4, 4])
