// 0167 - Two Sum II - Input Array Is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// o(n)
function twoSum(numbers: number[], target: number): number[] {
  let lo = 0
  let hi = numbers.length - 1
  let sum = numbers[lo] + numbers[hi]

  while (sum !== target) {
    if (sum < target) {
      lo++
    } else if (target < sum) {
      hi--
    }
    sum = numbers[lo] + numbers[hi]
  }

  return [lo + 1, hi + 1]
}

// O(n^2)
// function twoSum(numbers: number[], target: number): number[] {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let k = 0; k < numbers.length; k++) {
//       if (i === k) continue
//       if (numbers[i] + numbers[k] > target) continue
//       if (numbers[i] + numbers[k] === target) return [i + 1, k + 1]
//     }
//   }
//   return [-1, -1]
// }

const a = [2, 7, 11, 15]
const b = [2, 3, 4]
const c = [-1, 0]

console.log(twoSum(a, 9), '[1, 2]')
console.log(twoSum(b, 6), '[1, 3]')
console.log(twoSum(c, -1), '[1, 2]')
