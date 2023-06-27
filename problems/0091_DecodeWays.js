// 91. Decode Ways
// https://leetcode.com/problems/decode-ways/
// inspired by https://www.youtube.com/watch?v=oBt53YbR9Kk&t=9805s , countConstruct section

const CODE_MAP = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'J',
  11: 'K',
  12: 'L',
  13: 'M',
  14: 'N',
  15: 'O',
  16: 'P',
  17: 'Q',
  18: 'R',
  19: 'S',
  20: 'T',
  21: 'U',
  22: 'V',
  23: 'W',
  24: 'X',
  25: 'Y',
  26: 'Z',
}

//Tabulation
function numDecodings(s) {
  const table = Array(s.length + 1).fill(0)
  table[0] = 1

  for (let i = 0; i < s.length; i++) {
    for (let num of combo) {
      if (s.slice(i, i + num.length) === num) {
        table[i + num.length] += table[i]
      }
    }
  }
  return table[s.length]
}

// Memolized Recursion
// function numDecodings(s, memo = {}) {
//   if (s in memo) return memo[s]
//   if (s.length === 0) return 1

//   let totalCount = 0

//   for (let num of combo) {
//     if (s.indexOf(num) === 0) {
//       const ways = numDecodings(s.slice(num.length), memo)
//       totalCount += ways
//     }
//   }
//   memo[s] = totalCount
//   return memo[s]
// }

const combo = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
]

console.log(numDecodings('12'), 'expected: 2')
console.log(numDecodings('226'), 'expected: 3')
console.log(numDecodings('06'), 'expected: 0')
console.log(
  numDecodings('111111111111111111111111111111111111111111111'),
  'memolized for efficiency'
)
