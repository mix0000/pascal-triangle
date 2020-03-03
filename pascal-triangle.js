class Pascal {
	constructor(n) {
		this.nth = n
	}
	pascalLine(degree) {
		let arr = []
		switch(degree) {
			case 0: break;
			case 1: arr.push(1); break;
			default:
			for (let i = 0; i <= degree; i++) 
				arr.push(Math.combinations(degree, i))
		}
		return arr
	}
	pascalTriangle(degree) {
		let arr = [];
		for (let i = 1; i <= degree; i++) 
			arr.push(this.pascalLine(i).join(", "))
		return arr;
	}
	singleLine() {
		return this.pascalLine(this.nth).join(", ")
	}
	multiLine() {
		return this.pascalTriangle(this.nth).join("\n")
	}
}