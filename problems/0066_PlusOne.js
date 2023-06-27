// 0066. Plus One
// https://leetcode.com/problems/plus-one/

function plusOne(digits) {
  const len = digits.length
  digits[len - 1] += 1
  if (digits[len - 1] < 10) return digits

  for (let i = len; i >= 0; i--) {
    if (digits[i] < 10) {
      if (i != 0) {
        digits[i] = 0
        digits[i - 1] += 1
      }
      if (i === 0) {
        digits[i] = 1
        digits.push(0)
      }
    }
  }

  return digits
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
console.log(plusOne([9]))
console.log(plusOne([9, 9, 9]))
console.log(plusOne([8, 9, 9]))
