function selectionSort(arr){
	for (var i = 0; i < arr.length; i++) {
		var min = i
		for (var j = i + 1; j < arr.length; j++){
			console.log(arr, min, j)
			if(arr[min] > arr[j]){
				min = j
			}
		}
		if(min != i){
			[arr[i], arr[min]] = [arr[min], arr[i]]
		}
		console.log("-----pass-----")
	}
	return arr
}

selectionSort([11,35,19,14,-10])


function bubbleSort(arr){
	for (var i = arr.length-1; i >= 0; i--) {
		for (var j = 0; j <= i; j++){
			if(arr[j] > arr[j+1]){
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]]
			}
		}
	}
	return arr
}

bubbleSort([11,35,19,14,-10])


function insertionSort(arr){
	for (var i = 1; i < arr.length; i++){
		var currentVal = arr[i] 
		for (var j = i-1; j >= 0 && arr[j] > currentVal; j--){
			arr[j+1] = arr[j]
		}
		arr[j+1] = currentVal
	}
	return arr
}

insertionSort([11,35,19,14,-10])