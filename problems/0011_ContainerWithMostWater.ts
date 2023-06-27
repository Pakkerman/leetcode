// 0011 - Container With Most Water
// https://leetcode.com/problems/container-with-most-water/

function maxArea(height: number[]): number {
  let max = 0
  let lo = 0
  let hi = height.length - 1

  while (lo < hi) {
    const left = height[lo]
    const right = height[hi]
    const vol = (hi - lo) * Math.min(left, right)
    max = Math.max(max, vol)

    if (left <= right) {
      lo++
    } else if (left > right) {
      hi--
    }
  }
  return max
}

const containerA = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const containerB = [1, 1]
const containerC = [2, 3, 4, 5, 18, 17, 6]
const containerD = [1, 2, 1]

console.log(maxArea(containerA), '>>49')
// console.log(maxArea(containerB), '>>1')
// console.log(maxArea(containerC), '>>')
console.log(maxArea(containerD), '>> 2')
