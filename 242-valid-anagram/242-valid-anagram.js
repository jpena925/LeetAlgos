/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sObj = {}
    if(s.length !== t.length){
        return false
    }
    for(let i = 0; i < s.length; i++){
        sObj[s[i]] = ++sObj[s[i]] || 1
    }
    for(let j = 0; j < t.length; j++){
        if(sObj[t[j]]){
            sObj[t[j]] = --sObj[t[j]]
        } else {
            return false
        }
    }
    return true
};