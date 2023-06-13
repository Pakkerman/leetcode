// 0003 - Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
function lengthOfLongestSubstring(s: string): number {
  // Using a set to keep track of letters
  const set = new Set()
  let [left, right] = [0, 0]
  let max = 0

  while (right < s.length) {
    while (set.has(s[right])) {
      set.delete(s[left])
      left++
    }
    set.add(s[right])
    max = Math.max(max, set.size)
    right++
  }

  // If theres a repeating letter in the set, we'll iterate and remove
  // s[left] and increment left, until we shrink the window back to all unique
  // letters

  // Add a new letter at the right pointer every iteration
  // the biggest size is the longest length of non repeating substring

  return max
}

console.log(lengthOfLongestSubstring("abcabcbb"), "3")
console.log(lengthOfLongestSubstring("bbbbb"), "1")
console.log(lengthOfLongestSubstring("pwwkew"), "3")
console.log(lengthOfLongestSubstring("au"), "2")

// const set = new Set()
// let left = 0
// let right = 0
// let max = 0

// for (; right < s.length; right++) {
//   if (set.has(s[right])) {
//     set.delete(s[left])
//     left++
//   }

//   set.add(s[right])
//   max = Math.max(max, set.size)
