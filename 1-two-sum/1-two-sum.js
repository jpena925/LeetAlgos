/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numObj = {}
    for (i = 0; i < nums.length; i++){
        let diff = target - nums[i]
        if(diff in numObj){
            return [i, numObj[diff]]
        } else {
            numObj[nums[i]] = i
        }
    }
};
