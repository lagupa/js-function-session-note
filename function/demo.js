let fullName = function (fName, lName) {
	console.log("1 - Full Name: " + fName + " " + lName);
};

(function (fName, lName) {
	console.log("2 - Full Name: " + fName + " " + lName);
})("Lagu", "Longa");
