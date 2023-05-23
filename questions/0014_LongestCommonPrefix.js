// 0014. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

// function longestCommonPrefix(strings) {
//   if (strings.length === 0) return
//   if (strings.length === 1) return strings[0]
//   let common = strings[0]

//   let compare = false
//   while (compare === false) {
//     compare = strings.every((string) => {
//       return string.indexOf(common) === 0
//     })
//     if (!compare) common = common.slice(0, common.length - 1)
//   }
//   return common
// }

// https://leetcode.com/problems/longest-common-prefix/solutions/2683825/js-two-approaches-with-explanation-easy-to-understand/
function longestCommonPrefix(strings) {
  if (strings.length === 0) return ''
  if (strings.length === 1) return strings[0]

  for (let i = 0; i < strings[0].length; i++) {
    if (!strings.every((string) => string[i] === strings[0][i])) {
      return strings[0].slice(0, i)
    }
  }
  return strings[0]
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']), 'result => "fl"')
console.log(longestCommonPrefix(['dog', 'racecar', 'car']), 'result => ""')
console.log(longestCommonPrefix(['a']), 'result => "a"')
