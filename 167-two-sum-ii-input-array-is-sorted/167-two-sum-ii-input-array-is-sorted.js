/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let res = []
    for(let i = 0; i < numbers.length; i++){
        let compliment = target - numbers[i]
        for(let j = i + 1; j < numbers.length; j++){
            if(numbers[j] > compliment) break
            if(numbers[j] === compliment){
                res = [i+1, j+1]
                return res
            }
        }
    }
};