//0020 - Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

const pair: { [key: string]: string } = {
  ')': '(',
  '}': '{',
  ']': '[',
}

// This problem is solved using stack that will add all opening to stack,
// then when incountered a closing, pop one out of the stack and use the closing as key to
// find in pair object which is the corresponding opening.
// If it matched, continue
// If it mismatched, immediately return false
// After iterating through all items, if there's still item in stack, return false
// Else its is valid parentheses string

function isValid(s: string): boolean {
  const str = s.split('')
  const stack: string[] = []

  for (let i = 0; i < str.length; i++) {
    const curr = str[i]

    if (curr in pair) {
      // check if it's one of the closeing tag
      const opening = stack.pop() // pop one from the top of the stack
      if (opening === pair[curr]) continue // if the top one matched with the closeing pair continue
      return false
    }

    stack.push(str[i]) // add opening pairs to the stack
  }

  return stack.length === 0 ? true : false
}

// stack  ( >>

const a = '()'
const b = '(()[]{})'
const c = '(]'

console.log(isValid(a), 'true')
console.log(isValid(b), 'true')
console.log(isValid(c), 'false')
