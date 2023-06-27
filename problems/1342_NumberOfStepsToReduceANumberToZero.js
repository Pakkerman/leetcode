//leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

https: function numberOfSteps(num) {
  if (num === 0) return 0
  return 1 + numberOfSteps(num % 2 === 0 ? num / 2 : num - 1)
}

console.log(numberOfSteps(123))

// 13 => %2 = 1 > numberOfSteps(num - 1)
// 12 % 2 = 0 > numberOfSteps(num / 2)
// 6 % 2 = 0 > numberOfSteps(num / 2)
// 3 % 2 = 1 > numberOfSteps(num - 1)
// 2 % 2 = 0 > numberOfSteps(num / 2)
// 1 % 2 = 1 > numberOfSteps(num - 1)
// 0 > return

// 3 % 2 = 1 > numberOfStep(num - 1)
// 2 % 2 = 0 > numberOfStep(num / 2)
// 1 % 2 = 1 > numberOfStep(num - 1)
// 0 > return 0
