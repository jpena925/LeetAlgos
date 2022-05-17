/**
 * @param {number} n
 * @return {number}
 */
var fib = function(num) {
	const fib = [0, 1];

	if (num === 0) {
		return 0;
	} else if (num === 1) {
		return 1;
	} else {
		for (let i = 2; i < num + 1; i++) {
			fib.push(fib[i - 1] + fib[i - 2]);
		}
		return fib[num];
	}
}