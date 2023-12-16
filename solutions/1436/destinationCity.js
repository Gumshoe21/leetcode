/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
	let hasOutgoing = new Set();
	for (let i = 0; i < paths.length; i++) {
		hasOutgoing.add(paths[i][0]);
	}
	for (let i = 0; i < paths.length; i++) {
		let candidate = paths[i][1];
		if (!hasOutgoing.has(candidate)) {
			return candidate;
		}
	}
	return '';
};
