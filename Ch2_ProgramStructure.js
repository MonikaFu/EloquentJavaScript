// Run all in Google Chrome

// Looping a traingle

let line = "";

while (line.length < 7) {
	console.log(line);
	line += "#";
}

//FizzBuzz #1

for (let num = 1; num <= 100; num++) {
	if (num % 3 == 0) {
		console.log("Fizz");
	} else if (num % 5 == 0) {
		console.log("Buzz");
	} else {
		console.log(num);
	}
}

//FizzBuzz #2

for (let num = 1; num <= 100; num++) {
	let string = "";
	if (num % 3 == 0) {
		string += "Fizz";
	}
	if (num % 5 == 0) {
		string += "Buzz";
	} 

	console.log(string || num);
}

//Chessboard
let str = "";
let size = 8;
for (let length = 0; length < size; length++) {
	for (let width = 0; width <= size; width++) {
		if (width == size) {
			str += "\n";
		} else {
			if (length % 2 == 0) {
				if (width % 2 == 0) {
					str += " ";
				} else {
					str += "#";
				}
			} else {
				if (width % 2 == 0) {
					str += "#";
				} else {
					str += " ";
				}	
			}
		}
	}
}
console.log(str)