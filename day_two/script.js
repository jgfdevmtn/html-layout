let change = (arr) => {
	if(arr.length<=1){
		return arr;
	} else {
		const first = arr[0];
		arr[0] = arr[arr.length-1];
		arr[arr.length-1] = first;
		return arr;
	}
}

console.log(change([1,2,3,4,5]))	
