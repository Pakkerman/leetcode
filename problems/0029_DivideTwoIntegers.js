// 29. Divide Two Integers
// https://leetcode.com/problems/divide-two-integers/

function divide(dividend, divisor) {
  const result = dividend / divisor
  const remainder = dividend % divisor !== 0

  if (result >= Math.pow(2, 31)) return Math.pow(2, 31) - 1
  if (result <= Math.pow(-2, 31)) return Math.pow(-2, 31)

  return remainder ? Math.floor(result < 0 ? result + 1 : result) : result

  // Other Solution
  // const [min, max] = [-(2 ** 31), 2 ** 31 - 1]
  // return Math.max(min, Math.min(max, parseInt(dividend / divisor)))
}

// console.log(divide(10, 3))
// console.log(divide(7, -3))
console.log(divide(-1, 1), 'expected -1')
// console.log(divide(-2147483648, -1))
// console.log(divide(-2147483648, 1))
console.log(divide(-2147483648, 2), 'expected: -1073741824')
console.log(divide(1004958205, -2137325331), 'expected: 0')
