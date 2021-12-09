// The Sum of a Range

function range(start, end) {
	let arr = [];

	for (let num = start; num <= end; num++) {
		arr.push(num);
	}
	return arr;
}

range(0,6)

function sum(arr) {
	let sum = 0;
	for(let elt of arr) {
		sum += elt;
	}
	return sum;
}

console.log(sum(range(1, 10)))

function range(start, end, step) {
	let arr = [];
	if (end - start >= 0) {
		step = step || 1;
	} else {
		step = step || - 1;
	}
	

	if (step > 0) {
		for (let num = start; num <= end; num += step) {
			arr.push(num);
		}
		return arr;
	} else {
		for (let num = start; num >= end; num += step) {
			arr.push(num);
		}
		return arr;
	}
}

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(range(5, 2));

// Reversing an Array
function reverseArray(arr) {
	let reversedArr = [];

	for (let i = 0; i < arr.length; i ++) {
		reversedArr.push(arr[arr.length - 1 - i]);
	}

	return reversedArr;
}

let test = [1, 2, 3, 4];
console.log(reverseArray(test));
console.log(test);

function reverseArrayInPlace(arr) {
	for (let i = 0; i < Math.floor(arr.length / 2) ; i ++) {
		let start_elt = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = start_elt;
	}
}
console.log(reverseArrayInPlace(test))
console.log(test);

// A List
function arrayToList(arr) {
	let list = null;
	for (let i = 0; i < arr.length; i ++) {
		list = {
			value: arr[arr.length - 1 - i],
			rest: list
		}
	}
	return list;
}

console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
	let arr = [];
	for (let node = list; node; node = node.rest) {
		arr.push(node.value);
	}
	return arr;
}

let list = arrayToList([1, 2, 3]);
console.log(listToArray(list));

function prepend(elt, list) {
	let newList = {
		value: elt,
		rest: list
	};
	return newList;
}

function nth(list, n) {
	let counter = 0;
	let elt = null;
	for (let node = list; node; node = node.rest) {
		if (counter == n) {
			return node.value;
		} else {
			counter ++;
		}
	}
	return undefined;
}

console.log(nth(list, 2))

function nth2(list, n) {
	let counter = n;
	let elt = list.value;
	while (counter > 0) {
		if (list.rest) {
			list = list.rest;
			counter --;
			elt = nth2(list, counter);
		} else {
			return undefined;
		}
	}
	return elt;
}

console.log(nth2(list, 2));

// Deep Comparison
function deepEqual(obj1, obj2) {
	let areEqual = true;
	if ((typeof obj1 == "object") && (typeof obj2 == "object") && obj1 != null) {
		if (Object.keys(obj1).length === Object.keys(obj2).length) {
			let counter = 0;
			while (areEqual && counter < Object.keys(obj1).length) {
				for (let key of Object.keys(obj1)) {
					if (typeof obj2[key] !== "undefined") {
						if (typeof obj1[key] == "object") {
							areEqual = areEqual && deepEqual(obj1[key],obj2[key]);
						} else {
							areEqual = areEqual && (obj1[key] === obj2[key])
						}
					} else {
						areEqual = false;
					}
				}
				counter ++;
			}
		} else {
			return false;
		}	
	} else {
		if (obj1 === obj2) {
			return true;
		} else {
			return false;
		}
	}
	
	return areEqual
}