function Pascal(n) {
    const pascalLine = degree => {
		let arr = []
		switch(degree) {
			case 0: break;
			case 1: arr.push(1); break;
			default:
			for (let i = 0; i <= degree; i++) 
				arr.push(combinations(degree, i))
		}
		return arr
    }
    const pascalTriangle = degree => {
		let arr = [];
		for (let i = 1; i <= degree; i++) 
			arr.push(pascalLine(i).join(", "))
		return arr;
	}
    
    const singleLine = () => pascalLine(n).join(", ")
    const multiLine = () => pascalTriangle(n).join("\n")

    return {
        singleLine,
        multiLine
    }
}

function combinations(n, r) {
    if ((typeof n != 'number') || (typeof r != 'number')) {
        throw new Error('Parameters must be a number')
    }
    else if ((n < 0) || (r < 0)){
        throw new Error('Parameters must be a positive');
    }
    else if (r > n){
        throw new Error('The second parametre must be less then first');
    }
    switch (n | r) {
        case r == n:
        case r == 0:
            return 1;
        default: 
            return factorial(n) / (factorial(n - r) * factorial(r));
    }
}
function factorial(n) {
    if (typeof n != 'number') {
        throw new Error('Parametre must be a number');
    }
    else if (n < 0) {
        throw new Error('Parametre must be a positive or 0');
    }
    return n ? n * factorial(n - 1) : 1;
}
