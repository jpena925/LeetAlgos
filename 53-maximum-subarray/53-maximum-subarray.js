/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity
    let sum = -Infinity;
    for(let i = 0; i< nums.length; i++){
        sum = Math.max(0, sum)
        sum += nums[i]
        max = Math.max(sum, max)
    }
    return max;
};