// 0005 - Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/description/?envType=featured-list&envId=top-interview-questions

function longestPalindrome(s: string): string {
  let curr = 0
  let maxLen = 0
  let longest = ""

  while (curr < s.length) {
    // walk the curr pointer
    let left = curr
    let right = curr

    // handle if the char next to curr is the same character
    // increment right by 1 and until it's not the same or hit the bound
    // Also handle even length string
    while (right < s.length) {
      if (s[curr] !== s[right + 1]) break
      right++
    }

    // "acca" starting with 'cc' and grow and check
    while (0 <= left && right < s.length) {
      if (s[left - 1] === undefined || s[right + 1] === undefined) break
      if (s[left - 1] !== s[right + 1]) break
      left--
      right++
    }

    // Handle current string and update the longest substring
    const substringLen = right - left + 1
    if (substringLen > maxLen) {
      maxLen = substringLen
      longest = s.slice(left, right + 1)
    }

    curr++
  }

  return longest
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
