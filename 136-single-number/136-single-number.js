/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {}
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = ++obj[nums[i]] || 1
    }
    console.log(obj)
    for(key in obj){
        if(obj[key] === 1){
            return key
        }
    }
};