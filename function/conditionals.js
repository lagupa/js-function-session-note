// Data types - strings, number, objects, arrays, date
const { log } = console; // object destructuring

const num = 3;
let age = "3";
// ==
log(num == age);

// ===
log(num === age); // exact/strict

const userNames = ["Justin", "john", "Mama", "Aman", "Emma", "Juma"];

const jUserNames = [];

for (let i = 0; i < userNames.length; i++) {
	// making decision
	if (userNames[i].toUpperCase().startsWith("J")) {
		// do something
		jUserNames.push(userNames[i]);
	}
}

// log(`There are ${jUserNames.length} number of users with name starting with J`);

// Conditionals

/*
- Conditionals are decissional -> directions
- expression that depends on its evaluation value to true/false (booleans)
*/

const itsRaining = true;

if (itsRaining) {
	// carry umbrella
	// log("I am carrying umbrella because it's raining");
} else {
	// walk without umbrella
	// log("No need to carry umbrella, it's not raining");
}

// Traffic

let trafficLight = "yellow";

if (trafficLight === "red") {
	log("stop");
} else if (trafficLight === "green") {
	log("go");
} else if (trafficLight === "yellow") {
	log("go with caution");
} else {
	log("drive");
}

// Assignment: convert code from line 45 to 55 using the ternary operator

// Other conditional condition
// Ternary operation
trafficLight === "red" ? log("Stop!") : log("Go!"); // assignment: write else if version for this.

// nullcoalescence
itsRaining && log("carry umbrella");
!itsRaining && log("leave umbrella");

// Switch statement
