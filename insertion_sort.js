function insertionSort(arr){
	for (var i = 1; i < arr.length; i++) {
		var currentVal = arr[i] 
		for (var j = i-1; j >= 0 && arr[j] > currentVal; j--){
			console.log(arr, i, j, arr[i], arr[j],currentVal,j+1)
			arr[j+1] = arr[j]
		}
		console.log(j, currentVal)
		arr[j+1] = currentVal
	}
	return arr
}

insertionSort([1,2,76,0])