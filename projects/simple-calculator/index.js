const { log } = console;

// SINGLE RESPONSIBILITY

// add

const add = (fValue, lValue) => {
	return fValue + lValue;
};

// subtraction
const subtract = (fValue, lValue) => {
	return fValue - lValue;
};

// multiply
const multiply = (fValue, lValue) => {
	return fValue * lValue;
};

// divide
const divide = (fValue, lValue) => {
	return fValue / lValue;
};

const calculate = (fValue, operator, lValue) => {
	if (operator === "*") {
		return multiply(fValue, lValue);
	} else if (operator === "-") {
		return subtract(fValue, lValue);
	}
	return null;
};

// calculate(args) to browser

log(add(3, 5));
log(subtract(3, 5));
log(divide(3, 0));
log(multiply(3, 0));
