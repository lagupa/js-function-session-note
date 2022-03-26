const { log } = console;
// Data types

// Fundamental Data types
/*
- Numbers: Integers and Floating points
  - integers: 3, 5, 9, 200 etc
  - floating point: 3.56, 600.089
- Textual Data
  - Char(letter): "A", "b", "z", "t"
  - * Strings(Words and sentence): "Join", "Hey there, how are"
  - Numerical Strings: "348", "$ I am 23 year old"
  - Can contain special character[not(a-zA-Z0-9)]
- Boolean:
  - True
  - False
  - Truthy and Falsey Values: 2,"",(Assign: Find out all values are falsey and truthy?)

- Nothingness: null, undefined;

*/

let a;
a = 0;
a = 1;
// a = "";
// a = {};
if (a) {
	// do something
	log(a + " is a truthy value");
} else {
	// do the opposite
	log(a + " is a falsy value");
}

// Derived Data types
/*
- String: "Hello", "Sentences", "Paragrap"
- Arrays(Lists): ["apple", "mongoes", "Berry"]
- Objects(Hashes, map):
 Pearson =  {
  age:34,
  name:"Abu",
  village:"Vura",
  favorites_fruits:["apple", "mongoes", "Berry"]
}

*/
