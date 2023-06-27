// 0202 - Happy Numbers
// https://leetcode.com/problems/happy-number/

function isHappy(n: number, tries: number = 10): boolean {
  if (n === 1) return true
  if (tries === 0) return false

  let sum = 0
  let array = n.toString().split('')
  for (let i = 0; i < array.length; i++) {
    sum += +array[i] * +array[i]
  }

  return isHappy(sum, tries - 1)
}

console.log(isHappy(19)) // true
console.log(isHappy(2)) // false
console.log(isHappy(3)) // false
console.log(isHappy(7)) // false
