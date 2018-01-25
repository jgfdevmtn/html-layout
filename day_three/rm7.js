let rem = (arr) => {
	if (arr.length===0) return arr;
	arr.splice(arr.indexOf(Math.min.apply(null,arr)), 1)
	return arr;
}

console.log(rem([1,1,2,3,3]))

