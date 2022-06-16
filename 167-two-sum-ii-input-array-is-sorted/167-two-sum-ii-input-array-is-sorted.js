/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0
    let end = numbers.length - 1
    let result = []
    
    while (start < end) {
        const sum = numbers[start] + numbers[end]
        if (sum === target) {
            return [start + 1, end + 1]
        } else if (sum < target) {
            start++
        } else if (sum > target) {
            end --
        }
    }
    
    return result
};