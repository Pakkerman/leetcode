// 0229. Majority Element II
// https://leetcode.com/problems/majority-element-ii/

function majorityElement(nums: number[]): number[] {
  const len = nums.length
  const counter = {}

  for (let i = 0; i < len; i++) {
    if (counter[nums[i]] == null) {
      counter[nums[i]] = 1
    } else {
      counter[nums[i]] += 1
    }
  }

  const result = Object.keys(counter).filter((key) => {
    return counter[key] > Math.floor(len / 3)
  })

  return result.map((number) => parseInt(number))
}
