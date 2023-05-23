// 191. Number of 1 Bits
// https://leetcode.com/problems/number-of-1-bits/

function hammingWeight(n) {
  let count = 0
  n.toString(2)
    .split('')
    .forEach((item) => {
      if (item === '1') {
        count = count + 1
      }
    })

  return count
}

console.log('result', hammingWeight(00000000000000000000000000001011))
console.log('result', hammingWeight(00000000000000000000000010000000))
console.log('result', hammingWeight(11111111111111111111111111111101))
