/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {}
    for(let i = 0; i < s.length; i++){
        obj[s[i]] = ++obj[s[i]] || 1
    }
    for(let j = 0; j < s.length; j++){
        if(obj[s[j]] === 1){
            return j
        }
    }
    return -1
    
};