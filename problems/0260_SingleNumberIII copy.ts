// 0260. Single Number III
// https://leetcode.com/problems/single-number-iii/description/

function singleNumber(nums: number[]): number[] {
  const tracker = {}

  nums.forEach((item) => {
    tracker[item] == null ? (tracker[item] = 1) : delete tracker[item]
  })

  return Object.keys(tracker).map(Number)
}
