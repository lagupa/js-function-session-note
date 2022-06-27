import React, { useState } from "react";

const ContactForm = () => {
	const [firstName, setFirstName] = useState("John");
	const [lastName, setLastName] = useState("Lagu");

	console.log(firstName, lastName);

	return (
		<div>
			<input value={firstName} type="text" placeholder="First Name" />
			<input value={lastName} type="text" placeholder="Last Name" />
		</div>
	);
};

export default ContactForm;
