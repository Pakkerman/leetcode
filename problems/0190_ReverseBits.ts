// 0190. Reverse Bits
// https://leetcode.com/problems/reverse-bits/description/

function reverseBits(n: number): number {
  const result = n
    .toString(2) // Number.toString(radix) with radix 2
    .split('')
    .reverse()
    .join('')
    .padEnd(32, '0') // Padding the end with 0s

  return parseInt(result, 2) // parseInt with radix of 2
}
