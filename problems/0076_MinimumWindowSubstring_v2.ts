// 0076 - Minimum Window Substring
// https://leetcode.com/problems/minimum-window-substring/

function minWindow(s: string, t: string): string {
  const targetCount: { [key: string]: number } = {}
  let targetMatch: number = 0
  let out: string = ""

  for (let i = 0; i < t.length; i++) {
    const char = t[i]
    if (char in targetCount) {
      targetCount[char]++
    } else {
      targetCount[char] = 1
      targetMatch++
    }
  }

  let minLen: number = Infinity
  let currCount: { [key: string]: number } = {}
  let currMatch: number = 0
  let right = 0
  let left = 0
  while (right < s.length) {
    const char = s[right]
    if (char in targetCount) {
      if (char in currCount) {
        currCount[char]++
      } else {
        currCount[char] = 1
      }
    }

    if (currCount[char] >= targetCount[char]) currMatch++
    console.log(currCount, currMatch)

    while (currMatch >= targetMatch) {
      const currLen = right - left + 1
      if (currLen < minLen) {
        minLen = currLen
        out = s.slice(left, right + 1)
      }

      if (s[left] in targetCount) {
        currCount[s[left]]--
        currMatch--
      }

      if (currCount[s[left]] === 0) delete currCount[s[left]]

      left++
    }
    console.log(out)

    right++
  }

  return out
}

function getIdxFromCharCode(string: string, idx: number): number {
  return string.charCodeAt(idx) - 65
}

const a = "ADOBECODEBANC"
const b = "aaaaaaaaaaaabbbbbcdd"
const c = "aa"
const d =
  "gehzduwqkzuyotckqcusdiqubeqglkvuocttzrllqfjhzorpqnjwxbqyfiesscmigicfzn"

// console.log("testing", a, 'to be "BANC', minWindow(a, "ABC") === "BANC")
console.log(minWindow(b, "abcdd"), ">> abbbbbcdd")
// console.log(minWindow(c, "aa"), ">> aa")
// console.log(
//   minWindow(d, "qsvczwsslkhwg"),
//   ">> wqkzuyotckqcusdiqubeqglkvuocttzrllqfjhzorpqnjwxbqyfiess"
// )
