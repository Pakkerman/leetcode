// https://leetcode.com/problems/roman-to-integer/

const SYMBOL = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function romanToInt(s) {
  let value = 0

  for (let i = 0; i < s.length; i++) {
    if (SYMBOL[s[i]] < SYMBOL[s[i + 1]]) {
      value += SYMBOL[s[i + 1]] - SYMBOL[s[i]]
      console.log(SYMBOL[s[i + 1]] - SYMBOL[s[i]])
      i++
    } else {
      value += SYMBOL[s[i]]
    }
  }

  return value
}
