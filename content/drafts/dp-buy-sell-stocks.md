# Using Dynamic Programming to solve "Buying and Selling Stocks" Problems

Problems on LeetCode:

- [121. Best Time to Buy and Sell Stock (Easy)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- [122. Best Time to Buy and Sell Stock II (Medium)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
- [123. Best Time to Buy and Sell Stock III (Hard)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
- [188. Best Time to Buy and Sell Stock IV (Hard)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)
- [309. Best Time to Buy and Sell Stock with Cooldown (Medium)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
- [714. Best Time to Buy and Sell Stock with Transaction Fee (Medium)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)


Using dynamic programming isn't always the most optimal approach. For example, for problem 121, the following simple solution without using dynamic programming beats ~86% of submissions:

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
        
    return maxProfit;
};
```

In this post, I would like to show how using dynamic programming helps build a generic solution for this class of problems that only needs minor tweaking if the problem statement changes slightly.

The solutions are using the bottom-up approach, but I assume the top-down approach would be similar.

## Solution to problem 121

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    const dp = [...Array(prices.length)].map(e => new Array(2).fill(0));
    
    // dp[i][0] => max. profit you can make on day i if you don't already have stock
    // dp[i][1] => max. profit you can make on day i if you already have stock
    
    // dp[prices.length - 1][0] = 0; => if you don't have stock on the last day, you can't make any profit :(
    
    // if you have stock on the last day, you can sell it for what the stock is worth and make that profit
    dp[prices.length - 1][1] = prices[prices.length - 1];
    
    for (let i = prices.length - 2; i >= 0; i--) {
        
        // If you have no stock on day i, you can either buy stock, or stay without stock
        dp[i][0] = Math.max(
            -1 * prices[i] + dp[i+1][1],
            dp[i+1][0]
        );
        
        // If you have stock on day i, you can either sell stock, or stick with it
        dp[i][1] = Math.max(
            prices[i],
            dp[i+1][1]
        );
    }
    
    // the answer we want is dp[0][0] => profit we can make on day 0 when we start with no stock
    return dp[0][0];
    
};
```

## Solution to problem 122

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    const dp = [...Array(prices.length)].map(e => new Array(2).fill(0));
    
    // dp[i][0] => max. profit you can make on day i if you don't already have stock
    // dp[i][1] => max. profit you can make on day i if you already have stock
    
    // dp[prices.length - 1][0] = 0; => if you don't have stock on the last day, you can't make any profit :(
    
    // if you have stock on the last day, you can sell it for what the stock is worth and make that profit
    dp[prices.length - 1][1] = prices[prices.length - 1];
    
    for (let i = prices.length - 2; i >= 0; i--) {
        
        // If you have no stock on day i, you can either buy stock, or stay without stock
        dp[i][0] = Math.max(
            -1 * prices[i] + dp[i+1][1],
            dp[i+1][0]
        );
        
        // If you have stock on day i, you can either sell stock, or stick with it
        dp[i][1] = Math.max(
            prices[i] + dp[i+1][0],
            dp[i+1][1]
        );
    }
    
    // the answer we want is dp[0][0] => profit we can make on day 0 when we start with no stock
    return dp[0][0];
    
};
```

## Solution to problem 123

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // dp[i][j][k] => max profit that can be made on day i with j transactions left when holding k stocks
    
    const dp = [...Array(prices.length)].map(_ => [...Array(3)].map(_ => Array(2).fill(0)));
    
    dp[prices.length - 1][1][1] = prices[prices.length - 1];
    dp[prices.length - 1][2][1] = prices[prices.length - 1];
    
    for (let i = prices.length - 2; i >= 0; i--) {
        
        for (let j = 1; j <= 2; j++) {
            
            // Not holding stock
            dp[i][j][0] = Math.max(
                -1 * prices[i] + dp[i+1][j][1] ,// Option 1: buy stock
                dp[i+1][j][0] // Option 2: don't buy stock
            );
            
            // Holding stock
            dp[i][j][1] = Math.max(
                prices[i] + dp[i+1][j-1][0], // Option 1: sell stock
                dp[i+1][j][1] // Option 2: hold stock
            );
            
        }
        
    }
    
    return dp[0][2][0];
    
};
```

## Solution to problem 188

```javascript
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    
    if (prices.length === 0) {
        return 0;
    }
    
    // dp[i][j][k] => max profit that can be made on day i with j transactions left when holding k stocks
    
    const dp = [...Array(prices.length)].map(_ => [...Array(k + 1)].map(_ => Array(2).fill(0)));
    
    for (let i = 1; i <= k; i++) {
        dp[prices.length - 1][i][1] = prices[prices.length - 1];
    }
    
    for (let i = prices.length - 2; i >= 0; i--) {
        
        for (let j = 1; j <= k; j++) {
            
            // Not holding stock
            dp[i][j][0] = Math.max(
                -1 * prices[i] + dp[i+1][j][1] ,// Option 1: buy stock
                dp[i+1][j][0] // Option 2: don't buy stock
            );
            
            // Holding stock
            dp[i][j][1] = Math.max(
                prices[i] + dp[i+1][j-1][0], // Option 1: sell stock
                dp[i+1][j][1] // Option 2: hold stock
            );
            
        }
        
    }
    
    return dp[0][k][0];
    
};
```

## Solution to problem 309

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if (prices.length <= 1) {
        return 0;
    }
    
    const dp = [...Array(prices.length)].map(e => new Array(2).fill(0));
    
    // dp[i][0] => max. profit you can make on day i if you don't already have stock
    // dp[i][1] => max. profit you can make on day i if you already have stock
    
    // dp[prices.length - 1][0] = 0; => if you don't have stock on the last day, you can't make any profit :(
    
    // if you have stock on the last day, you can sell it for what the stock is worth and make that profit
    dp[prices.length - 1][1] = prices[prices.length - 1];
    
    dp[prices.length - 2][0] = Math.max(0, prices[prices.length - 1] - prices[prices.length - 2]);
    dp[prices.length - 2][1] = Math.max(prices[prices.length - 1], prices[prices.length - 2]);
    
    for (let i = prices.length - 3; i >= 0; i--) {
        
        // If you have no stock on day i, you can either buy stock, or stay without stock
        dp[i][0] = Math.max(
            -1 * prices[i] + dp[i+1][1],
            dp[i+1][0]
        );
        
        // If you have stock on day i, you can either sell stock, or stick with it
        dp[i][1] = Math.max(
            prices[i] + dp[i+2][0],
            dp[i+1][1]
        );
    }
    
    // the answer we want is dp[0][0] => profit we can make on day 0 when we start with no stock
    return dp[0][0];
};
```

## Solution to problem 714

```javascript
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {

    const dp = [...Array(prices.length)].map(e => new Array(2).fill(0));
    
    // dp[i][0] => max. profit you can make on day i if you don't already have stock
    // dp[i][1] => max. profit you can make on day i if you already have stock
    
    // dp[prices.length - 1][0] = 0; => if you don't have stock on the last day, you can't make any profit :(
    
    // if you have stock on the last day, you can sell it for what the stock is worth and make that profit
    dp[prices.length - 1][1] = prices[prices.length - 1] - fee;
    
    for (let i = prices.length - 2; i >= 0; i--) {
        
        // If you have no stock on day i, you can either buy stock, or stay without stock
        dp[i][0] = Math.max(
            -1 * prices[i] + dp[i+1][1],
            dp[i+1][0]
        );
        
        // If you have stock on day i, you can either sell stock, or stick with it
        dp[i][1] = Math.max(
            prices[i] + dp[i+1][0] - fee,
            dp[i+1][1]
        );
    }
    
    // the answer we want is dp[0][0] => profit we can make on day 0 when we start with no stock
    
    return dp[0][0];
    
};
```

## Conclusion

Again, the solutions using DP are not optimal. There may be faster solutions and solutions that use less storage.

However, dynamic programming gives a very useful framework to solve such problems, especially when constraints are changing, with only minor tweaks required in the code.
