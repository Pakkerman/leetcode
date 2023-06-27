// 0121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices: number[]): number {
  let maxProfit: number = 0
  let lo = 0
  let hi = 1
  while (hi < prices.length) {
    if (prices[lo] < prices[hi]) {
      maxProfit = Math.max(maxProfit, prices[hi] - prices[lo])
    } else {
      lo = hi
    }

    hi++
  }

  return maxProfit
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// console.log(maxProfit([7, 6, 4, 3, 1]))
// console.log(maxProfit([2, 4, 1]))
