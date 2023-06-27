// 395. Longest Substring with At Least K Repeating Characters
//

var longestSubstring = function (s, k) {
  const memo = {}
  s.split('').forEach((item) => {
    if (memo[item] == null) {
      memo[item] = 1
    } else {
      memo[item] = memo[item] + 1
    }
  })
  let result = 0
  Object.keys(memo).forEach(
    (key) => (result = memo[key] > k ? (result += memo[key]) : result)
  )
  console.log('memo :>> ', memo)
  return result
}

console.log(longestSubstring('aaabb', 3))
console.log(longestSubstring('ababbc', 2))
console.log(longestSubstring('ababacb', 3))
