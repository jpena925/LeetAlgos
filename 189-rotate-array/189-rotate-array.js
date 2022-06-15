/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let res = []
    for(let i = 0; i < nums.length; i++){
        res[(i + k) % nums.length] = nums[i]
    }
    for(let j = 0; j < nums.length; j++){
        nums[j] = res[j]
    }
    return nums
};