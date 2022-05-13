/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let nArr = []
    for(let i = n; i > 0; i--){
        if(i % 15 === 0){
            nArr.unshift("FizzBuzz")
        } else if (i % 3 === 0){
            nArr.unshift("Fizz")
        } else if (i % 5 === 0){
            nArr.unshift("Buzz")
        } else {
            nArr.unshift(i.toString())
        }
    }
    return nArr
    };
