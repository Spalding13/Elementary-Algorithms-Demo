//D(O) <= n^2
//run j loop fewer times
function bubbleSort1(arr) {
	var iterations = 0
	for (var i = arr.length-1; i >= 0 ; i--) {
		var noSwaps = true
		for (var j = 0; j <= i-1 ; j++) {
			console.log(arr, arr[j], arr[j+1])
			if(arr[j] > arr[j+1]){
				noSwaps = false
				var temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
			iterations++
		}
		console.log("----pass_1-----")
		if(noSwaps){
			break;
		}
	}
	console.log(iterations)
	return arr;
}

//D(O) = n^2
function bubbleSort2(arr){
	var iterations = 0
	for (var i = 0; i < arr.length; i++) {
		//var noSwaps = true
		for (var j = 0; j < arr.length; j++){
			console.log(arr, arr[i], arr[j])
			if (arr[j] > arr[j+1]){
				noSwaps = false
				var temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
			iterations++
		}
		console.log("----pass_2-----")
		//if(noSwaps){
			//break
		//}
	}
	console.log(iterations)
	return arr;
}

bubbleSort1([9,1,2,3,4,5,6,7,8])
bubbleSort2([9,1,2,3,4,5,6,7,8])