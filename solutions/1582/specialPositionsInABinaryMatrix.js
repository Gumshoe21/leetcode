/**
 * Function to count the number of "special" positions in a binary matrix.
 * A position is considered special if it is the only '1' in its row and column.
 * 
 * @param {number[][]} mat - The binary matrix.
 * @return {number} - The count of special positions.
 */
var numSpecial = function (mat) {
	let specialPositions = 0;
	// Iterate through each row of the matrix.
	for (let i = 0; i < mat.length; i++) {
		// Check for the index of the '1' in the current row.
		let index = checkRow(mat, i);
		// If the '1' is the only one in its row and column, increment the counter.
		if (index >= 0 && checkColumn(mat, i, index)) {
			specialPositions++;
		}
	}
	// Return the count of special positions.
	return specialPositions;
	/**
	 * Helper function to check the index of the '1' in a given row.
	 * Returns -1 if there is no '1' or the index of the '1' otherwise.
	 * @param {number[][]} mat - The binary matrix.
	 * @param {number} i - The index of the current row.
	 * @return {number} - The index of the '1' or -1 if there is no '1'.
	 */
	function checkRow(mat, i) {
		// Initialize the index to -1, indicating no '1' found.
		let index = -1;
		// Iterate through each column in the current row.
		for (let j = 0; j < mat[0].length; j++) {
			// If a '1' is found in the row, update the index.
			if (mat[i][j] === 1) {
				// If there was already a '1' in the row, return -1. This means that any '1' we already found would be rendered non-special due to there being another '1' in that row.
				if (index >= 0) {
					return -1;
				} else {
					// Update the index to the column where '1' is found.
					index = j;
				}
			}
		}
		// Return the final index (or -1 if no '1' was found).
		return index;
	}
	/**
	 * Helper function to check if the '1' in the current row is the only one in its column.
	 *
	 * @param {number[][]} mat - The binary matrix.
	 * @param {number} i - The index of the current row.
	 * @param {number} index - The index of the '1' in the current row.
	 * @return {boolean} - True if the '1' is the only one in its column, false otherwise.
	 */
	function checkColumn(mat, i, index) {
		// Iterate through each row in the matrix.
		for (let j = 0; j < mat.length; j++) {
			// If a '1' is found in the same column of another row, return false.
			if (mat[j][index] === 1 && j !== i) {
				return false;
			}
		}

		// If no other '1' is found in the column, return true.
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
