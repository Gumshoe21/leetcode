/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
function maxProfit(prices: number[]): number {
  // The result variable.
  let maxProfit = 0
  // Set two pointers for buy and sell.
  let buy = 0,
    sell = 1
  // Run a loop while sell is on the last index or less in the array.
  while (sell < prices.length) {
    // If the current buy is less than the current sell...
    if (prices[buy] < prices[sell]) {
      // ...set the profit difference to: sell - buy
      let price = prices[sell] - prices[buy]
      // Determine if the profit difference we just calc'd is the greatest maxProfit we've ever had. If so, set maxPrice to it. If not, do nothing.
      maxProfit = Math.max(price, maxProfit)
    } else {
      // If the current buy is not less than the curent sell, move the buy up to where sell is so we can work with that number as the newest minimum buy.
      buy = sell
    }
    // Inc sell so as to compare a new value to buy.
    sell++
  }
  // Return answer.
  return maxProfit
}
