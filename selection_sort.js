function selectionSort(arr){
	for (var i = 0; i < arr.length; i++) {
		var min = i;
		for (var j = i+1; j < arr.length; j++){
			console.log(arr, arr[i], arr[j])
			if(arr[j] < arr[min]){
				min = j
			}
		}
		if(min != i){
			var temp = arr[i]
			arr[i] = arr[min]
			arr[min] = temp
		}
		console.log("-----pass-----")
	}
	return arr
}

selectionSort([3,2,-1,2])

// 3 2 -1 2
//-1 2 3 2