// Run all in Google Chrome

// Minimum
function min(a,b) {
	if (a <= b) {
		return a;
	} else {
		return b;
	}
}
console.log(min(2,3));
console.log(min(100,-5));
console.log(min(10,100));

// Recursion
function isEven(N) {
	if (N === 0) {
		return true;
	} else if (N === 1) {
		return false;
	} else {
		return isEven(N - 2);
	}
}

console.log(isEven(2));
console.log(isEven(5));
console.log(isEven(126));

// Bean Counting
function countBs(str) {
	let counterBs = 0;
	let counter = 0;

	while (counter < str.length) {
		if (str[counter] === "B") {
			counterBs ++;
		}
		counter ++;
	}

	return counterBs;
}

console.log(countBs("aBcBdBeB"));
console.log(countBs("abc"));
console.log(countBs("BBb"));

let countChars = function(str, char) {
	let counterChars = 0;
	let counter = 0;

	while (counter < str.length) {
		if (str[counter] === char) {
			counterChars ++;
		}
		counter ++;
	}

	return counterChars;
};

console.log(countChars("aBcBdBeB", "a"));
console.log(countChars("abc", "A"));
console.log(countChars("BBb", "b"));

let countBs2 = function(str) {
	return countChars(str, "B")
};
console.log(countBs2("aBcBdBeB"));
console.log(countBs2("abc"));
console.log(countBs2("BBb"));
