/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
      const dups = {}
  for (let i = 0; i < nums.length; i++){
    if(nums[i] in dups){
      return nums[i]
    } else {
      dups[nums[i]] = i
    }
  } 
  return -1
};