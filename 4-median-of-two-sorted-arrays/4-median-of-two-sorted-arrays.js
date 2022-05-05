/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = [...nums1, ...nums2]
    newArr.sort((a,b) => a < b ? -1 : 1)
    let center = newArr.length / 2
    if(center % 1 !== 0){
      return newArr[center - 0.5]
    } else {
      return (newArr[center - 1] + newArr[center]) / 2
    }
};