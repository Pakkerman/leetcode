// https://leetcode.com/problems/richest-customer-wealth/

function maximumWealth(accounts) {
  const accountSum = accounts.map((sum) =>
    sum.reduce((acc, curr) => acc + curr)
  )
  let richest = 0
  accountSum.forEach(
    (account) => (richest = account > richest ? account : richest)
  )
  return richest
}

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
)
