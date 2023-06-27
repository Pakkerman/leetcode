// 0005 - Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/description/?envType=featured-list&envId=top-interview-questions

function longestPalindrome(s: string): string {
  let curr = 0
  let maxLen = 0
  let longestString = ""

  // walk the curr pointer
  while (curr < s.length) {
    // handle if the char next to curr is the same character
    let left = curr
    let right = curr
    // increment right by 1 and until it's not the same or hit the bound
    // Also handle even length string
    // "acca" starting with 'cc' and grow and check
    while (s[curr] === s[right + 1]) {
      if (s[right + 1] === s[curr]) right++
    }

    // Handle current string and update the longest substring
    while (0 <= left - 1 && right + 1 < s.length) {
      if (s[left - 1] !== s[right + 1]) break
      left--
      right++
    }

    let len = right - left + 1
    if (len > maxLen) {
      maxLen = len
      longestString = s.slice(left, right + 1)
    }
    curr++
  }

  return longestString
}

const a = "babad"
const b = "cbbd"
const c = "adam"
const d = "ccc"
const e = "tattarrattat"

console.log(longestPalindrome(a), ">> bab")
console.log(longestPalindrome(b), ">> bb")
console.log(longestPalindrome(c), ">> adam")
console.log(longestPalindrome(d), ">> ccc")
console.log(longestPalindrome(e), ">> tattarrattat")
