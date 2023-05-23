// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

// All pening must also have a closing

function isValid(string) {
  // if length is odd number, it can't have a complete set of open and close
  if (string.length % 2 === 1) return false
  // if the first item in string is closing, impossible to be valid
  if (string[0] === '}' || string[0] === ']' || string[0] === ')') return false
  let isValid = true
  const pile = []

  string.split('').forEach((item) => {
    console.log(pile)
    if (!isValid) return
    if (item === '[' || item === '{' || item === '(') return pile.push(item)

    if (pile.length != 0) {
      if (item === ')' && pile.lastIndexOf('(') === pile.length - 1)
        return pile.pop()
      if (item === ']' && pile.lastIndexOf('[') === pile.length - 1)
        return pile.pop()
      if (item === '}' && pile.lastIndexOf('{') === pile.length - 1)
        return pile.pop()
    }
    isValid = false
  })

  return pile.length === 0 && isValid
}

console.log(isValid('()))'), '=> false')
// console.log(isValid('()[]{}'), '=> true')
// console.log(isValid(']'), '=> false')
// console.log(isValid('(])'), '=> false')
// console.log(isValid('))'), '=> false')
// console.log(isValid('([}}])'), '=> false')
