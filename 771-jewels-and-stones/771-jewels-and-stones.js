/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jObj = {}
    let count = 0
    for(let i = 0; i < jewels.length; i++){
        jObj[jewels[i]] = 1
    }
    for(let i = 0; i < stones.length; i++){
        if(jObj[stones[i]]){
            count++
        }
    }
    return count;
    
};