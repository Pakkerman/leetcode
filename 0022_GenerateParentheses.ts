// 0022 - Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/

// with nested helper function

function generateParenthesis(n: number): string[] {
  const stack: string[] = []
  const out: string[] = []

  backtrack(0, 0)
  function backtrack(left: number, right: number): void {
    if (left === n && right === n) {
      out.push(stack.join(''))
      return
    }
    if (left < n) {
      stack.push('(')
      backtrack(left + 1, right)
      stack.pop()
    }
    if (right < left) {
      stack.push(')')
      backtrack(left, right + 1)
      stack.pop()
    }
  }
  return out
}

// with 2 function
// function backtrack(
//   n: number,
//   open: number,
//   close: number,
//   stack: string[],
//   res: string[]
// ): string[] {
//   if (open === n && close === n) {
//     res.push(stack.join(''))
//     return stack
//   }
//   if (open < n) {
//     stack.push('(')
//     backtrack(n, open + 1, close, stack, res)
//     stack.pop()
//   }
//   if (close < open) {
//     stack.push(')')
//     backtrack(n, open, close + 1, stack, res)
//     stack.pop()
//   }
//   return res
// }

// function generateParenthesis(n: number): string[] {
//   return backtrack(n, 0, 0, [], [])
// }

const res = generateParenthesis(3)

console.log(res)

// ((())) (()()) ()(())
