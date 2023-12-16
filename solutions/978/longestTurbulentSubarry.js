/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
	let [L, R] = [0, 1];
	let [res, prev] = [1, ''];
	while (R < arr.length) {
		if (arr[R - 1] > arr[R] && prev !== '>') {
			res = Math.max(res, R - L + 1);
			R += 1;
			prev = '>';
		} else if (arr[R - 1] < arr[R] && prev !== '<') {
			res = Math.max(res, R - L + 1);
			R += 1;
			prev = '<';
		} else {
			R = arr[R] === arr[R - 1] ? R + 1 : R;
			L = R - 1;
			prev = '';
		}
	}
	return res;
};
