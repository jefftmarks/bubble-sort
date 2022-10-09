function bubbleSort(arr) {
	let flag = true;
  while (flag) {
		flag = false;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				flag = true;
				arr[i] = arr[i] + arr[i + 1];
				arr[i + 1] = arr[i] - arr[i + 1];
				arr[i] = arr[i] - arr[i + 1];
			}
		}
	}
	return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

/**
 * Loop through array
 * Perform for loop where current and next num are compared and swapped if necessary
 * use a flag to keep track of whether any swaps were made and then reset
 */
