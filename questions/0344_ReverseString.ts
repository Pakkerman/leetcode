// 0344 - Reverse String
// https://leetcode.com/problems/reverse-string/

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const len = s.length
  const mid = Math.floor(s.length / 2)

  for (let i = 0; i < mid; i++) {
    ;[s[i], s[len - 1 - i]] = [s[len - 1 - i], s[i]]
  }
}

const s1 = ['h', 'e', 'l', 'l', 'o']
// const s2 = ['H', 'a', 'n', 'n', 'a', 'h']

reverseString(s1)
// reverseString(s2)

console.log(s1) // ["o","l","l","e","h"]
// console.log(s2) // ["h","a","n","n","a","H"]
