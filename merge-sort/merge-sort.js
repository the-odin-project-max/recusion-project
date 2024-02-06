function mergeSort(array, deep = 0){

	if(array.length === 1){
		return array;
	}

	// Split current array in two halfs
	var half_length = Math.ceil(array.length / 2);    
	var leftSide = array.slice(0,half_length);
	var rightSide = array.slice(half_length,array.length)

	// Sort sub arrays
	var leftSideSorted = mergeSort(leftSide);
	var rightSideSorted = mergeSort(rightSide);

	var sortedArray = [];
	
	
	// Compare first element of two sorted array while no array is empty
	while(leftSideSorted.length > 0 || rightSideSorted.length > 0){
		if(leftSideSorted[0] <= rightSideSorted[0]){
			sortedArray.push(leftSideSorted.shift());
		}
		else if(leftSideSorted[0] > rightSideSorted[0]){
			sortedArray.push(rightSideSorted.shift());
		}

		if(leftSideSorted.length === 0){
			for(let i = 0; i < rightSideSorted.length; i++){
				sortedArray.push(rightSideSorted.shift());
			}
		}
		if(rightSideSorted.length === 0){
			for(let i = 0; i < leftSideSorted.length; i++){
				sortedArray.push(leftSideSorted.shift());
			}
		}

	}

	return sortedArray;

}

console.log(mergeSort([2, 1]));
console.log(mergeSort([3, 2, 1]));
console.log(mergeSort([3, 2, 1, 13]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 120]));