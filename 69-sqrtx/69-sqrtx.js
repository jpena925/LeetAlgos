/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    //return what times what equals x
    let i = 0
    while (i <= x){
        if (i * i < x){
            i++
        } else if (i * i === x) {
            return i
        } else {
            return i - 1
        }
    }
};