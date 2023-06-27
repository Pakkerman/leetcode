// 0567 - Permutation in String
// https://leetcode.com/problems/permutation-in-string/description/

function checkInclusion(a: string, b: string): boolean {
  if (a.length > b.length) return false
  // Init 2 array that contains the count of occuring characters
  const targetCounts: number[] = new Array(26).fill(0)
  let reqMatches: number = 0

  for (let i = 0; i < a.length; i++) {
    const idx = a.charCodeAt(i) - 97
    targetCounts[idx]++
    if (targetCounts[idx] === 1) reqMatches++
  }

  let left = 0
  const currCounts: number[] = new Array(26).fill(0)
  for (let right = 0; right < b.length; right++) {
    const idx = b.charCodeAt(right) - 97
    currCounts[idx]++

    const currLen = right - left + 1
    if (currLen > a.length) {
      const idx = b.charCodeAt(left) - 97
      currCounts[idx]--

      left++
    }

    let currMatches: number = 0

    for (let i = 0; i < currCounts.length; i++) {
      if (!targetCounts[i]) continue
      if (currCounts[i] === targetCounts[i]) currMatches++
    }

    if (currMatches === reqMatches) return true
  }

  return false
}

const a: [string, string] = ["ab", "eidbaooo"]
const b: [string, string] = ["ab", "eidboaoo"]
const c: [string, string] = ["adc", "dcda"]
const d: [string, string] = ["abcdxabcde", "abcdeabcdx"]

console.log(checkInclusion(...a), "true")
console.log(checkInclusion(...b), "false")
console.log(checkInclusion(...c), "true")
console.log(checkInclusion(...d), "true")

// [3, 2, 1]
// [4, 2, 1]
