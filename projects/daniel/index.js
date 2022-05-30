const form = document.getElementById("result");
const result = document.getElementById("compute-result");

function processFormInput(event) {
	event.preventDefault();
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);
	let operator = document.getElementById("operator").value;
	result.innerHTML = computeResult(num1, num2, operator);
}

function computeResult(num1, num2, operator) {
	if (operator === "+") {
		return num1 + num2;
	}
	if (operator === "-") {
		return num1 - num2;
	}
	if (operator === "*") {
		return num1 * num2;
	}
	return num1 / num2;

	// TODO: Handling error
}

form.addEventListener("submit", processFormInput);

// Next assignment
/*
Build a todo application
- todo item
- status:
  - title of the todo,
  - doing,
  - completed/done,
  - number,
  - date of creation
  - date of modification

- Operations on the todo application: CRUD(L)
  - create,
  - read
    - listing, show todo items with
    - detail
  - update,
  - delete,


Persistence: local-storage

*/
