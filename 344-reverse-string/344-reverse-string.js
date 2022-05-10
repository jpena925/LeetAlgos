/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let j = s.length - 1
  for(let i = 0; i < Math.ceil(s.length / 2); i++){
      let temp = s[i]
      s[i] = s[j]
      s[j] = temp
      j--
    }
};