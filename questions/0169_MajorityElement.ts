// 0169. Majority Element
// https://leetcode.com/problems/majority-element/description/

function majorityElement(nums: number[]): number {
  // An object to track number of appearance, key is the num, value is number of times
  const counter = {}

  for (let i = 0; i < nums.length; i++) {
    if (counter[nums[i]] == null) {
      counter[nums[i]] = 1
    } else {
      counter[nums[i]] += 1
    }
  }

  const result = Object.keys(counter).filter((key) => {
    return counter[key] > Math.floor(nums.length / 2)
  })

  return parseInt(result.join(''))
}
