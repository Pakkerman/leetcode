// 150 - Evaluate Reverse Polish Notation
// https://leetcode.com/problems/evaluate-reverse-polish-notation/

const operators = ['+', '-', '*', '/']

function evalRPN(tokens: string[]): number {
  const stack: number[] = []

  for (let i = 0; i < tokens.length; i++) {
    if (!operators.find((item) => item === tokens[i])) {
      stack.push(parseInt(tokens[i]))
      continue
    } else {
      const a = stack.pop() as number
      const b = stack.pop() as number
      if (tokens[i] === '+') stack.push(Math.trunc(b + a))
      if (tokens[i] === '-') stack.push(Math.trunc(b - a))
      if (tokens[i] === '*') stack.push(Math.trunc(b * a))
      if (tokens[i] === '/') stack.push(Math.trunc(b / a))
    }
  }

  return stack[0]
}

const a = ['2', '1', '+', '3', '*']
const b = ['4', '13', '5', '/', '+']
const c = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']
const d = ['0', '3', '/']
const e = ['4', '-2', '/', '2', '-3', '-', '-']

console.log(evalRPN(a), ' >> 9')
console.log(evalRPN(b), ' >> 6')
console.log(evalRPN(c), ' >> 22')
// console.log(evalRPN(e), ' >> ')
