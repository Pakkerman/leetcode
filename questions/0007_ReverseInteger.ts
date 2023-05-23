// 0007. Reverse Integer
// https://leetcode.com/problems/reverse-integer/description/

function reverse(x: number): number {
  const reverse = x.toString().split('').reverse().join('')

  const result = x < 0 ? -parseInt(reverse) : parseInt(reverse)

  const bound = Math.pow(2, 31)

  if (result < -bound || bound - 1 < result) return 0

  return result
}
