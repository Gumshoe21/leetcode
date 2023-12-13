/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
	let specialPositions = 0;

	for (let i = 0; i < mat.length; i++) {
		let index = checkRow(mat, i);
		if (index >= 0 && checkColumn(mat, i, index)) specialPositions++;
	}

	return specialPositions;

	function checkRow(mat, i) {
		let index = -1;

		for (let j = 0; j < mat[0].length; j++) {
			if (mat[i][j] === 1) {
				if (index >= 0) return -1;
				else index = j;
			}
		}
		return index;
	}

	function checkColumn(mat, i, index) {
		for (let j = 0; j < mat.length; j++) {
			if (mat[j][index] === 1 && j !== i) return false;
		
		return true;
	}
};

// NAIVE SOLUTION

// let rows = mat.length
// let cols = mat[0].length
// let count1Rows = new Array(rows).fill(0)
// let count1Cols = new Array(cols).fill(0)
// let count = 0;
// for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//         if (mat[r][c] === 1) {
//             count1Rows[r]++;
//             count1Cols[c]++;
//         }
//     }
// }

// for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//         if (mat[r][c] === 1 && count1Rows[r] === 1 && count1Cols[c] === 1) count++
//     }
// }
// return coun
