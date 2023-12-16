/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
	const m = grid.length;
	const n = grid[0].length;
	const diff = Array.from({ length: m }, () => Array(n).fill(0));
	const onesRow = Array(m).fill(0);
	const onesCol = Array(n).fill(0);
	const zerosRow = Array(m).fill(0);
	const zerosCol = Array(n).fill(0);

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 1) {
				onesRow[i]++;
				onesCol[j]++;
			}
			if (grid[i][j] === 0) {
				zerosRow[i]++;
				zerosCol[j]++;
			}
		}
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
		}
	}

	return diff;
};
