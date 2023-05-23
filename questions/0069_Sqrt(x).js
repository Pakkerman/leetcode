// 69. Sqrt(x)
// https://leetcode.com/problems/sqrtx/

function mySqrt(x) {
  let count = 0
  let current = 0
  while (current * current <= x) {
    count = current
    current++
  }
  return count
  // Didn't know you can use sqrt()
  // return Math.floor(Math.sqrt(x))
}

console.log(mySqrt(500))
