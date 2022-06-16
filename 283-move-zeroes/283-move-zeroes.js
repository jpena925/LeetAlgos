/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0
    let j = 1
    
    while (j < nums.length){
        //check if i is 0 and if j isnt, set i to j
        //remove j and push a 0?
        if(nums[i] === 0 && nums[j] !== 0){
            nums[i] = nums[j]
            nums.splice(j, 1)
            nums.push(0)
            i++
            j = i + 1
        } else if (nums[i] === 0 && nums[j] === 0) {
            j++
        } else {
            i++
            j++
        }
    }
    
    return nums
};