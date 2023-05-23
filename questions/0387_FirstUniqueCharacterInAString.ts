// 0387 - First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/description/

function firstUniqChar(s: string): number {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
  }
  return -1
}
