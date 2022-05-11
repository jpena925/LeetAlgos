/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //Brute
    // let max = 0
    // let curr = 0
    // for(let i = prices.length - 1; i > -1; i--){
    //     for(let j = i - 1; j > - 1; j--){
    //         curr = prices[i] - prices[j]
    //         max = Math.max(curr, max)
    //     }
    // }
    // return max;
    
    
    //better runtime
    let max = 0
    let minPrice = Infinity
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i]
        }

        let curr = prices[i] - minPrice
        
        max = Math.max(max, curr)
        
    }
    return max
};