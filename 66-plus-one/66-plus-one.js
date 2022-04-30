/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
// add one to last digit, if its a nine, add it to the one before it, if thats one, add one to it
        digits.reverse()
        digits[0] = digits[0] + 1
        for(let i = 0; i < digits.length; i++){
            if(digits[i] === 10){
                digits[i] = 0
                digits[i + 1] = digits[i + 1] + 1 || 1
            } 
        }
        return digits.reverse()
    };