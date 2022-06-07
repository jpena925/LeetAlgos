/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    
    let rows = mat.length
    let cols = mat[0].length
    
    if(rows * cols !== r*c) return mat
    if(rows === r && cols === c) return mat
    
    let res = []
    let temp = []
    let x= 0, y = 0
    for(let i = 0; i < r; i++){
        temp = []
        for(let j = 0; j < c; j++){
            temp.push(mat[x][y])
            y = (y + 1) % cols
            if(y === 0) x++
        }
        res.push(temp)
    }

    return res
};