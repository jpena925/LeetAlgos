/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = []
    let l = 0
    let r = nums.length - 1
    let p = r
    
    while(l <= r){
        if(nums[r]**2 > nums[l]**2){
            res[p--] = nums[r--]**2
        } else {
            res[p--] = nums[l++]**2
        }
    }
    return res
    
};