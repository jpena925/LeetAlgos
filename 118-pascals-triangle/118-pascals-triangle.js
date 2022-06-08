/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [[1], [1,1]];
    let temp = [1]
    numRows = numRows - 2
    let pushes = 0
    
    while(pushes < numRows){
        temp = [1]
        for(let i = 0; i < res[res.length - 1].length - 1; i++){
            temp.push(res[res.length - 1][i] + res[res.length - 1][i + 1])
        }
        temp.push(1)
        res.push(temp)
        pushes++
    }
    
    return res.slice(0, numRows + 2);
    
};