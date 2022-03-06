const { log } = console;

// function key
function getAge() {
	// do somethings
	log("Function key");
}

// Function expression: var, let, const;
let getUserName = () => {
	// do something
	log("Function Expression");
};

const getUserCountry = function () {
	// do somethings
	log("Uganda");
};

// IIFE - Immediately Invoked Function Expression
(function () {
	log("IIEF Function");
})();

(function foo1(age) {
	console.log(age);
})(45);

// Or
(function foo2(age) {
	console.log(age);
})(455);

// getAge();
// getUserName();
// getUserCountry();
