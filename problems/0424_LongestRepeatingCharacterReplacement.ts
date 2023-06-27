// 0424 - Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/

function characterReplacement(s: string, k: number): number {
  const map = new Map<string, number>()
  let maxLength = 0
  let mostCharFreq = 0
  let left = 0
  let right = 0

  while (right < s.length) {
    let count = map.get(s[right]) || 1
    if (map.has(s[right])) count++
    map.set(s[right], count)

    mostCharFreq = Math.max(mostCharFreq, count)

    while (right - left + 1 - mostCharFreq > k) {
      map.set(s[left], map.get(s[left])! - 1)
      if (map.get(s[left]) === 0) map.delete(s[left])

      left++
    }

    maxLength = Math.max(maxLength, right - left + 1)
    right++
  }

  return maxLength
}

console.log(characterReplacement("ABAB", 2), "4")
console.log(characterReplacement("AABABBA", 1), "4")
