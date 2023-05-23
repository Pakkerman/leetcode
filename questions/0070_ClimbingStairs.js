// 0070. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/description/

function climbStairs(n, memo = {}) {
  if (n in memo) return memo[n]
  if (n < 0) return 0
  if (n === 0) return 1

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)

  return memo[n]
}

console.log(climbStairs(5))
