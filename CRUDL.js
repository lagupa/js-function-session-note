const contacts = [
	{
		id: 1,
		firstName: "Lagu",
		lastName: "Stephen",
		age: 56,
	},
	{
		id: 2,
		firstName: "Daniel",
		lastName: "JD",
		age: 96,
	},
	{
		id: 3,
		firstName: "Justin",
		lastName: "Mario",
		age: 2,
	},
	{
		id: 4,
		firstName: "Sara",
		lastName: "John",
		age: 5,
	},
];

// CRUDL = L, R, C, D, U

// get contact with id = 2

// Listing contact
const readContactList = (contact, index, arr) => {
	// console.log(index);
	// console.log(contact);
};
const readContactDetail = (contact) => contact.id === 2;

const detail = contacts.find(readContactDetail);
// console.log(detail);

contacts.map(readContactList);

const oneMore = {
	id: 0,
	firstName: "Joe",
	lastName: "Doe",
	age: 16,
};

// DON'T use push or pop for react because this mutates the array, unless immer.js

// contacts.push(oneMore);

// Use contact, splice for
const addContact = contacts.concat(oneMore);
// console.log(contacts);
// console.log(addContact);

// contacts.pop(); // DON'T do this for React
// contacts.pop(); // DON'T do this for React

const edited = {
	id: 2,
	firstName: "Justin",
	lastName: "Artema",
	age: 13,
};

// data that needs edited
// id // 2

// console.log(contacts);

const editContact = contacts.map((contact) => {
	if (contact.id === 3) {
		return edited;
	}
	return contact;
});

// console.log(editContact);

const numbers = [1, 3, 6, 7, 8];

// numbers.pop();
// numbers.push(10);
// const modified = numbers.concat(10);
const hashed = numbers.map((num) => `#${num}`);
console.log(numbers);
console.log(hashed);

// KEY data structures
// String
// Numbers
// Objects, hashes
// Arrays
// Sets
