// 0121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices) {
  if (prices.length < 2) return 0

  let profit = 0
  let highest = 0

  for (let i = prices.length - 1; i >= 0; i--) {
    if (prices[i] > highest) highest = prices[i]
    if (highest - prices[i] > profit) profit = highest - prices[i]
    console.log(i, profit, highest)
  }

  return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// console.log(maxProfit([7, 6, 4, 3, 1]))
// console.log(maxProfit([2, 4, 1]))
