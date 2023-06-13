// 0567 - Permutation in String
// https://leetcode.com/problems/permutation-in-string/description/

function checkInclusion(a: string, b: string): boolean {
  // Init 2 array that contains the count of occuring characters
  const countA: number[] = new Array(26).fill(0)
  const countB: number[] = new Array(26).fill(0)

  for (let i = 0; i < a.length; i++) {
    countA[a.charCodeAt(i) - "a".charCodeAt(0)]++
  }

  console.log(countA)

  return false
}

const a: [string, string] = ["ab", "eidbaooo"]
const b: [string, string] = ["ab", "eidboaoo"]
const c: [string, string] = ["adc", "dcda"]

// console.log(checkInclusion(...a), "true")
// console.log(checkInclusion(...b), "false")
console.log(checkInclusion(...c), "false")
