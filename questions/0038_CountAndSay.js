// 38. Count and Say
// https://leetcode.com/problems/count-and-say/
// This querstion is not easily understand, the wording is kinda bad, and
// the explain picture is shit. But once understand the querstion, the solution isn't far ahead.

function countAndSay(n) {
  if (n === 1) return '1'
  return parser(countAndSay(n - 1))
}

// HELPER FUNCTION
function parser(string) {
  const result = []
  let counter = 1
  string.split('').forEach((item, index) => {
    if (string[index + 1] == null) return result.push(counter.toString(), item)
    if (item === string[index + 1]) return (counter = counter + 1)

    result.push(counter.toString(), item)
    counter = 1
  })
  return result.join('')
}

// console.log('result:', countAndSay(1))˜
// console.log('result:', countAndSay(4))
// console.log('result:', countAndSay(5))
console.log('result:', countAndSay(5))
console.log('result:', countAndSay(6))
console.log('result:', countAndSay(7))
console.log('result:', countAndSay(8))
