// Object
// Attributes/properties - features, characteristics, fields;
// Behaviors - doing stuff;

/*
Data Type(Data Structure)
________________________
- Numbers
- Char
- Boolean
- Undefined
- null
----

- List
- Char
- Object(Hashes)
*/

class Phone {
	// Properties
	constructor(phoneName, phoneBrand, make) {
		this.phoneBrand = phoneBrand;
		this.phoneName = phoneName;
		this.make = make;
	}

	// Methods;
	ring() {
		// ring;
		log(`${this.make} phone is ringing`);
	}
}

// Instance of Phone;
const iPhone = new Phone("iPhone 12", "Pro Max", "Apple");
const phoneName = iPhone.phoneBrand;
iPhone.ring();

// Instance of String;
const userName = "Daniel";
userName.toUpperCase();
