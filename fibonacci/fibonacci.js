function fibs(number){
	fibonacci_suite = []
	for(var i=0;i<number;i++){
		if(i === 0 || i === 1){
			fibonacci_suite.push(i);
		} else {
			fibonacci_suite.push(fibonacci_suite[i-1]+fibonacci_suite[i-2]);
		}
	}
	return fibonacci_suite;
}

function fibsRec(number){
	if(number === 1){
		return [0];
	}
	if(number === 2){
		return [0, 1];
	}
	fibonacci_suite = fibsRec(number-1)
	last_number = fibonacci_suite[fibonacci_suite.length - 1]+fibonacci_suite[fibonacci_suite.length - 2]
	return [fibonacci_suite, last_number].flat()
}

console.log("Using Iteration : ")
console.log(fibs(3));
console.log(fibs(8));

console.log("Using Recursion : ")
console.log(fibsRec(3));
console.log(fibsRec(8));