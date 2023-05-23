// 0171. Excal Sheet Column Number
// https://leetcode.com/problems/excel-sheet-column-number/

function titleToNumber(columnTitle: string): any {
  let result = 0
  let length = columnTitle.length
  for (let i = 0; i < length; i++) {
    result += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, length - (i + 1))
  }

  return result
}

console.log(titleToNumber('A')) // 1
console.log(titleToNumber('AB')) // 28
console.log(titleToNumber('ZY')) // 701
console.log(titleToNumber('ZZZ')) // 701
