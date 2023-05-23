// 0137. Single Number II
// https://leetcode.com/problems/single-number-ii/description/

function singleNumber(nums: number[]): number {
  const tracker = {}
  nums.forEach((item) => {
    tracker[item] == null ? (tracker[item] = 1) : tracker[item]++
  })

  for (let key in tracker) {
    if (tracker[key] === 1) return parseInt(key)
  }
}
