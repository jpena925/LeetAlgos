/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let first = {}
    let combined = []
    
    for(let i = 0; i < nums1.length; i++){
        first[nums1[i]] = first[nums1[i]] + 1 || 1
    }
    
    for(let j = 0; j < nums2.length; j++){
        if(first[nums2[j]] > 0){
            combined.push(nums2[j])
            first[nums2[j]]--
        }
    }
    
    return combined;
    
    
    
};