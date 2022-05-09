/*
ITERATION (loops)
- Repeat
- Loops
- Again
- Regular schedule
- Cycles
- "-ly" adverbs: yearly, monthly, daily

Flavors:
- Infinite
  - not mostly useful
  - Infinite loop, and program crash
- Finite
  - Most useful,
  - Iteration stops when a given condition is satisfied

Representaion
- Loops: for loops, while loop
- Recursions
*/

// While
// var, let not const!

const { log } = console;

let i = 7;
while (i < 9) {
	// do somthing (loop)
	// log(i);
	i = i + 1; // forgetting this results into an infinite loop
}

let y = 0;
do {
	y = y + 1; // first thing is to set the increment
	// do something
	// log(y); // 0 1 2 3 4 5
} while (y < 5);

// 7, 8

// For loops

for (let x = 0; x < 6; x = x + 1) {
	log(x);
}
