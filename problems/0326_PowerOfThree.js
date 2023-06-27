// 326. Power of Three
// https://leetcode.com/problems/power-of-three/description/

function isPowerOfThree(n) {
  if (n <= 0) return false
  if (n === 1) return true
  if (n % 3 === 0) return isPowerOfThree(n / 3)
  return false
}

console.log(isPowerOfThree(27))
