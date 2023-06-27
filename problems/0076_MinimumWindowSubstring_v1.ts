// 0076 - Minimum Window Substring
// https://leetcode.com/problems/minimum-window-substring/

function minWindow(s: string, t: string): string {
  if (s.length < t.length) return ""

  let out: string = ""
  let minLen = Infinity

  // get an array that stores counts of the letters that appeared, from 0 to 26 mapped to a to z
  const check = new Array(100).fill(0)
  for (let i = 0; i < t.length; i++) {
    const idx = getIdxFromCharCode(t, i)
    check[idx]++
  }

  let totalMatch = 0
  check.forEach((item) => {
    if (item !== 0) totalMatch++
  })

  for (let curr = 0; curr < s.length; curr++) {
    if (check[getIdxFromCharCode(s, curr)] === 0) continue
    let right = curr

    const matchCheck = new Array(100).fill(0)
    let matchs = 0
    while (right < s.length) {
      const len = right - curr + 1

      const idx = getIdxFromCharCode(s, right)
      matchCheck[idx]++
      if (matchCheck[idx] === check[idx]) matchs++

      if (matchs === totalMatch && len < minLen) {
        minLen = len
        out = s.slice(curr, right + 1)
        break
      }

      right++
    }
  }

  return out
}

function getIdxFromCharCode(string: string, idx: number): number {
  return string.charCodeAt(idx) - "A".charCodeAt(0)
}

const a = "ADOBECODEBANC"
const b = "a"
const c = "aa"
const d =
  "gehzduwqkzuyotckqcusdiqubeqglkvuocttzrllqfjhzorpqnjwxbqyfiesscmigicfzn"

// console.log(minWindow(a, "ABC"), ">> BANC")
// console.log(minWindow(b, "a"), ">> a")
// console.log(minWindow(c, "aa"), ">> aa")
console.log(
  minWindow(d, "qsvczwsslkhwg"),
  ">> wqkzuyotckqcusdiqubeqglkvuocttzrllqfjhzorpqnjwxbqyfiess"
)
