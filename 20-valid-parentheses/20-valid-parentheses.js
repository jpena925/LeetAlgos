/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pairs = {
      "(": ")",
      "{": "}",
      "[": "]",
    }
    const stack = []
    for(let i = 0; i < s.length; i++){
        if(pairs.hasOwnProperty(s[i])){
            stack.push(s[i])
        } else {
            let match = stack.pop()
            if(s[i] !== pairs[match]){
                return false
            }
        }
    }
    return stack.length === 0
    
};